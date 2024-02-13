"use client"
import React from 'react'
import { Feather } from 'lucide-react'

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
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-700">
          <span className='text-3xl mr-1 pt-2 text-teal-700'>
            <Feather />
          </span>
          <span className='pt-2 px-3'>Controle Presença</span>
        </div>
        <ul className='md:flex md:items-center md:pb-0 pb-12'>
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
        </ul>
      </div>
    </div>
  )
}