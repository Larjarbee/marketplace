"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
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
} from "@/components/ui/navigation-menu";
import { useAppSelector } from "@/hooks/useStore";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Header() {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search");
  const [search, setSearch] = useState(searchValue || "");
  const pathname = usePathname();
  const router = useRouter();
  const cartItems = useAppSelector((state) => state.cart.items);

  const handleSubmit = () => {
    router.push(`?${new URLSearchParams({ search: search })}`);
  };

  return (
    <header>
      <nav className="w-11/12 mx-auto py-2 flex justify-between gap-2 items-center md:container">
        <Link href="/">
          <h2 className="text-2xl md:hidden">M</h2>
          <h2 className="text-2xl hidden md:block">
            Marketplace<sup>NG</sup>
          </h2>
        </Link>
        <div className="hidden items-center md:flex">
          {[
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "About", path: "/" },
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
          <NavigationMenu className="mx-auto">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-light">
                  Shop
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {MENUS.map((link, index) => (
                      <ListItem key={index} title={link.name} href={link.path}>
                        {link.ads.toLocaleString()} ads
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex items-center bg-gray-100 rounded-md">
            {searchValue ? (
              <input
                className="flex h-8 w-full rounded-md border-none bg-inherit px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="What are you looking for?"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            ) : (
              <Link href="/products">
                <input
                  className="flex h-8 w-full rounded-md border-none bg-inherit px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="What are you looking for?"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </Link>
            )}
            <Button onClick={handleSubmit} size="icon" variant="ghost">
              <Icon icon="mynaui:search" className="text-xl" />
            </Button>
          </div>
          <TooltipProvider>
            <div className="flex gap-0 items-center md:gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/wishlist">
                    <Button size="icon" variant="ghost">
                      <Icon icon="solar:heart-outline" className="text-xl" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Saved Items</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="relative">
                    <Link href="/cart">
                      <Button size="icon" variant="ghost">
                        <Icon icon="solar:cart-3-linear" className="text-xl" />
                      </Button>
                    </Link>
                    {!!cartItems.length && (
                      <div className="w-4 h-4 text-white top-0 flex text-xs items-center justify-center bg-primary rounded-full absolute">
                        <p>
                          {cartItems.reduce(
                            (cur, num) => cur + num.quantity,
                            0
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Carts</p>
                </TooltipContent>
              </Tooltip>
              <div className="hidden md:block">
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

              <Dialog>
                <DialogTrigger asChild>
                  <Button size="icon" variant="ghost" className="md:hidden">
                    <Icon icon="gg:menu-right" className="text-xl" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-full h-full bg-white border-0">
                  <DialogHeader>
                    <DialogTitle></DialogTitle>
                  </DialogHeader>
                  <div className="items-center gap-4 -mt-[40rem] flex flex-col justify-center">
                    {[
                      { name: "Home", path: "/" },
                      { name: "Products", path: "/products" },
                      { name: "About", path: "/" },
                    ].map((link) => (
                      <Link
                        key={link.name}
                        href={link.path}
                        className={cn(
                          "p-3 text-lg rounded-lg hover:bg-gray-500",
                          pathname === link.path ? "text-gray-500" : ""
                        )}
                      >
                        <DialogClose>{link.name}</DialogClose>
                      </Link>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </TooltipProvider>
        </div>
      </nav>
      <hr />
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
  { name: "Woman's Fashion", path: "/", ads: 12400 },
  { name: "Men's Fashion", path: "/", ads: 12400 },

  { name: "Electronics", path: "/", ads: 12400 },
  { name: "Home & Lifestyle", path: "/", ads: 12400 },
  { name: "Medicine", path: "/", ads: 12400 },
  { name: "Sports & Outdoor", path: "/", ads: 12400 },
  { name: "Baby’s & Toys", path: "/", ads: 12400 },
  { name: "Groceries & Pets", path: "/", ads: 12400 },
  { name: "Health & Beauty", path: "/", ads: 12400 },
];
