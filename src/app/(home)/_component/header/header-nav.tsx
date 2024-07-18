"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navItem = [
  {
    title: "Articles",
    items: [
      {
        title: "Demo Item",
        href: "/",
        description: "Demo description",
      },
    ],
  },
  {
    title: "Platforms",
    items: [
      {
        title: "Demo Item",
        href: "/docs/primitives/alert-dialog",
        description: "Demo description",
      },
    ],
  },
  {
    title: "Agencies",
    items: [
      {
        title: "Demo Item",
        href: "/docs/primitives/alert-dialog",
        description: "Demo description",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Demo Item",
        href: "/docs/primitives/hover-card",
        description: "description",
      },
    ],
  },
  {
    title: "About Us",
    items: [
      {
        title: "Demo Item",
        href: "/docs/primitives/progress",
        description: "description",
      },
    ],
  },
];

export function HomeNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink
              className={
                navigationMenuTriggerStyle() +
                " m-0 bg-transparent p-0 text-white hover:bg-transparent"
              }
            >
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <div className="flex flex-row gap-x-3"> 
        {navItem.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuTrigger
              className={
                "m-0 bg-transparent p-0 text-white hover:bg-transparent"
              }
            >
              {item.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {item.items.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}</div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

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
            className,
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
