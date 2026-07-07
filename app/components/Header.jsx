"use client";
import { useState } from "react";
import ContactDialog from "./ContactDialog";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black-950/30 backdrop-blur-md border-b border-zinc-800/10 drop-shadow-sm">
        <div className="mx-auto flex h-20  items-center justify-between px-10 lg:px-10">
            <div>
                <h1 className="text-lg font-bold">Portfolio</h1>
                <h2 className="text-sm font-light">Mechanical Design & Construction</h2>
            </div>

            <ul className="hidden items-center gap-8 md:flex">
                <li>
                    <a href="#" className="font-light relative inline-block after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
                        Home
                    </a>
                </li>

                <li>
                    <a href="#about" className="font-light relative inline-block after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
                        About
                    </a>
                </li>

                <li>
                    <a href="#projects" className="font-light relative inline-block after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
                        Projects
                    </a>
                </li>

                <li>
                    <a href="#" className="font-light relative inline-block after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsContactOpen(true);
                        }}>
                        Contact
                    </a>
                    <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen}></ContactDialog>
                </li>
            </ul>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden relative flex h-12 w-12 items-center justify-center">
                 <span
                    className={`absolute h-[2px] w-5 rounded-full bg-white transition-all duration-300 ease-in-out
                    ${
                    isContactOpen
                        ? "rotate-45"
                        : "-translate-y-2"
                    }`}
                />

                <span
                    className={`absolute h-[2px] w-5 rounded-full bg-white transition-all duration-200
                    ${
                    isContactOpen
                        ? "opacity-0 scale-0"
                        : "opacity-100 scale-100"
                    }`}
                />

                <span
                    className={`absolute h-[2px] w-5 rounded-full bg-white transition-all duration-300 ease-in-out
                    ${
                    isContactOpen
                        ? "-rotate-45"
                        : "translate-y-2"
                    }`}
                />
            </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="flex justify-end border-t border-zinc-800 md:hidden">
                <ul className="text-right flex flex-col p-6 gap-4">
                <li>
                    <a href="#" onClick={() => setIsMenuOpen(!isMenuOpen)} className="font-light relative inline-block after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
                        Home
                    </a>
                </li>

                <li>
                    <a href="#about" onClick={() => setIsMenuOpen(!isMenuOpen)} className="font-light relative inline-block after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
                        About
                    </a>
                </li>

                <li>
                    <a href="#projects" onClick={() => setIsMenuOpen(!isMenuOpen)} className="font-light relative inline-block after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
                        Projects
                    </a>
                </li>

                <li>
                    <a href="#" className="font-light relative inline-block after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
                        onClick={(e) => {
                        e.preventDefault();
                        setIsMenuOpen(false);
                        setIsContactOpen(true);
                    }}>
                        Contact
                    </a>
                    <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen}></ContactDialog>
                </li>
                </ul>
            </div>
        )}
    </nav>
  );
}

