'use client'

import { useFilter } from "@/_context/FilterContext";
import Dropdown from "@/_custom_components/DropDown/Dropdown";
import Search from "@/_custom_components/Search/Search";
import filterReducer, {initialState} from "@/_reducers/filterReducer";
import { Generation } from "pokenode-ts";
import { use, useReducer } from "react";

interface FiltersProps {
  generationsPromise: Promise<Generation[]>;
}

const Filters = ({generationsPromise}: FiltersProps) => {
    //const [filters, dispatch] = useReducer(filterReducer, initialState);
    const { state, dispatch } = useFilter();
    
    const generations = use(generationsPromise);
    console.log(generations)

    const generationNames = generations.map((gen) => gen.names.find((genName)=>genName.language.name==='en' ? true : false)?.name + ` (${gen.main_region.name})`);

    function handleGenerationChange(generation: string) {
        console.log("Selected generation:", generation);
        dispatch({ type: "SET_GENERATION_FILTER", payload: generation });
    }

    return (<>
    <div className="flex flex-row justify-center pt-5 pb-5">
      <Dropdown options={generationNames} onSelect={handleGenerationChange}/>
    </div>
    
    <Search className="w-3/4 md:w-3/5 lg:w-1/2"/>
    </>)
}

export default Filters;