import Link from 'next/link';
import React from 'react';
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="py-4 z-50">
      <div className="container mx-auto flex justify-center">
        <Link
          target="_blank"
          className="mx-4 "
          href="https://www.linkedin.com/in/taha-al-mulla-17a76923a/"
        >
          <AiFillLinkedin size={40} />
        </Link>
        <Link
          target="_blank"
          className="mx-4 "
          href="https://github.com/Taha1dev"
        >
          <AiFillGithub size={40} />{' '}
        </Link>
        <Link target="_blank" className="mx-4 " href="https://wa.link/yns3z1">
          <AiOutlineWhatsApp size={40} />{' '}
        </Link>
        <Link
          target="_blank"
          className="mx-4 "
          href="https://www.facebook.com/profile.php?id=100010269363969&mibextid=ZbWKwL"
        >
          <AiFillFacebook size={40} />{' '}
        </Link>
      </div>
      <p className="text-center mt-4 text-white text-lg font-bold">
        © {new Date().getFullYear()} Taha Al-Mulla. All rights reserved.
      </p>
    </footer>
  );
}
