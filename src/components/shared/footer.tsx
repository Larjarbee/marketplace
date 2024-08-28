import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import scanPng from "@/assets/images/Qr Code.png";
import appstorePng from "@/assets/images/AppStore.png";
import playstorePng from "@/assets/images/GooglePlay.png";
import Image from "next/image";
import { Button } from "../ui/button";

function Footer() {
  return (
    <footer className="w-full p-10 mt-28 bg-black space-y-5 text-white">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
        <div className="space-y-4">
          <h2 className="text-2xl">
            Marketplace<sup>NG</sup>
          </h2>
          <p>Stay up to date about our latest offers</p>
          <div className="flex items-center w-full pr-2 bg-gray-100 rounded-md">
            <input
              className="flex h-10 w-full rounded-md border-none bg-inherit px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter your email"
            />
            <Icon
              icon="majesticons:send-line"
              className="text-lg text-gray-500"
            />
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg">Support</h2>
        </div>
        <div className="col-span-full flex md:col-span-2">
          {[
            {
              name: "Account",
              children: [
                { link: "My Account", path: "/" },
                { link: "Login / Register", path: "/" },
                { link: "Cart", path: "/" },
                { link: "Wishlist", path: "/" },
              ],
            },
            {
              name: "Quick Link",
              children: [
                { link: "Privacy Policy", path: "/" },
                { link: "Terms of Use", path: "/" },
                { link: "FAQ", path: "/" },
                { link: "Contact", path: "/" },
              ],
            },
          ].map((link, index) => (
            <div key={index} className="basis-1/2 space-y-4">
              <h2 className="text-lg">{link.name}</h2>
              <div className="flex flex-col space-y-4">
                {link.children.map((link, i) => (
                  <Link key={i} href={link.path} className="hover:underline">
                    {link.link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <h2 className="text-lg">Download App</h2>
          <p className="text-xs font-light">Save $3 with App New User Only</p>
          <div className="flex gap-1">
            <Image src={scanPng} alt="Qr Code" />
            <div>
              <Image src={appstorePng} alt="App store" />
              <Image src={playstorePng} alt="Play store" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            {[
              "iconoir:facebook",
              "pajamas:twitter",
              "hugeicons:instagram",
              "uit:linkedin-alt",
            ].map((link, index) => (
              <a key={index} href="#">
                <Button variant="ghost" size="icon">
                  <Icon icon={link} className="text-lg" />
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-gray-700">
        Copyright Rimel {new Date().getFullYear()}. All right reserved
      </p>
    </footer>
  );
}

export default Footer;
