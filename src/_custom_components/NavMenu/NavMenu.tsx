import React, { FC } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { listGenerations } from '@/_services/pokeApiService';
import { NamedAPIResourceList } from 'pokenode-ts';

interface NavMenuProps {}



const NavMenu = async (props: NavMenuProps) => {
  const generations = await listGenerations();


  return (
  <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Generations</NavigationMenuTrigger>
      <NavigationMenuContent>
      {generations.map((gen, index) => (
              <NavigationMenuLink key={gen.name} href={`/generation/${index + 1}`}>
                {gen.name.replace("-", " ")}
              </NavigationMenuLink>
            ))}
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

)
};

export default NavMenu;
