"use client";
import { useState } from "react";
import { Feather } from 'lucide-react'
import NavLink from "next/link";
import { ButtonElement } from "./ui/button";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  const links = [
    { label: 'Sobre', href: '/' },
    { label: 'Contato', href: '/' },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between h-20 px-4">
      <div className="font-semibold cursor-pointer flex items-center text-gray-700">
        <span className='mr-1 pt-2 text-teal-700'>
          <Feather />
        </span>
        <NavLink href='/'>
          <span className='pt-2 text-xl px-3'>Controle Presença</span>
        </NavLink>
      </div>

      <NavbarLinks orientation="horizontal" isMenuOpen={isMobileMenuOpen} />

      <div className="md:hidden">
        <button
          className="block p-2 rounded-md text-gray-700 hover:bg-gray-200"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <NavbarLinks orientation="vertical" isMenuOpen={isMobileMenuOpen} />
      </div>
    </nav>
  );
};
