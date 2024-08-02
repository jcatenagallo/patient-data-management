import type { AppProps } from 'next/app';

import Head from 'next/head';
import '@/styles/globals.css';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import GlobalStyles from '@/styles/globalStyles';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 60 * 24, // 24 hours
            staleTime: 2000 * 60 * 60 * 1,
            retry: 0,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <Component {...pageProps} />
      </GlobalStyles>
    </QueryClientProvider>
  );
}
