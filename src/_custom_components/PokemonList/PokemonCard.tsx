import { Pokemon } from 'pokenode-ts';
import React from 'react';

interface PokemonCardProps {
    //name: string;
    //imageU: string;
    //types: string[];
    pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    return (
        <div className="pokemon-card">
            {/* <img src={image} alt={name} className="pokemon-card__image" /> */}
            <h3 className="pokemon-card__name">{pokemon.name}</h3>
           {/*  <p className="pokemon-card__type">Type: {pokemon.types}</p> */}
        </div>
    );
};

export default PokemonCard;