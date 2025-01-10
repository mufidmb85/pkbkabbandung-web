"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import Logo from "@/components/icons/Logo";
import { routes } from "@/config/routes";
import { Button } from "@nextui-org/button";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const Toolbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar className={"px-6 md:px-12"} maxWidth={"full"} isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify={"start"}>
        <NavbarBrand>
          <Link className={"gap-1"} href={"/"} color={"primary"}>
            <Logo />
            <p className={"font-bold"}>{siteConfig.name}</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <ul className={"hidden lg:flex flex-row gap-1"}>
          {routes.map((route, i) => (
            <NavbarItem key={route.path}>
              <Button className={pathname === route.path ? "font-bold" : "font-normal"} key={i} onPress={() => router.push(route.path)} color={pathname === route.path ? "primary" : "default"} href={route.path} startContent={(<span className={"material-symbols-rounded"}>{route.icon}</span>)} variant={pathname === route.path ? "flat" : "light"} radius={"full"}>{route.label}</Button>
            </NavbarItem>
          ))}
        </ul>

        <div className={"block lg:hidden"}>
          <NavbarMenuToggle icon={(<span className={"material-symbols-rounded"}>{isMenuOpen ? "close" : "menu" }</span>)} />
        </div>
      </NavbarContent>

      <NavbarMenu>
        {routes.map((route, i) => (
          <NavbarMenuItem key={route.path} className={"w-full px-2"}>
            <Button className={"w-full justify-start items-center py-1"} key={i} color={pathname === route.path ? "primary" : "default"} startContent={(<span className={"material-symbols-rounded"}>{route.icon}</span>)} variant={pathname === route.path ? "flat" : "light"} radius={"full"} onPress={() => {setIsMenuOpen(false), router.push(route.path)}}>{route.label}</Button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

    </Navbar>
  )
};

export default Toolbar;