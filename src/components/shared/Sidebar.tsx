"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="space-y-5 py-5">
      <h1 className="mb-2 px-4 text-lg">Trending-Spot</h1>

      <div className="space-y-3">
        {LINKS.map((link, index) => (
          <Link key={index} href={link.path}>
            <Button
              variant={`${pathname === link.path ? "secondary" : "ghost"}`}
              className="w-full py-8 text-md gap-2 justify-start"
            >
              {link.icon}
              {link.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}

const LINKS = [
  { name: "Dashboard", path: "/admin/dashboard", icon: "" },
  { name: "Blogs", path: "admin/product", icon: "" },
];
