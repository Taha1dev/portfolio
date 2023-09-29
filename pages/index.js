import { Animation } from '@/components/Hero/Animation';
import HeroSection from '@/components/Hero/HeroSection';
import Skills from '@/components/Skills/Skills';
import Testimonials from '@/components/Testimonials/Testimonials';
import About from '@/components/about/About';
import ContactMe from '@/components/contact/ContactMe';
import Footer from '@/components/footer/Footer';
import Offer from '@/components/offer/Offer';
import Services from '@/components/services/Services';
export default function Home() {
  return (
    <>
      <div className='z-20'>
        <Animation />
      </div>
      <div id="home" className="">
        <HeroSection />
      </div>
      <div className="container mx-auto sm:col-span-12 flex flex-col items-center justify-center align-middle">
        <div className="z-50">
          <div className='mt-16'>
            <About />
          </div>
          <div className='mt-16'>
            <Services />
          </div>
          <div className='mt-16' >
            <Skills />
          </div>
          <div className='mt-16' >
            <Testimonials />
          </div>
          <Offer />
          <div className='mt-16' >
            <ContactMe />
          </div>
          <div className='mt-16'>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
