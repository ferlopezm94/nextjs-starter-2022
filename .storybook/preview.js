import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import * as NextImage from 'next/image';

// Indicate the Font Awesome core SVG library to not try and insert <style> elements into the <head> of the page
config.autoAddCss = false;

library.add(fab, faRocket);

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#FFFFFF',
      },
      {
        name: 'dark',
        value: '#333333',
      },
    ],
  },
};
