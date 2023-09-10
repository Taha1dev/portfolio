import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import styles from './social.module.css';
import Link from 'next/link';
const SocialLinks = () => {
  return (
    <div
      className={`absolute bottm-1 right-0 lg:flex flex flex-col justify-between ${styles.mobile}`}
    >
      <div className={` ${styles.wrapper}`}>
        <div>
          <Link href={'/'}>
            <AiFillLinkedin size={45} />
          </Link>
        </div>
        <div>
          <Link href={'/'}>
            <AiFillGithub size={45} />
          </Link>
        </div>
        <div>
          <Link href={'/'}>
            <AiOutlineWhatsApp size={45} />
          </Link>
        </div>
        <div>
          <Link href={'/'}>
            <AiFillFacebook size={45} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
