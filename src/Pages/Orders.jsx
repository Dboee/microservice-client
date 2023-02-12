import React from 'react';

import { ordersData, contextMenuItems, ordersGrid } from '../Data/dummy';
import { Header } from '../Components';
const Orders = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <div id="gridcomp" dataSource={ordersData} allowPaging allowSorting>
        <div>
          {ordersGrid.map((item, index) => (
            <div key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Orders;
