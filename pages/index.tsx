import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import { useSession } from 'next-auth/react';
import { use } from 'react';
import { Session } from 'inspector';
import NotSignIn from '../components/NotSignIn';

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <div className=''>
      <Head>
        <title>Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      {!session ? <NotSignIn /> : <div>movies list</div>}
    </div>
  );
};

export default Home;
