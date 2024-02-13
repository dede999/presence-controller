"use client"
import React from 'react'
import { Feather } from 'lucide-react'
import { ButtonElement } from './ui/button';

export default function Navbar () {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Como usar', href: '/' },
    { label: 'Gerenciar turmas', href: '/' },
    { label: 'Sobre', href: '/' },
    { label: 'Contato', href: '/' },
  ];

  return (
    <div className="navbar bg-teal-300 shadow-lg w-full top-2 left-2">
      <div className="md:flex md:px-10 items-center justify-between px-5 bg-white p-4">
        <div className="font-semibold cursor-pointer flex items-center text-gray-700">
          <span className='mr-1 pt-2 text-teal-700'>
            <Feather />
          </span>
          <span className='pt-2 text-xl px-3'>Controle Presença</span>
        </div>
        <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'>
          {links.map((link, index) => (
            <li key={index} className='md:ml-8 text-xl md:my-0 my-7'>
              <a
                href={link.href}
                className="block text-xl px-4 py-2 text-teal-700 hover:bg-teal-700 hover:text-white duration-300 rounded-lg font-semibold"
              >
                {link.label}
              </a>
            </li>
          ))}
          <ButtonElement variant='outline' className='border-2 text-lg h-auto border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white md:ml-8 md:my-0 my-7'>
            Get Started
          </ButtonElement>
        </ul>
      </div>
    </div>
  )
}