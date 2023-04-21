import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import Head from 'next/head';

import { SessionProvider } from 'next-auth/react';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Head>
        <meta
          name="description"
          content="Your Favorite Movies and Shows."
        />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
