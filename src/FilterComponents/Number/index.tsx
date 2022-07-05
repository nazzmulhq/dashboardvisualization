import { Grid, InputLabel, TextField } from '@mui/material';
import React from 'react';
import useFilters from '../../hooks/useFilters';
import { FilterOptionType } from '../constants';
export default function NumberField(prop: FilterOptionType) {
    const { filters, handleChange } = useFilters(prop);

    return (
        <Grid item xs={prop.xs} md={prop.md} style={{ border: '1px solid white', textAlign: 'left' }}>
            <InputLabel>{prop.title}</InputLabel>
            <TextField
                type="number"
                variant="outlined"
                fullWidth
                value={filters[prop.title] || ''}
                onChange={(e: any) => handleChange(e.target.value)}
            />
        </Grid>
    );
}
