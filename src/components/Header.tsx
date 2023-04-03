import React from "react";
import { SocialIcon } from "react-social-icons";
SocialIcon;

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <div className="flex flex-row items-center">
        {/* social icons*/}
        <SocialIcon
          url='https://instagram.com/rzkiypratama'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://twitter.com/rzkiypratama'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://linkedin.com/rzkiypratama'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://github.com/rzkiyprtm'
          fgColor='gray'
          bgColor='transparent'
        />
      </div>

      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        {/* email icon */}
        <SocialIcon
        className="cursor-pointer"
        network="email"
        fgColor="gray"
        bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
      </div>
    </header>
  );
}

export default Header;
