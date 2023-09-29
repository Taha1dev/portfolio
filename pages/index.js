import { Animation } from '@/components/Hero/Animation';
import HeroSection from '@/components/Hero/HeroSection';
import Skills from '@/components/Skills/Skills';
import Testimonials from '@/components/Testimonials/Testimonials';
import About from '@/components/about/About';
import ContactMe from '@/components/contact/ContactMe';
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
          <div  >
            <About />
          </div>
          <div  >
            <Services />
          </div>
          <div >
            <Skills />
          </div>
          <div >
            <Testimonials />
          </div>
          <Offer />
          <div >
            <ContactMe />
          </div>
        </div>
      </div>
    </>
  );
}
