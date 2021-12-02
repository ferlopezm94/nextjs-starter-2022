import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import type { AppProps } from 'next/app';

import GlobalStyles from './../components/GlobalStyles';

// Indicate the Font Awesome core SVG library to not try and insert <style> elements into the <head> of the page
config.autoAddCss = false;

library.add(fab, faRocket);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
