import { heros } from '../data/heros';

export const getHeroByName = (name) => {
  if (name === '') return [];
  return heros.filter((hero) => hero.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
};
