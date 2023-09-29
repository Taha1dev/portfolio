import Image from 'next/image';
import styles from './service.module.css';

const ServicesCard = ({ src, alt, title, description, className }) => {
  return (
    <div
      className={`${styles.parent}  flex justify-center items-center flex-col p-4 `}
    >
      <div className={`${styles.logo} ${styles[className]}`}>
        <Image width={70} height={70} alt={alt} src={src} loading="lazy" />
      </div>
      <h1 className="text-2xl font-bold p-2">{title}</h1>
      <p className=" text-center text-lg p-2">{description}</p>
    </div>
  );
};

export default ServicesCard;
