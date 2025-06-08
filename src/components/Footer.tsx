import Link from "next/link";
import React from "react";
import Icon from "./Icons";

const Footer = () => {
  return (
    <footer className="p-4">
      <div className="container mx-auto px-4 text-center text-black dark:text-white text-sm select-none">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <Link href="/" className="underline">
            Muslimpocket.id
          </Link>
          . All rights reserved.
        </p>
        <p className="flex items-center justify-center gap-1">
          Made by <Icon name="heart" className="text-red-500" size={14} />
          <Link
            href="https://github.com/balbaal/muslim-pocket"
            target="_blank"
            className="underline"
          >
            Hamba Allah
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
