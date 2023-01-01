import { signIn } from 'next-auth/react';

export default function Login({ providers }: any) {
  return (
    <div className='flex flex-col items-center space-y-2 pt-48'>
      <h1 className='uppercase text-xl text-center'>
        Please login to access this website
      </h1>
      <div>
        {Object.values(providers).map((provider: any) => (
          <div key={provider.name} className='outline-8 '>
            {/* https://devdojo.com/tailwindcss/buttons#_ */}
            <button
              className=' border-2 mt-4 relative inline-flex items-center justify-start px-8 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group'
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              <span className='w-48 h-48 rounded rotate-[-40deg] bg-[#77848c] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0'></span>
              <span className='relative w-full text-left text-black transition-colors duration-300 ease-in-out'>
                Sign in with {provider.name}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
