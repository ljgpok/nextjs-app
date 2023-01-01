import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import { useSession, getProviders } from 'next-auth/react';
import NotSignIn from '../components/NotSignIn';
import Login from '../components/Login';

const Home: NextPage = ({ providers }: any) => {
  const { data: session } = useSession();

  return (
    <div className=''>
      <Head>
        <title>Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      {!session ? <Login providers={providers} /> : <div>movies list</div>}
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default Home;
