import React from 'react';
import Measure from 'react-measure';
import { Chart } from '@antv/g2';
import useSWR from 'swr';
import fetcher from '../../utils/fetch';

const container = 'trend-chart';

const Trend: React.FC<{ height?: number }> = ({ height }) => {
  const [width, setWidth] = React.useState<number>();
  const [hasRendered, setHasRendered] = React.useState(false);
  const { data: dailyData } = useSWR('/api/daily', fetcher, { suspense: true });
  React.useEffect(() => {
    if (!dailyData || !width || hasRendered) {
      return;
    }
    const chart = new Chart({
      container,
      autoFit: true,
      height: height ?? (width / 971) * 800,
    });
    setHasRendered(true);
    chart.data([
      ...dailyData.map(({ totalConfirmed, reportDate }: any) => ({
        number: totalConfirmed, reportDate, type: 'total confirmed',
      })),
      ...dailyData.map(({ reportDate, deaths }: any) => ({
        reportDate, number: deaths.total, type: 'total deaths',
      })),
    ]);
    chart.scale({
      reportDate: {
        range: [0, 1],
        sync: true,
      },
      totalConfirmed: {
        min: 0,
        nice: true,
        sync: true,
      },
      deaths: {
        min: 0,
        nice: true,
        sync: true,
      },
    });
    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });
    chart.line().position('reportDate*number').shape('smooth').color('type', (val) => {
      if (val === 'total confirmed') {
        return 'blue';
      }

      return 'red';
    });

    chart.render();
  }, [dailyData, width, hasRendered, height]);

  return (
    <Measure
      bounds
      onResize={(contentRect) => {
        if (contentRect.bounds) {
          setWidth(contentRect.bounds.width);
        }
      }}
    >
      {({ measureRef }) => (
        <div ref={measureRef} id={container} />
      )}
    </Measure>
  );
};

export default Trend;
