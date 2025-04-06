'use client'
import React, { FC, useState } from 'react';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"


interface SearchProps {}

//const Search: FC<SearchProps> = () => {}
const Search = (props: SearchProps) => {
  const allPokemons = [
    'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard',
    'Squirtle', 'Wartortle', 'Blastoise', 'Pikachu', 'Raichu', 'Sandshrew',
    // Add more Pokémon names here
  ];

  const handleQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  const [searchQuery, setSearchQuery] = useState('');

  const filteredPokemons = allPokemons.filter((pokemon) =>
    pokemon.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return(
  <div className="flex justify-center items-center">
      <Command className="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput
          placeholder="Search Pokémon"
          value={searchQuery}
          onValueChange={handleQueryChange}        
        />
        <CommandList>
        
        {searchQuery.length > 0 && filteredPokemons.length > 0 ? (
            <CommandGroup>
               {filteredPokemons.map((pokemon, index) => (
              <CommandItem key={index}>{pokemon}</CommandItem>
            ))}
            </CommandGroup>
        ) : (<></>)}

        </CommandList>
      </Command>
    </div>
  )
};

export default Search;
