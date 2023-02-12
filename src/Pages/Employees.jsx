import React from 'react';

import { employeesData, employeesGrid } from '../Data/dummy';
import { Header } from '../Components';
const Employees = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <div
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
      >
        <div>
          {employeesGrid.map((item, index) => (
            <div key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Employees;
