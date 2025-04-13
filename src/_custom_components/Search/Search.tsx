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
import Dropdown from "@/_custom_components/DropDown/Dropdown";


interface SearchProps {
  className?: string;
}

const Search = ({className}: SearchProps) => {

  const handleQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  const [searchQuery, setSearchQuery] = useState('');

  /* const filteredPokemons = allPokemons.filter((pokemon) =>
    pokemon.toLowerCase().includes(searchQuery.toLowerCase())
  ); */

  return(
    <>
  <div className="flex justify-center items-center">
      <Command className={`rounded-lg border shadow-md ${className}`}>
        <CommandInput
          placeholder="Search Pokémon"
          value={searchQuery}
          onValueChange={handleQueryChange}        
        />
      </Command>
    </div>
    </>
  )
};

export default Search;
