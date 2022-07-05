// material-ui
import { Box, Card, CardHeader, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
// third party
import Chart from 'react-apexcharts';
import useUiConfigChangeReducer from '../../hooks/useUiConfigChangeReducer';
import { ChartPropsT } from '../../types';

// ============================|| TOTAL LINE CHART CARD ||============================ //

const LineChart = ({ chartData }: ChartPropsT) => {
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

            <Card>
                <Box sx={{ bgcolor: chartData.bgColorForChart ? chartData.bgColorForChart : '' }}>
                    <Box sx={{ p: 2.5 }}>
                        <Grid container direction="column">
                            <Grid item container justifyContent="space-between" alignItems="center">
                                <Grid item>
                                    <Typography variant="h3" color={chartData.textColorForChart}>
                                        4000
                                    </Typography>
                                </Grid>

                                <Grid item>
                                    <Typography variant="body2" color={chartData.textColorForChart}>
                                        42%
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Typography variant="body2" color={chartData.textColorForChart}>
                                    Total Sales
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Chart {...config} />
                </Box>
            </Card>
        </>
    );
};

export default LineChart;
