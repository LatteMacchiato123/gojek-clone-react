import { AppProps } from 'next/app';
import localFont from 'next/font/local';
import '../styles/globals.css';

// Import the local font
const MaisonNeue = localFont({ src: '/fonts/MaisonNeue.ttf' });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={MaisonNeue.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
