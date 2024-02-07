import '@/styles/globals.css';
import { Montserrat, Rubik } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const montserrat = Rubik({
  subsets: ['latin'],
  weight: 'variable',
  display: 'swap',
});
import { ThemeProvider } from '@/context/ContextProvider';
import { useEffect } from 'react';
import Head from 'next/head';
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log(
              'Service Worker registered with scope:',
              registration.scope
            );
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      });
    }
  }, []);
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/imgs/logo.png" />
        <meta name="theme-color" content="#0f0f11" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="I'm a Frontend Developer with 2 Years Experience of Self Learning and Projects Experience,"
        />
        <meta name="copyright" content="Taha Al-Mulla" />
        <meta
          name="keywords"
          content="Taha,tahamulla, Al-Mulla, Mulla, frontend, Front-end, React, Reactjs, Next, Next.js, Web, webdeveloper, freelancer, uiux, designer, bussiness, web3, PWA, performance, SEO, Optimization"
        />
        <meta name="author" content="Taha Al-Mulla" />
        <meta property="og:title" content="Taha Mulla Frontend Developer" />
        <meta
          property="og:description"
          content="Hello My Name is Taha aka Taha Al-Mulla i'm a Software Engineer specalize in Building web applicatoins"
        />
        <meta property="og:url" content="https://tahamulla.vercel.app/" />
        <meta name="robots" content="all" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <ThemeProvider>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  );
}
