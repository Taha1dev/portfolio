import { Animation } from '@/components/Hero/Animation';
import HeroSection from '@/components/Hero/HeroSection';
import Skills from '@/components/Skills/Skills';
import Testimonials from '@/components/Testimonials/Testimonials';
import About from '@/components/about/About';
import ContactMe from '@/components/contact/ContactMe';
import Footer from '@/components/footer/Footer';
import Offer from '@/components/offer/Offer';
import Portfolio from '@/components/portfolio/Portfolio';
import Services from '@/components/services/Services';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Taha Al-Mulla</title>
      </Head>

      <Animation />

      <HeroSection />

      <div className="relative container mx-auto sm:col-span-12 flex flex-col items-center justify-center align-middle">
        <div className="mt-16">
          <About />
        </div>
        <div className="mt-16">
          <Services />
        </div>
        <div className="mt-16">
          <Skills />
        </div>
        <div className="mt-16">
          <Portfolio />
        </div>
        <div className="mt-16">
          <Testimonials />
        </div>
        <Offer />
        <div className="mt-16">
          <ContactMe />
        </div>
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </>
  );
}
