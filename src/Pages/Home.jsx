import React from 'react';
import { currentColor } from 'tailwindcss/colors';

import { Loading } from '../Components/Loading';

export const Home = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-white'>Home</h1>
      <Loading />
    </div>
  );
};
