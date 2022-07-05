import React from 'react';
import { AREA_CHART, BAR_CHART, LINE_CHART, PIE_CHART } from '../FilterComponents/constants';
import { VisualizationT } from '../types';
import AreaChart from './AreaChart';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
export default function Charts(charts: VisualizationT) {
    const getChart = () => {
        switch (charts.config.type) {
            case BAR_CHART:
                return <BarChart chartData={charts} />;

            case AREA_CHART:
                return <AreaChart chartData={charts} />;

            case PIE_CHART:
                return <PieChart chartData={charts} />;

            case LINE_CHART:
                return <LineChart chartData={charts} />;
        }
    };

    return <> {getChart()} </>;
}
