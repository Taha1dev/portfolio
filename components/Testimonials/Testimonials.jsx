import HyperOne from '../customH1/HyperOne';
import TestimonialCard from './TestimonialsCard';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      imageSrc: '/imgs/avatar.jpeg',
      name: 'Maysaa Al-Ahmar',
      title: 'CEO Founder Voila',
      url: 'https://www.linkedin.com/in/maysa-alahmar/',
      rating: 4,

      testimonial:
      `
      I would highly recommend Taha as a Junior Front End Developer  for his exceptional work ethic, dedication, and continuous efforts to improve. His commitment to learning and growing as a front-end developer is truly inspiring.
      keep the great work Taha.
      `
    },
    {
      id: 2,
      imageSrc: '/imgs/avatar-1.jpg',
      name: 'Waseem Madi',
      title: 'Senior Technical Instructor',
      url: 'https://www.linkedin.com/in/waseem-almadi-3140a711b/',
      rating: 4,
      testimonial:
        'Taha is a distinguished programmer with a great passion for programming languages and an ambition to reach advanced levels in life. I have great confidence that one day I will see you in a distinguished place that befits your ambition and meets your passion.',
    },
    {
      id: 3,
      imageSrc: '/imgs/avatar-2.jpeg',
      name: 'Lama youzghatli',
      title: 'Full Stack Developer',
      url: '',
      rating: 4,
      testimonial:
        'I believe that the skills and qualities you have demonstrated during your time with us will undoubtedly pave the way for a successful career in frontend development. Your dedication, adaptability, and eagerness to learn make you an asset to any team. ',
    },
  ];
  return (
    <div id="testimonial" className=" py-16">
      <HyperOne value="Testimonial" />
      <div className="my-12 grid lg:grid-cols-3 sm:grid-cols-1 m-5 md:grid-cols-2 gap-8">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
