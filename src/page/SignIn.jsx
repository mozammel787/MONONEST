import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginImg from '../assets/LoginIMG.png';
import toast from 'react-hot-toast';
import { useAuth } from '../Hook/useAuth';

const SignIn = () => {
  const { googleLogin, user, logIn, message } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  const from = location?.state?.from?.pathname || '/';

  const handleGoogleSubmit = async () => {
    setLoading(true);
    try {
      const result = await googleLogin();
      const user = {
        displayName: result?.user?.displayName,
        email: result?.user?.email,
        photoURL: result?.user?.photoURL,
        phoneNumber: result?.user?.phoneNumber,
      };
      await submitUserToDB(user);
      toast.success('Login Successful');
    } catch (error) {
      toast.error(error.message || 'Google Login Failed');
    } finally {
      setLoading(false);
    }
  };

  const submitUserToDB = async (user) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      localStorage.setItem('token', data?.token);
    } catch (error) {
      toast.error('Failed to save user');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      toast.error('Please fill in both fields');
      setLoading(false);
      return;
    }

    try {
      const result = await logIn(email, password);
      const user = {
        displayName: result?.user?.displayName,
        email: result?.user?.email,
      };
      await submitUserToDB(user);
      toast.success('Login Successful');
    } catch (error) {
      toast.error(message || 'Login Failed');
    } finally {
      setLoading(false);
    }
    console.log(form.email.value);
    
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  return (
    <div className='flex flex-col md:flex-row w-full md:h-screen items-center justify-between'>
      <div
        className='w-full md:w-[50%] h-[50vh] md:h-screen bg-contain bg-center bg-[#f2f4f6] bg-no-repeat'
        style={{ backgroundImage: `url(${LoginImg})` }}
      >
        <Link to={'/'}>
          <img className='w-24 md:w-40 mx-auto mt-5' src='logo.png' alt='Logo' />
        </Link>
      </div>

      <div className='w-full md:w-[50%] px-6 md:px-24 mt-6 md:mt-0'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 md:gap-8 w-full md:w-[70%]'>
          <h3 className='text-3xl md:text-5xl font-semibold'>Sign In</h3>
          <p className='text-gray-400'>
            Don’t have an account yet?{' '}
            <Link className='font-bold text-[#d17f34]' to={'/signup'}>
              Sign Up
            </Link>
          </p>
          <input
            type='email'
            name='email'
            placeholder='Email Address'
            className='border-b focus:outline-none py-3'
            required
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            className='border-b focus:outline-none py-3'
            required
          />

          <button
            type='submit'
            className={`btn btn-neutral ${loading ? 'opacity-50' : ''}`}
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>

          <div className='flex items-center pt-4 space-x-1'>
            <div className='flex-1 h-px sm:w-16 bg-gray-300'></div>
            <p className='px-3 text-sm text-gray-600'>Login with social accounts</p>
            <div className='flex-1 h-px sm:w-16 bg-gray-300'></div>
          </div>

          <div className='flex justify-center space-x-4'>
            <button
              type='button'
              onClick={handleGoogleSubmit}
              disabled={loading}
              aria-label='Log in with Google'
              className='p-3 rounded-sm'
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' className='w-5 h-5 fill-current'>
                <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
