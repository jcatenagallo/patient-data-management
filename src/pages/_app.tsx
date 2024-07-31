import type { AppProps } from 'next/app';

import Head from 'next/head';

import '@/styles/globals.css';
import GlobalStyles from '@/styles/globalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalStyles>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </GlobalStyles>
  );
}
