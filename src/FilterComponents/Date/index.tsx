import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Grid, InputLabel, TextField } from '@mui/material';
import React from 'react';
import useFilters from '../../hooks/useFilters';
import { FilterOptionType } from '../constants';
export default function DateField(prop: FilterOptionType) {
    const { filters, handleChange } = useFilters(prop);

    return (
        <Grid item xs={prop.xs} md={prop.md} style={{ border: '1px solid white', textAlign: 'left' }}>
            <InputLabel>{prop.title}</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    inputFormat="dd/MM/yyyy"
                    value={filters[prop.title]}
                    onChange={handleChange}
                    renderInput={(params) => <TextField name="createdDate" {...params} fullWidth />}
                />
            </LocalizationProvider>
        </Grid>
    );
}
