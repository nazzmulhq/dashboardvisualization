import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Autocomplete, Grid, InputLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import React from 'react';
import useFilters from '../../../hooks/useFilters';
import { FilterOptionType } from '../../constants';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
export default function DropdownWithCheckbox(prop: FilterOptionType) {
    const { filters, handleChange } = useFilters(prop);
    return (
        <>
            <Grid item xs={prop.xs} md={prop.md} style={{ border: '1px solid white', textAlign: 'left' }}>
                <InputLabel>{prop.title}</InputLabel>
                <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={prop.defaultOptions}
                    disableCloseOnSelect
                    value={filters[prop.title] || []}
                    getOptionLabel={(option) => option.label}
                    renderOption={(props: any, option: any, { selected }: any) => (
                        <li {...props}>
                            <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
                            {option.label}
                        </li>
                    )}
                    onChange={(_, value: any) => handleChange(value)}
                    style={{ width: '100%' }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                />
            </Grid>
        </>
    );
}
