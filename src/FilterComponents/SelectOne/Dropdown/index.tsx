import { Grid } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import React from 'react';
import { movies } from '../../../demo';
import useFilters from '../../../hooks/useFilters';
import { FilterOptionType } from '../../constants';

export default function DropdownSingleField(prop: FilterOptionType) {
    const { filters, handleChange } = useFilters(prop);

    return (
        <Grid item xs={prop.xs} md={prop.md} style={{ border: '1px solid white', textAlign: 'left' }}>
            <InputLabel>{prop.title}</InputLabel>
            <Autocomplete
                disablePortal
                options={movies}
                value={filters[prop.title] || ''}
                onChange={(_e: any, value) => handleChange(value)}
                renderInput={(params: any) => <TextField {...params} />}
            />
        </Grid>
    );
}
