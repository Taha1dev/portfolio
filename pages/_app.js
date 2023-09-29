import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';

import { Lato } from 'next/font/google';
const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
});
import { Roboto } from 'next/font/google';
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
});
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      {/* <BackgroundAnimation> */}
      <Component {...pageProps} />
      {/* </BackgroundAnimation> */}
    </>
  );
}
