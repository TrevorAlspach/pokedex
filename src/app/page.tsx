/* 'use client' */


import { FilterProvider } from "@/_context/FilterContext";
import Filters from "@/_custom_components/Filters/Filters";
import PokemonList from "@/_custom_components/PokemonList/PokemonList";
import SearchResults from "@/_custom_components/PokemonList/PokemonList";
import { getNationalDex, listGenerations, listPokedexes } from "@/_services/pokeApiService";
import { get } from "http";

export default function Home() {
  //const generations = listGenerations();
  const generations = listGenerations();
  const nationalDex = getNationalDex();
  
  return (
    <FilterProvider>
    <div className="h-[33vh] flex flex-1 flex-col justify-center w-full">
    {/* Welcome Message */}
    <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold mb-4 self-center">PokeFinder</h1>
    <Filters generationsPromise={generations}/>
    
      <PokemonList/>
    
  
  </div>
  </FilterProvider>
  );
}
