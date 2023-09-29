import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import styles from './social.module.css';
import Link from 'next/link';
const SocialLinks = () => {
  return (
    <div
      className={`absolute bottm-1 right-0 lg:flex flex flex-col justify-between  ${styles.mobile}`}
    >
      <div className={` ${styles.wrapper}`}>
        <div>
          <Link target='_blank' href="https://www.linkedin.com/in/taha-al-mulla-17a76923a/">
            <AiFillLinkedin  size={40} />
          </Link>
        </div>
        <div>
          <Link target='_blank' href="https://github.com/Taha1dev">
            <AiFillGithub size={40} />
          </Link>
        </div>
        <div>
          <Link target='_blank' href="https://wa.link/yns3z1">
            <AiOutlineWhatsApp  size={40} />
          </Link>
        </div>
        <div>
          <Link target='_blank' href="https://www.facebook.com/profile.php?id=100010269363969&mibextid=ZbWKwL">
            <AiFillFacebook  size={40} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
