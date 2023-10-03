import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Link as ScrollLink } from 'react-scroll';
import { ThemeToggler } from '@/theme/Themetoggler';

export default function NavBar() {
  const navigation = [
    { id: 1, name: 'Home', href: '/home' },
    { id: 2, name: 'About', href: '/about' },
    { id: 3, name: 'Services', href: '/services' },
    { id: 4, name: 'Skills', href: '/skills' },
    { id: 5, name: 'Portfolio', href: '/portfolio' },
    { id: 6, name: 'Testimonial', href: '/testimonial' },
    { id: 7, name: 'Contact', href: '/contact' },
    { id: 8, name: <ThemeToggler />, href: '/' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-mainBg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-primary font-bold text-3xl">
                Dr. Nextage
              </span>
            </div>
          </div>
          <div className="hidden md:hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.href.substring(1)}
                spy={true}
                href={item.href}
                smooth={true}
                prefetch={item.prefetch}
                duration={200}
                className="text-lg leading-6 cursor-pointer"
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              aria-label="Toggle menu"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={toggleMenu}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-50 z-0" />
          <div className="md:mt-24  flex justify-center items-start h-full md:h-screen">
            <div className="bg-mainBg text-white z-10 w-full flex flex-col p-6 rounded-3xl m-6 mt-20">
              {navigation.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.href.substring(1)}
                  spy={true}
                  smooth={true}
                  duration={200}
                  className="flex justify-between text-lg leading-6  mx-4 my-3 border-b-2 curs border-primary"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </div>
        </Dialog>
      )}
    </nav>
  );
}
