import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

const TestimonialCard = ({ imageSrc, name, title, url, testimonial }) => {
  return (
    <div className="box bg-white shadow-md rounded-lg p-8 relative ">
      <Image
        width={70}
        height={70}
        loading="lazy"
        decoding="async"
        src={imageSrc}
        alt={name}
        className="absolute -right-6 -top-12 w-24 h-24 rounded-full border-4 border-gray-100 hidden sm:block"
      />
      <Link href={url} className="text-primary text-xl font-bold mt-2">
        {name}
      </Link>
      <span className="title text-gray-900 block mt-4">{title}</span>
      <div className="rate flex text-yellow-400 mt-2">
        <FontAwesomeIcon
          width={30}
          height={30}
          icon={filledStar}
          size="xs"
          className="mr-1"
        />
        <FontAwesomeIcon
          width={30}
          height={30}
          icon={filledStar}
          size="xs"
          className="mr-1"
        />
        <FontAwesomeIcon
          width={30}
          height={30}
          icon={filledStar}
          size="xs"
          className="mr-1"
        />
        <FontAwesomeIcon
          width={30}
          height={30}
          icon={filledStar}
          size="xs"
          className="mr-1"
        />
        <FontAwesomeIcon
          width={30}
          height={30}
          icon={regularStar}
          size="xs"
          className="mr-1"
        />
      </div>
      <p className="text-gray-700 text-lg leading-relaxed text-justify mt-2">
        {testimonial}
      </p>
    </div>
  );
};

export default TestimonialCard;
