import React from "react";
import {
  Cursor,
  useTypewriter,
} from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, the name is Rizky Putra",
      "Guy who loves coffee",
      "But loves my wife more",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircle />
      <img
        src='https://media.licdn.com/dms/image/D5603AQFahoCGJVPcTw/profile-displayphoto-shrink_400_400/0/1679397025923?e=1686182400&v=beta&t=79gYoL8xREV342zltonX98pJtdqksstJTwVVosm6zFQ'
        alt=''
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
      />
      <div className="z-20">
      <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
        Fullstack Developer
      </h2>
      <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#FDA0E4' />
      </h1>

      <div className="pt-5">
        <Link href='#about'>
        <button className="heroButton">About</button>
        </Link>
        <Link href='#experience'>
        <button className="heroButton">Experience</button>
        </Link>
        <Link href='skills'>
        <button className="heroButton">Skills</button>
        </Link>
        <Link href='projects'>
        <button className="heroButton">Projects</button>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default Hero;
