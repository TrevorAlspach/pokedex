'use client'

import React, { useContext } from 'react';
import PokemonCard from './PokemonCard';
import { useFilter } from '@/_context/FilterContext';

/* interface SearchResultsProps {
    filteredPokemon: string[]; // Replace `string[]` with the appropriate type for your results
} */

const PokemonList = () => {
    const {filters, dispatch} = useFilter();

    return (
        <div>
           {/*  {filteredPokemon.map((result, index) => (
                    <PokemonCard key={index} >{result}</PokemonCard>
                ))} */}
        </div>
    );
};

export default PokemonList;