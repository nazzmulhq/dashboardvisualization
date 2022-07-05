// material-ui
import { Box, CardHeader, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
// third-party
import Chart from 'react-apexcharts';
import useUiConfigChangeReducer from '../../hooks/useUiConfigChangeReducer';
import { ChartPropsT } from '../../types';

// project imports

// =========================|| SATISFACTION CHART CARD ||========================= //

const PieChart = ({ chartData }: ChartPropsT) => {
    const { config } = chartData;
    useUiConfigChangeReducer(chartData);

    return (
        <>
            {chartData.title && (
                <Box marginBottom={2}>
                    <CardHeader title={chartData.title} sx={{ textAlign: chartData.titlePosition }} />
                    <Divider />
                </Box>
            )}
            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <Typography variant="subtitle1">Customer Satisfaction</Typography>
                </Grid>
                <Grid item>
                    <Chart {...config} />
                </Grid>
            </Grid>
        </>
    );
};

export default PieChart;
