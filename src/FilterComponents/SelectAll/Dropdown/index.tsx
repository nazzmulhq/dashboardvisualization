import { Grid, InputLabel } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React from 'react';
import { movies } from '../../../demo';
import useFilters from '../../../hooks/useFilters';
import { FilterOptionType } from '../../constants';
export default function DropdownMultipleField(prop: FilterOptionType) {
    const { filters, handleChange } = useFilters(prop);

    return (
        <Grid item xs={prop.xs} md={prop.md} style={{ border: '1px solid white', textAlign: 'left' }}>
            <InputLabel>{prop.title}</InputLabel>
            <Autocomplete
                multiple
                disablePortal
                options={movies}
                style={{ width: '100%' }}
                value={filters[prop.title] || []}
                fullWidth
                onChange={(_, value: any) => handleChange(value)}
                renderInput={(params: any) => <TextField {...params} fullWidth />}
            />
        </Grid>
    );
}
