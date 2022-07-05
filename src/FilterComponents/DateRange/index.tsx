import { Grid, InputLabel } from '@mui/material';
import React from 'react';
import DateRangePicker from 'rsuite/DateRangePicker';
import 'rsuite/dist/rsuite.min.css';
import useFilters from '../../hooks/useFilters';
import { FilterOptionType } from '../constants';
import { dateRangeStyle } from './style';
export default function DateRangeField(prop: FilterOptionType) {
    const { filters, handleChange } = useFilters(prop);

    return (
        <Grid item xs={prop.xs} md={prop.md} style={{ border: '1px solid white', textAlign: 'left' }}>
            <InputLabel>{prop.title}</InputLabel>
            <DateRangePicker
                format={'dd-MM-yyyy'}
                value={filters[prop.title] || [null, null]}
                onChange={(value: any) => handleChange(value)}
                style={dateRangeStyle}
            />
        </Grid>
    );
}
