"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  const menuToggle = () => {
    document.querySelector("#toggle")?.classList.toggle("active");
    document.querySelector("#showcase")?.classList.toggle("active");
  };
  return (
    <section className="font-poppins">
      <header className="top-0 left-0 w-full fixed z-10 flex items-center justify-between px-8 pt-4">
        <div id="logo">
          <Link href="#hero" scroll={false}>
            <Image
              src={"logo-vguno.svg"}
              alt="vector"
              className="w-16 lg:w-28 h-16 lg:h-20 hover:scale-105 hover:cursor-pointer transition-all"
              width={128}
              height={32}
            />
          </Link>
        </div>

        <div
          id="toggle"
          className="shadow-2xl shadow-secondary/50 hover:shadow-lg hover:shadow-secondary/30 transition-all z-50"
          onClick={menuToggle}
        />
      </header>

      <div className="menu px-6 pt-12 ">
        <ul className="btn mt-6 space-y-8 font-medium tracking-wider text-lg lg:text-2xl">
          <li id="underline">
            <Link href="#hero" scroll={false} onClick={menuToggle}>
              Home
            </Link>
          </li>
          <li id="underline">
            <Link href="#portfolio" scroll={false} onClick={menuToggle}>
              My Clients
            </Link>
          </li>
          <li id="underline">
            <Link href="#services" scroll={false} onClick={menuToggle}>
              Services
            </Link>
          </li>
          <li id="underline">
            <Link href="#about" scroll={false} onClick={menuToggle}>
              About
            </Link>
          </li>
          <li id="underline">
            <Link href="#contact" scroll={false} onClick={menuToggle}>
              Contact
            </Link>
          </li>
        </ul>

        {/* <div className="w-4/6 text-center text-action">
            <ButtonGhost
                href="https://drive.google.com/file/d/1TpoWs_9WP8vOUGg_a1KbOYJGaVmebVd_/view?usp=sharing"
              text="Resume"
              target="__blank"
              />
          </div> */}

        <div className="flex flex-col gap-4 items-center text-center  text-primary">
          {/* <img src={msg} alt="vector" className="w-6" /> */}
          {/* <div className="space-y-4">
            <h2 className="font-extralight text-sm md:text-lg uppercase">
              Don`&apos;`t be a stranger!
            </h2>
            <span id="divide"></span>
          </div> */}
          <div className="flex gap-3 lg:gap-6">
            {/* <a href="https://twitter.com/VBhabhra" target="__blank">
              <FaXTwitter className="w-8 lg:w-10 hover:-translate-y-2 transition-all" />
            </a> */}
            {/* <a
              href="https://www.instagram.com/developedbyvarun/"
              target="__blank"
            >
              <FaInstagram className="w-8 lg:w-10 hover:-translate-y-2 transition-all" />
            </a> */}
            <a
              href="https://www.linkedin.com/in/tonynguyen2000/"
              target="__blank"
            >
              <FaLinkedin className="w-8 lg:w-10 hover:-translate-y-2 transition-all" />
            </a>
            <a href="https://github.com/quocvuong2000" target="__blank">
              <FaGithub className="w-8 lg:w-10 hover:-translate-y-2 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
