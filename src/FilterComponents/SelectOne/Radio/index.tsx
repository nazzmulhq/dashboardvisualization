import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { checkboxOptions } from "../../../demo";
import { FilterOptionType, OptionType } from "../../constants";
import useFilters from "../../../hooks/useFilters";

export default function RadioField(prop: FilterOptionType) {

    const { filters, handleChange } = useFilters(prop);

    return (
        <Grid item xs={prop.xs} md={prop.md} style={{ border: '1px solid white', textAlign: 'left' }}>
            <FormControl>
                <FormLabel id={`radio_${prop.title}`}>{prop.title}</FormLabel>
                <RadioGroup
                    value={filters[prop.title] || ''}
                    name={prop.title}
                    onChange={(e: any) => handleChange(e.target.value)}
                >
                    <Box display="inline">
                        {
                            checkboxOptions.map((opt: OptionType, index: number) => (
                                <FormControlLabel key={index} value={opt.id} control={<Radio value={opt.id} />} label={opt.label} />
                            ))
                        }
                    </Box>
                </RadioGroup>
            </FormControl>
        </Grid>
    )
}