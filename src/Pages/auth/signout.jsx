import React, { useEffect } from 'react';
import { useRequest } from '../../hooks/useRequest';
import { Loading } from '../../Components/Loading';

import { useNavigate } from 'react-router';

import { useStateContext } from '../../Contexts/ContextProvider';

export const SignOut = () => {
  const { setCurrentUser } = useStateContext();
  const navigate = useNavigate();

  const { doRequest } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: async () => {
      await setCurrentUser({});
      navigate('/');
    },
  });

  useEffect(() => {
    doRequest();
  }, []);
  return <Loading />;
};
