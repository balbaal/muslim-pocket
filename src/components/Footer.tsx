import Link from "next/link";
import React from "react";
import Icon from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-white p-4 mt-8">
      <div className="container mx-auto px-4 text-center text-black text-sm">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <Link href="/" className="underline">
            Muslim-Pocket.com
          </Link>
          . All rights reserved.
        </p>
        <p className="flex items-center justify-center gap-1">
          Made by <Icon name="heart" className="text-red-500" size={14} />
          <Link href="#" className="underline">
            Hamba Allah
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
