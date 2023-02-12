import React from 'react';

import { scheduleData } from '../Data/dummy';
import { Header } from '../Components';

const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl ">
      <Header category="App" title="Calendar" />
      <div
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      ></div>
    </div>
  );
};

export default Calendar;
