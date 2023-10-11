import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
  AiOutlineTwitter,
} from 'react-icons/ai';
import styles from './social.module.css';
import Anchor from '../link/Anchor';
const SocialLinks = () => {
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
    <div
      className={` absolute bottm-1 right-0 lg:flex flex flex-col justify-between  ${styles.mobile}`}
    >
      <div className={`social ${styles.wrapper}`}>
        {links.map((link) => (
          <div key={link.id}>
            <Anchor ariaLabel={link.ariaLabel} href={link.href}>
              {link.icon}
            </Anchor>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
