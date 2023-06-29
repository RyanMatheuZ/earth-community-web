import { type FC } from 'react';

import { Chart, ArcElement, Tooltip, Legend, type ChartData, type ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import * as S from './styles';

Chart.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  data: ChartData<'doughnut'>;
  options?: ChartOptions<'doughnut'>;
}

const DoughnutChart: FC<DoughnutChartProps> = ({ data, options }) => {
  return (
    <S.Container>
      <Doughnut
        data={data}
        options={options}
      />
    </S.Container>
  );
};

export default DoughnutChart;
