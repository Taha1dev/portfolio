import { Animation } from '@/components/Hero/Animation';
import HeroSection from '@/components/Hero/HeroSection';
import Skills from '@/components/Skills/Skills';
import Testimonials from '@/components/Testimonials/Testimonials';
import About from '@/components/about/About';
import ContactMe from '@/components/contact/ContactMe';
import Footer from '@/components/footer/Footer';
import Offer from '@/components/offer/Offer';
import Services from '@/components/services/Services';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Taha Al-Mulla</title>
        <meta name="theme-color"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="I'm a Frontend Developer with 2 Years Experience of Self Learning and Projects Experience,"
        />
        <meta name="copyright" content="Taha Al-Mulla" />
        <meta
          name="keywords"
          content="Taha, Al-Mulla, Mulla, frontend, Front-end, React, Reactjs, Next, Next.js, Web, webdeveloper, freelancer, uiux, designer, bussiness, web3, PWA, performance, SEO, Optimization"
        />
        <meta name="author" content="Taha Al-Mulla" />
        <meta property="og:title" content="Your Page Title" />
        <meta
          property="og:description"
          content="This is a description of your web page"
        />
        <meta property="og:url" content="URL of your web page" />
      </Head>
      <div className="z-20">
        <Animation />
      </div>
      <div id="home" className="">
        <HeroSection />
      </div>
      <div className="relative container mx-auto sm:col-span-12 flex flex-col items-center justify-center align-middle">
        <div className="z-40">
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
      </div>
    </>
  );
}
