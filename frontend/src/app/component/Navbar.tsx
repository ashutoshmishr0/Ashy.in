"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../component/ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

const NavBar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div  className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href={'/'}>
            <MenuItem setActive={setActive} active={active}
            item="Home">
                </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active}
            item="About">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/about">All Projects</HoveredLink>
                    
                </div>
                </MenuItem>

                  <Link href={'/contectus'}>
            <MenuItem setActive={setActive} active={active}
            item="Contect">
                </MenuItem>
                </Link>

      </Menu>
    </div>
  )
}

export default NavBar
