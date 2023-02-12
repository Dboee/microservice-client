import React from 'react';
import { customersData, customersGrid } from '../Data/dummy';
import { Header } from '../Components';

const Customers = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <div
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <div>
          {customersGrid.map((item, index) => (
            <div key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;
