import React from 'react';
import axios from 'axios';
import { useStateContext } from '../Contexts/ContextProvider';

const OverLoadButton = () => {
  const { currentUser } = useStateContext();
  const cookie = currentUser.cookie;
  console.log('cookie', cookie);

  const doRequest = async () => {
    try {
      const { data } = await axios.post(
        `https://microservice-tutorial.dev/api/tickets`,
        { title: 'Tomorrowland: Early Bird', price: 500 },
        {
          headers: { cookie },
        }
      );

      await axios.put(
        `https://microservice-tutorial.dev/api/tickets/${data.id}`,
        { title: 'Tomorrowland', price: 1000 },
        {
          headers: { cookie },
        }
      );

      await axios.put(
        `https://microservice-tutorial.dev/api/tickets/${data.id}`,
        { title: 'Tomorrowland: Late', price: 1500 },
        {
          headers: { cookie },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async () => {
    for (let i = 0; i < 200; i++) {
      doRequest();
      console.log('Request ', i, ' completed');
    }
  };

  return (
    <button onClick={handleClick}>
      <h1>Overload the eventhub</h1>
    </button>
  );
};

export default OverLoadButton;
