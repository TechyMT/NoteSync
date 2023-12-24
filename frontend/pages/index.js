import { useState, useEffect } from 'react';
import { Mulish } from 'next/font/google';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import { AuthContext, UserAuth } from '@/utils/auth';
import { useContext } from 'react';
import { useRouter } from 'next/router';



const mulish = Mulish({ subsets: ['latin'] });

export default function Home()
{

  const { user, setUser, googleSignIn, signInGithub, emailSignIn } = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleGoogleSignIn = () =>
  {
    googleSignIn();
  };
  const handleGithubSignIn = () =>
  {
    signInGithub();
  };

  const handleEmailSignIn = () =>
  {
    emailSignIn(email, password);

  };

  useEffect(() =>
  {
    localStorage.getItem('user') && setUser(JSON.parse(localStorage.getItem('user')));
    if (user)
    {
      router.push('/dashboard');
    }
    console.log(user);
  }, []);


  return (
    <main className={`w-screen flex ${mulish.className}`}>

      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      {/* Section 1: Vector and Text */}
      <div className="hidden lg:flex  px-16 py-10 flex-col lg:w-1/2  bg-blue-50  h-screen">
        <div className="header flex ">
          <img src="/applogo.jpeg" alt="Logo" className='h-16 w-16 rounded-md shadow-md ' />
        </div>

        <img src="/login-vector.svg" alt="LoginVector" className='mx-16' />
      </div>

      {/* Section 2: Login and Register */}
      <div className="w-full lg:w-1/2 py-8 px-6 lg:py-24 lg:px-0 h-screen flex items-center justify-center">
        <div className="inner-box w-full lg:w-6/12 h-full">
          <h3 className='text-3xl font-bold text-gray-900 '>Login to NoteSync</h3>
          <p className='text-xs mt-2 font-medium'>Please enter your credentials to login to NoteSync.</p>
          <div className="form mt-8">
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-2 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="john.doe@company.com" required />
            </div>
            <div class="mb-6">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
              <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-2 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="123****" required />
            </div>
            <div className="mb-6 flex justify-between mt-6">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="remember" id="remember" />
                <span className='text-sm'>Remember Me</span>
              </div>
              <div className="font-medium text-sm">Forgot Password?</div>
            </div>
            <button onClick={handleEmailSignIn} type="button" class="mb-6 px-3 py-2 w-full text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            <hr />
            {/* Sign in with Google */}
            <button onClick={handleGoogleSignIn} type="button" class="text-black mt-6 bg-gray-200 hover:bg-gray-300 items-center justify-center gap-2 w-full focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex dark:focus:ring-[#4285F4]/55 me-2 mb-2">
              <FcGoogle className='text-xl' />
              Sign in with Google
            </button>
            {/* Sign in with Google */}
            <button onClick={handleGithubSignIn} type="button" class="text-black mt-3 bg-gray-200 hover:bg-gray-300 items-center justify-center gap-2 w-full focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex dark:focus:ring-[#4285F4]/55 me-2 mb-2">
              <FaGithub className='text-xl' />
              Sign in with Github
            </button>
          </div>
        </div>
      </div>
    </main >
  );
}
