import Image from 'next/image';

export default function HeroImage() {
  return (
    <Image
      alt="Taha Al-Mulla Avatar"
      src="/imgs/me.jpg"
      width={288}
      height={288}
      layout="fixed"
      objectFit="cover"
      priority
      className="object-cover w-full h-full rounded-full ring-gray-300 dark:ring-gray-500"
      style={{ color: 'transparent' }}
    />
  );
}
