/* 'use client' */


import Filters from "@/_custom_components/Filters/Filters";
import { listGenerations } from "@/_services/pokeApiService";

export default function Home() {
  const generations = listGenerations();
  
  return (
    <div className="h-[33vh] flex flex-1 flex-col justify-center w-full">
    {/* Welcome Message */}
    <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold mb-4 self-center">PokeFinder</h1>
    <Filters generationsPromise={generations}/>

  
  </div>
  );
}
