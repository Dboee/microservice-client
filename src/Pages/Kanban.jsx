import React from 'react';
import { kanbanData, kanbanGrid } from '../Data/dummy';
import { Header } from '../Components';

const Kanban = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl ">
      <Header category="App" title="Kanban" />
      <div
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
        keyField="Status"
      >
        <div>
          {kanbanGrid.map((item, index) => (
            <div key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kanban;
