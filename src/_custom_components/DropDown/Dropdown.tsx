'use client';

import React, { use } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react";

interface DropdownProps {
    options: string[];
    onSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
    

    const [selectedOption, setSelectedOption] = React.useState<string>(options[0]);

    const handleSelection = (selectedOption:string) => {
        setSelectedOption(selectedOption);
        onSelect(selectedOption);
    };

    return (
        <DropdownMenu>
         <DropdownMenuTrigger asChild>
        <Button variant="outline">{selectedOption}
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
      {options.map((option, index) => (
        <>
            <DropdownMenuItem key={index} onClick={()=>{handleSelection(option)}}>{option}</DropdownMenuItem>
            </>
      ))}
        
        </DropdownMenuContent>
      </DropdownMenu>
    );
};

export default Dropdown;