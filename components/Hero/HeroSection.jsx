import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import SocialLinks from '../socialLinks/SocialLinks';
import { Link as ScrollLink } from 'react-scroll';

const navigation = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Services', href: '#services' },
  { id: 4, name: 'Skills', href: '#skills' },
  { id: 5, name: 'Testimonial', href: '#testimonial' },
  { id: 6, name: 'Contact', href: '#contact' },
];
const navStyle = {
  position: 'fixed',
  top: '0',
  width: '100%',
  zIndex: 1000,
  backgroundColor: 'var(--mainColor)',
};
const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`z-0`}>
      <div className={`w-full flex justify-center items-center  text-white`}>
        <header className={`select-none absolute inset-x-0 top-0  `}>
          <nav style={navStyle}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-white font-bold text-3xl">
                      Taha Al-Mulla
                    </span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                      <ScrollLink
                        key={item.id}
                        to={item.href.substring(1)} // Assuming href is in the format "#componentID"
                        spy={true}
                        smooth={true}
                        duration={200}
                        className="text-lg leading-6 cursor-pointer"
                      >
                        {item.name}
                      </ScrollLink>
                    ))}
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  <button
                    onClick={toggleMenu}
                    type="button"
                    className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">Open main menu</span>
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
                <div className="mt-24 flex justify-center items-start h-screen">
                  <div className="bg-mainBg text-white z-10 w-full flex flex-col p-6 rounded-3xl m-6">
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
        </header>
        <div>
          <SocialLinks />
        </div>
        <div className="px-6 lg:px-8">
          <div className="flex justify-center items-center max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="select-none flex flex-col justify-center items-center align-middle">
              <h1
                className={`text-4xl text-center font-bold mb-2 sm:text-6xl `}
              >
                Hi There, I&apos;m Frontend Developer ⚡💻
              </h1>
              <div>
                <div className="relative w-72 h-72">
                  <div className="absolute inset-0">
                    <Image
                      className="object-cover w-full h-full rounded-full ring-gray-300 dark:ring-gray-500"
                      src="/imgs/me.jpg"
                      width={1080}
                      height={1080}
                      alt="Taha Al-Mulla Image"
                      priority
                    />
                  </div>
                </div>
              </div>
              <p className="mt-6 text-lg leading-8  ">
                Level up your online presence with a skilled frontend developer
                who creates eye-catching designs and user-friendly experiences.
                Let&apos;s craft a captivating digital journey that stands out
                and boosts your business.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
