import '../styles/globals.css'; // Import Tailwind CSS or any global CSS
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Optionally, you can add other effects here
    document.querySelector('html').classList.add('bg-gray-100');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
