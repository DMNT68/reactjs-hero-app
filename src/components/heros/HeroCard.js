import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ id, superhero, alter_ego, first_appearance, characters, }) => {
    return (
        <div className="card ms-3 mb-3" style={{maxWidth: 300,}}>
            <div className="d-flex justify-content-md-around flex-wrap">
                <div style={{width:'40%'}}>
                    <img src={`./assets/heroes/${id}.jpg`} className="card-img" alt={superhero} />
                </div>
                <div style={{width:'60%'}}>
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {
                            (alter_ego !== characters) && <p className="card-text">{characters}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>
                        <Link to={`./hero/${id}`}>Mas...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
