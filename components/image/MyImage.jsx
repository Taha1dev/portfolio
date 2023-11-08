import Image from 'next/image';

const MyImage = () => {
  return (
    <Image
      height={853}
      width={1280}
      alt="Taha Al-Mulla Image"
      src={'/imgs/Taha.jpg'}
      loading="lazy"
    />
  );
};
export default MyImage;
