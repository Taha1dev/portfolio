import Image from 'next/image';
import SocialLinks from '../socialLinks/SocialLinks';
import NavBar from '../nav/NavBar';

const HeroSection = () => {
  return (
    <div className={`z-0`}>
      <div className={`w-full flex justify-center items-center  text-white`}>
        <header className={`select-none absolute inset-x-0 top-0  `}>
          <NavBar />
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
                      alt="Taha Al-Mulla Avatar"
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
