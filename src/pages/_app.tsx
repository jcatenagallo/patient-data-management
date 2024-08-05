import type { AppProps } from 'next/app';

import dynamic from 'next/dynamic';
import Head from 'next/head';
import '@/styles/globals.css';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NiceModal from '@ebay/nice-modal-react';

import GlobalStyles from '@/styles/globalStyles';

const Toaster = dynamic(() => import('react-hot-toast').then((c) => c.Toaster), {
  ssr: false,
});

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
          <meta
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            name="viewport"
          />
          <title>Patient Data Management</title>
        </Head>
        <NiceModal.Provider>
          <Toaster position="top-center" />
          <Component {...pageProps} />
        </NiceModal.Provider>
      </GlobalStyles>
    </QueryClientProvider>
  );
}
