import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import { useSession, getProviders, getSession } from 'next-auth/react';
import Login from '../components/Login';
import Slider from '../components/Slider';
import MoviesCollection from '../components/MoviesCollection';
import ShowsCollection from '../components/ShowsCollection';

const Home: NextPage = ({
  popularMovies,
  popularShows,
  top_ratedMovies,
  top_ratedShows,
  providers,
}: any) => {
  const { data: session } = useSession();

  return (
    <div className=''>
      <Head>
        <title>Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      {/* {!session ? (
        <Login providers={providers} />
      ) : ( */}
        <div>
          <Slider />
          <MoviesCollection results={popularMovies} title='Popular Movies' />
          <ShowsCollection results={popularShows} title='Popular Shows' />

          <MoviesCollection
            results={top_ratedMovies}
            title='Top Rated Movies'
          />
          <ShowsCollection results={top_ratedShows} title='Top Rated Shows' />
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  const [
    popularMoviesRes,
    popularShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
  ]);
  const [popularMovies, popularShows, top_ratedMovies, top_ratedShows] =
    await Promise.all([
      popularMoviesRes.json(),
      popularShowsRes.json(),
      top_ratedMoviesRes.json(),
      top_ratedShowsRes.json(),
    ]);
  const providers = await getProviders();

  return {
    props: {
      session,
      providers,
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      top_ratedMovies: top_ratedMovies.results,
      top_ratedShows: top_ratedShows.results,
    },
  };
}
export default Home;
