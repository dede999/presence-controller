import NavLink from "next/link";
import { ButtonElement } from "./ui/button";

export type NavbarLinksProps = {
  orientation: 'horizontal' | 'vertical'
  isMenuOpen: boolean
};

export default function NavbarLinks({ orientation, isMenuOpen }: NavbarLinksProps) {
  const links = [
    { label: 'Sobre', href: '/' },
    { label: 'Contato', href: '/' },
  ];
  const horizontalLinks = (
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
  );

  const verticalLinksClassNames = links
    .map((_, index) => index === 2
      ? 'p-2 mx-4 mb-3 hover:mx-12 hover:text-teal-700 hover:font-semibold transition-all duration-300 ease-in-out'
      : 'p-2 mx-4 my-3 border-b border-gray-200 hover:mx-12 hover:text-teal-700 hover:font-semibold transition-all duration-300 ease-in-out'
    )

  const verticalLinks = isMenuOpen && (
    <>
      <ul className="absolute inset-x-0 bg-white rounded-md shadow-lg border-t-teal-700">
        {links.map((link, index) => (
          <li
            key={index}
            className={verticalLinksClassNames[index]}>
            <NavLink href={link.href}>{link.label}</NavLink>
          </li>
        ))}
        <div className="grid grid-cols-1 justify-items-center">
          <ButtonElement variant='outline' className='w-5/6 my-2 border-2 text-lg h-auto border-primary bg-primary text-white hover:text-primary transition-all duration-300 ease-in-out'>
            Cadastre-se
          </ButtonElement>
          <ButtonElement variant='outline' className='w-5/6 my-2 border-2 text-lg h-auto border-secondary bg-secondary text-white hover:text-secondary'>
            Entre
          </ButtonElement>
        </div>
      </ul>
    </>        
  )

  return orientation === 'horizontal' ? horizontalLinks : verticalLinks;
}