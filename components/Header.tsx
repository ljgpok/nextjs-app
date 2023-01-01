import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  console.log('session is', session);
  return (
    <div className='sticky bg-[#b1b8d3] top-0 z-[1000] flex items-center px-10 md:px-12 h-[72px]'>
      <Image
        src='/vercel.svg'
        alt=''
        width={80}
        height={80}
        className='cursor-pointer'
        onClick={() => router.push('/')}
      />
      {session && (
        <div className='hidden ml-10 md:flex items-center space-x-6'>
          <a
            className='header-link group cursor-pointer'
            onClick={() => router.push('/')}
          >
            <span className='span'>Home</span>
          </a>
          <a
            className='header-link group cursor-pointer'
            onClick={() => router.push('/favorite')}
          >
            <span className='span'>Favorites</span>
          </a>
          <a className='header-link group cursor-pointer'>
            <span className='span'>Search</span>
          </a>
        </div>
      )}
      {!session ? (
        <button
          className='ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200'
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Login
        </button>
      ) : (
        <div className='flex ml-auto'>
          <button
            className='ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200'
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </button>
          <img
            src={session.user?.image as any}
            className='ml-5 h-12 w-12 rounded-full object-cover cursor-pointer'
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Header;
