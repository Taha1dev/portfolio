import React from 'react';
import WhiteButton from '../button/WhiteButton';

const Offer = () => {
  const handleClick = () => {
    window.scrollTo({
      top: window.pageYOffset + 800,
      behavior: 'smooth',
    });
  };
  return (
    <div className="bg-primary flex flex-col justify-center items-center p-14 container mx-auto w-full">
      <h1 className="text-5xl font-bold my-5 text-center sm:text-6xl lg:text-7xl">
        Got a Project? Let&apos;s Build Together
      </h1>
      <div onClick={handleClick}>
        <WhiteButton text={`Let's Talk`} />
      </div>
    </div>
  );
};

export default Offer;
