import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import Anchor from '../link/Anchor';

export default function Footer() {
  const links = [
    {
      id: 1,
      ariaLabel: 'linkedin',
      href: 'https://www.linkedin.com/in/taha-al-mulla-17a76923a/',
      icon: <AiFillLinkedin size={40} />,
    },
    {
      id: 2,
      ariaLabel: 'github',
      href: 'https://github.com/Taha1dev',
      icon: <AiFillGithub size={40} />,
    },
    {
      id: 3,
      ariaLabel: 'whatsapp',
      href: 'https://wa.link/yns3z1',
      icon: <AiOutlineWhatsApp size={40} />,
    },
    {
      id: 4,
      ariaLabel: 'facebook',
      href: 'https://www.facebook.com/profile.php?id=100010269363969&mibextid=ZbWKwL',
      icon: <AiFillFacebook size={40} />,
    },
    {
      id: 5,
      ariaLabel: 'twitter',
      href: 'https://twitter.com/TahaAlMull67632',
      icon: <AiOutlineTwitter size={40} />,
    },
  ];
  return (
    <footer className="py-4 z-40">
      <div className="container mx-auto flex justify-center">
        {links.map((link) => (
          <Anchor
            key={link.id}
            className="mx-4"
            ariaLabel={link.ariaLabel}
            href={link.href}
          >
            {link.icon}
          </Anchor>
        ))}
      </div>
      <p className="text-center mt-4 text-lg font-bold">
        © {new Date().getFullYear()} Taha Al-Mulla. All rights reserved.
      </p>
    </footer>
  );
}
