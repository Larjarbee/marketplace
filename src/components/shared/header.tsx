"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="container py-2 flex justify-between items-center">
        <h2 className="text-2xl">
          Marketplace<sup>NG</sup>
        </h2>
        <div className="flex items-center">
          {[
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
            { name: "About", path: "/about" },
            { name: "Sign Up", path: "/sign-up" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={cn(
                "p-4 hover:underline",
                pathname === link.path && "underline"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex items-center bg-gray-100 rounded-md">
            <input
              className="flex h-8 w-full rounded-md border-none bg-inherit px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="What are you looking for?"
            />
            <Button size="icon" variant="ghost">
              <Icon icon="mynaui:search" className="text-xl" />
            </Button>
          </div>
          <TooltipProvider>
            <div className="flex gap-2 items-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <Icon icon="solar:heart-outline" className="text-xl" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Saved Items</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="relative">
                    <Button size="icon" variant="ghost">
                      <Icon icon="solar:cart-3-linear" className="text-xl" />
                    </Button>
                    <div className="w-4 h-4 text-white top-0 flex text-xs items-center justify-center bg-primary rounded-full absolute">
                      <p>2</p>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Carts</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon">
                    <Icon icon="solar:user-outline" className="text-xl" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Profile</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
      </nav>
      <hr />
      <NavigationMenu className="mx-auto">
        <NavigationMenuList>
          {MENUS.map((menu, index) => (
            <NavigationMenuItem key={index}>
              {menu.children ? (
                <>
                  <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {menu.children.map((link, index) => (
                        <ListItem
                          key={index}
                          title={link.name}
                          href={link.path}
                        >
                          {link.ads.toLocaleString()} ads
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link href={menu.path} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {menu.name}
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export default Header;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const MENUS = [
  {
    name: "Woman’s Fashion",
    children: [
      { name: "Shoes", path: "/", ads: 12400 },
      { name: "Clothing", path: "/", ads: 12400 },
    ],
  },
  {
    name: "Men’s Fashion",
    children: [
      { name: "Shoes", path: "/", ads: 57000 },
      { name: "Clothing", path: "/", ads: 12400 },
    ],
  },
  { name: "Electronics", path: "/" },
  { name: "Home & Lifestyle", path: "/" },
  { name: "Medicine", path: "/" },
  { name: "Sports & Outdoor", path: "/" },
  { name: "Baby’s & Toys", path: "/" },
  { name: "Groceries & Pets", path: "/" },
  { name: "Health & Beauty", path: "/" },
];
