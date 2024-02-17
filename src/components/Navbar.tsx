"use client";
import { useState } from "react";
import { Feather } from 'lucide-react'
import NavLink from "next/link";
import { ButtonElement } from "./ui/button";

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

      <ul className="hidden md:flex gap-x-10">
        {links.map((link, index) => (
          <li key={index} className="py-3">
            <NavLink href={link.href}>{link.label}</NavLink>
          </li>
        ))}
        <ButtonElement variant='outline' className='border-2 text-lg h-auto border-primary bg-primary text-white hover:text-primary transition-all duration-300 ease-in-out'>
          Cadastre-se
        </ButtonElement>
        <ButtonElement variant='outline' className='border-2 text-lg h-auto border-secondary bg-secondary text-white hover:text-secondary'>
          Entre
        </ButtonElement>
      </ul>

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

        {isMobileMenuOpen && (
          <>
            <ul className="absolute inset-x-0 bg-white rounded-md shadow-lg border-t-teal-700">
              <li className="p-2 mx-4 my-3 border-b border-gray-200 hover:mx-12 hover:text-teal-700 hover:font-semibold transition-all duration-300 ease-in-out">
                <NavLink href="/">Home</NavLink>
              </li>
              <li className="p-2 mx-4 mb-3 border-b border-gray-200 hover:mx-12 hover:text-teal-700 hover:font-semibold transition-all duration-300 ease-in-out">
                <NavLink href="/about">About</NavLink>
              </li>
              <li className="p-2 mx-4 mb-3 hover:mx-12 hover:text-teal-700 hover:font-semibold transition-all duration-300 ease-in-out">
                <NavLink href="/contact">Contact</NavLink>
              </li>
              <ButtonElement variant='outline' className='mb-3 mx-4 border-2 text-lg h-auto border-teal-700 bg-teal-700 text-white hover:text-teal-700 transition-all duration-300 ease-in-out'>
                Get Started
              </ButtonElement>
            </ul>
          </>        
        )}
      </div>
    </nav>
  );
};
