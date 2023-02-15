import React, { useEffect, useState } from 'react';

import { useRequest } from '../../hooks/useRequest';
import { useNavigate } from 'react-router';

import logo from '../../assets/logo.png';

export const SignUp = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [componentErrors, setComponentErrors] = useState([]);

  const navigate = useNavigate();
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      username,
      email,
      password,
    },
    onSuccess: () => {
      navigate('/');
      console.log('Success');
    },
  });
  const { doSignIn } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => {
      navigate('/');
      console.log('Success');
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== passwordConfirmation) {
      setComponentErrors([{ message: 'Passwords do not match' }]);
    } else {
      await doRequest();
      await doSignIn();
    }
  };

  return (
    <div>
      <div className='flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50'>
        <div>
          <a href='/' style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt='logo' className='w-20 h-20' />
            <h3 className='text-3xl font-bold' style={{ color: '#e67f34' }}>
              Delight-Systems
            </h3>
          </a>
        </div>
        <div className='w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg'>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700 undefined'
              >
                Username
              </label>
              <div className='flex flex-col items-start'>
                <input
                  type='text'
                  name='username'
                  value={username}
                  onChange={(event) => setName(event.target.value)}
                  className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                />
              </div>
            </div>
            <div className='mt-4'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 undefined'
              >
                Email
              </label>
              <div className='flex flex-col items-start'>
                <input
                  type='email'
                  name='email'
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                />
              </div>
            </div>
            <div className='mt-4'>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700 undefined'
              >
                Password
              </label>
              <div className='flex flex-col items-start'>
                <input
                  type='password'
                  name='password'
                  className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>
            <div className='mt-4'>
              <label
                htmlFor='password_confirmation'
                className='block text-sm font-medium text-gray-700 undefined'
              >
                Confirm Password
              </label>
              <div className='flex flex-col items-start'>
                <input
                  type='password'
                  name='password_confirmation'
                  className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  value={passwordConfirmation}
                />
              </div>
            </div>

            {componentErrors.map((error, index) => {
              return (
                <div
                  class='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
                  role='alert'
                >
                  <span class='block sm:inline'>{error.message}</span>
                  <span
                    class='absolute top-0 bottom-0 right-0 px-4 py-3'
                    onClick={() => {
                      let newErrors = [...componentErrors];
                      newErrors.splice(index, 1);
                      setComponentErrors(newErrors);
                    }}
                  >
                    <svg
                      class='fill-current h-6 w-6 text-red-500'
                      role='button'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <title>Close</title>
                      <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
                    </svg>
                  </span>
                </div>
              );
            })}
            {errors}
            <div className='flex items-center justify-end mt-4'>
              <a
                className='text-sm text-gray-600 underline hover:text-gray-900'
                href='/auth/signin'
              >
                Already registered?
              </a>

              <button
                type='submit'
                className='inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false'
                onClick={() => {
                  if (password === passwordConfirmation) {
                    handleSubmit();
                  } else {
                    setComponentErrors([
                      { message: 'Password and Confirm Password do not match' },
                    ]);
                  }
                }}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
