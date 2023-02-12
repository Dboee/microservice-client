import React, { useState } from 'react';
// import {
//   ChartComponent,
//   SeriesCollectionDirective,
//   SeriesDirective,
//   Inject,
//   DateTme,
//   Legend,
//   Tooltip,
//   LineSeries,
//   DateTime,
// } from "@syncfusion/ej2-react-charts";

import {
  lineCustomSeries,
  LinePrimaryYAxis,
  LinePrimaryXAxis,
} from '../../Data/dummy';

import { useStateContext } from '../../Contexts/ContextProvider';

const LineChart = () => {
  const { currentMode } = useStateContext();
  return (
    <div
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <div>
        {lineCustomSeries.map((item, index) => (
          <div key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default LineChart;
