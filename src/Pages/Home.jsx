import React from 'react';
import { currentColor } from 'tailwindcss/colors';

import { Loading } from '../Components/Loading';

import OverLoadButton from '../Components/OverLoadButton';

import { useStateContext } from '../Contexts/ContextProvider';

export const Home = () => {
  const { currentUser } = useStateContext();
  return (
    <div>
      <h1 className='text-3xl text-white m-20'>Home</h1>
      {currentUser && <h3 className='text-3xl text-white m-20'></h3>}
      {currentUser && <OverLoadButton />}
    </div>
  );
};
