import React, { FC } from 'react';
import Link from "next/link"
import Search from '../Search/Search';
import NavMenu from '../NavMenu/NavMenu';


interface ToolBarProps {}

const ToolBar: FC<ToolBarProps> = () => (

    <header className="w-full bg-white border-b shadow-sm px-4 py-2">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Logo or title */}
        <Link href="/" className="text-xl font-semibold">
          Pokédex
        </Link>

        {/* Center: Search */}
        {/* <Search/> */}

        {/* Right: Actions */}
        {/* <div className="flex items-center gap-2">
          <Button variant="outline">Login</Button>
        </div> */}
        <div className="flex items-center">
        <NavMenu/>
        </div>

      </div>
    </header>
);

export default ToolBar;
