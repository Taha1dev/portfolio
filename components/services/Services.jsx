import ServicesCard from './ServiceCard';
import HyperOne from '../customH1/HyperOne';

const cards = [
  {
    src: '/svg/skills/react.svg',
    alt: 'Web Development',
    title: 'Web Development',
    description: 'Building High-quality web application using modern solutions',
  },
  {
    src: '/svg/ui_ux.svg',
    alt: 'UI/UX Design',
    title: 'UI/UX Design',
    description:
      ' Specialize in creating intuitive and visually appealing user interfaces.',
  },
  {
    src: '/svg/newseo.svg',
    alt: 'SEO Optimization',
    title: 'SEO Optimization',
    description:
      " SEO optimization services improve your website's visibility in search engine  building",
  },
  {
    src: '/svg/webpack.svg',
    alt: 'Performance Optimization',
    title: 'Performance Optimize',
    description:
      'Optimize websites and applications to deliver fast and efficient performance.',
  },
];

const Services = () => {
  const breif = `As a freelance front-end developer, I specialize in crafting intuitive
  and responsive user interfaces using modern web standards and
  frameworks. With a focus on clean code, accessibility, and
  performance, I create pixel-perfect websites and apps that deliver
  engaging experiences on any device.`;
  return (
    <div id="services">
      <HyperOne value={'Services'} />
      <div className="my-5">
        <p className="lg:text-2xl lg:text-center text-xl p-4 text-justify">
          {breif}
        </p>
      </div>
      <div className="my-12 grid lg:grid-cols-4 sm:grid-cols-1 m-5 md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <ServicesCard
            key={index}
            src={card.src}
            alt={card.alt}
            title={card.title}
            description={card.description}
            className={`logo${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
