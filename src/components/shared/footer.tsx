import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-black p-10 mt-10">
      <p className="text-center text-gray-700">
        Copyright Rimel {new Date().getFullYear()}. All right reserved
      </p>
    </footer>
  );
}

export default Footer;
