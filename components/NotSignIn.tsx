import Head from 'next/head';
import React from 'react';

export default function NotSignIn() {
  return (
    <section className='relative'>
      <Head>
        <title>Log in | MovieApp</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex justify-center items-center'>
        <div className='absolute flex flex-col space-y-5 top-20 w-full justify-center items-center max-w-screen-sm mx-auto p-8 -mt-16'>
          <h1 className='uppercase text-xl text-center'>
            Please login to access this website
          </h1>
          <p className='text-s text-center '>
            Get access to your all time favorites movies and shows. Also get all
            the, top rated, and trending movies/shows.
          </p>
        </div>
      </div>
    </section>
  );
}
