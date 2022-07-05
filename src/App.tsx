import { Grid } from '@mui/material';
import React from 'react';
import Charts from './Charts';
import DashboardCard from './DashboardCard';
import { visualizationDemo } from './demo';
import FilterSection from './FilterComponents';
import { CHART, DASHBOARD_CARDS, FILTER, MAP_CHART, TABLE } from './FilterComponents/constants';
import SubCard from './FilterComponents/SubCard';
import Maps from './Maps';
import MTable from './Table';
import { VisualizationT } from './types';
const dataObject = {};

function App() {
    const getComponent = (item: VisualizationT) => {
        switch (item.type) {
            case CHART:
                return <Charts {...item} />;

            case TABLE:
                return <MTable item={item} />;

            case FILTER:
                return <FilterSection item={item as VisualizationT} dataObject={dataObject} />;

            case DASHBOARD_CARDS:
                return <DashboardCard item={item} />;

            case MAP_CHART:
                return <Maps item={item} />;
        }
    };

    return (
        <>
            <Grid container spacing={3}>
                {visualizationDemo.map((item: VisualizationT, index: number) => (
                    <Grid item xs={item.xs} md={item.md} key={index}>
                        <SubCard>{getComponent(item)}</SubCard>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default App;
