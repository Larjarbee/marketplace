"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="space-y-5 py-2">
      <h2 className="text-xl text-center md:hidden">M</h2>
      <h2 className="text-xl text-center hidden md:block">
        Marketplace<sup>NG</sup>
      </h2>

      <div className="space-y-3">
        {LINKS.map((link, index) => (
          <Link key={index} href={link.path}>
            <Button
              variant={`${pathname === link.path ? "secondary" : "ghost"}`}
              className="w-full py-8 text-md gap-2 justify-start"
            >
              <Icon icon={link.icon} className="text-2xl" />
              {link.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}

const LINKS = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: "hugeicons:dashboard-square-02",
  },
  { name: "Products", path: "/admin/product", icon: "gridicons:product" },
];
