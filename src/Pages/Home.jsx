import React from 'react';
import { currentColor } from 'tailwindcss/colors';

import { Loading } from '../Components/Loading';

import { useStateContext } from '../Contexts/ContextProvider';

export const Home = () => {
  const { currentUser } = useStateContext();
  return (
    <div>
      <h1 className='text-3xl text-white m-20'>Home</h1>
      {currentUser && (
        <h3 className='text-3xl text-white m-20'>
          Welcome {currentUser.username}
        </h3>
      )}
      <Loading />
    </div>
  );
};
