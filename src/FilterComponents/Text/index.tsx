import { Grid, InputLabel, TextField as MUITextField } from '@mui/material';
import React from 'react';
import useFilters from '../../hooks/useFilters';
import { FilterOptionType } from '../constants';
export default function TextField(prop: FilterOptionType) {
    const { filters, handleChange } = useFilters(prop);

    return (
        <Grid item xs={prop.xs} md={prop.md} style={{ border: '1px solid white', textAlign: 'left' }}>
            <InputLabel>{prop.title}</InputLabel>
            <MUITextField
                variant="outlined"
                name={prop.title}
                value={filters[prop.title] || ''}
                fullWidth
                onChange={(e: any) => handleChange(e.target.value)}
            />
        </Grid>
    );
}
