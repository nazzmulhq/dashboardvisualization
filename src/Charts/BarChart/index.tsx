// material-ui
import { Box, CardHeader, Divider, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
// third-party
import Chart from 'react-apexcharts';

// assets
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import useUiConfigChangeReducer from '../../hooks/useUiConfigChangeReducer';
import { ChartPropsT } from '../../types';

// =========================|| CONVERSIONS CHART CARD ||========================= //

const BarChart = ({ chartData }: ChartPropsT) => {
    const theme = useTheme();
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

            <Box
                sx={{
                    p: 3
                }}
            >
                <Grid container spacing={1} alignItems="center">
                    <Grid item>
                        <Typography variant="subtitle1">New Stock</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="caption">(Purchased)</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <Typography variant="h4">0.85%</Typography>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={1} alignItems="center" style={{ color: theme.palette.info.main }}>
                            <ArrowUpwardIcon color="inherit" />
                            <Typography variant="h4" color="inherit">
                                0.50%
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Chart {...config} />
        </>
    );
};

export default BarChart;
