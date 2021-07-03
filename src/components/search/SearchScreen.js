import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import querystring from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heros/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const { q = '' } = querystring.parse(location.search);

    
    const [values, handleInputChange] = useForm({ searchText: q });
    
    const {searchText} = values;

    const heroFiltered = useMemo(() => getHeroByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <div className="row">
      <div className="col-5">
        <h4>Searc Form</h4>
        <hr />
        <form onSubmit={handleSearch}>
          <div className="d-grid gap-2">
            <input autoComplete="off" type="text" placeholder="Find your hero" className="form-control" name="searchText" value={searchText} onChange={handleInputChange} />
            <button type="submit" className="btn btn-outline-primary">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="col-7">
        <h4>Results</h4>
        {
            q === '' && <div className="alert alert-info">Search a hero</div>
        }

        {
            (q !== '' && heroFiltered.length === 0) && <div className="alert alert-danger">There is not a hero with {q}</div>
        }
        {heroFiltered.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
};
