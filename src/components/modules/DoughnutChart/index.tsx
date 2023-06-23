import { type FC } from 'react';

import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartData,
  type CoreChartOptions,
  type ElementChartOptions,
  type DatasetChartOptions,
  type PluginChartOptions,
  type ScatterControllerChartOptions,
  type DoughnutControllerChartOptions
} from 'chart.js';
import { type _DeepPartialObject } from 'chart.js/dist/types/utils';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  data: ChartData<'doughnut', number[], unknown>;
  options?: _DeepPartialObject<CoreChartOptions<'doughnut'> & ElementChartOptions<'doughnut'> & PluginChartOptions<'doughnut'> & DatasetChartOptions<'doughnut'> & ScatterControllerChartOptions & DoughnutControllerChartOptions> | undefined;
}

const DoughnutChart: FC<DoughnutChartProps> = ({ data, options }) => {
  return (
    <Doughnut
      data={data}
      options={options}
    />
  );
};

export default DoughnutChart;
