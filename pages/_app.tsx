import '../styles/index.scss';

const isBrowserLoaded = typeof window !== 'undefined';
if (isBrowserLoaded) {
  require('!style-loader!css-loader!react-responsive-carousel/lib/styles/carousel.min.css');
}

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
