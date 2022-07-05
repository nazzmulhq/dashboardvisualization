import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel, Grid } from "@mui/material";
import React from "react";
import { checkboxOptions } from "../../../demo";
import { FilterOptionType, OptionType } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_FILTERS } from "../../../store/actions";
import _ from "lodash";

export default function CheckboxField(prop: FilterOptionType) {

    const filters = useSelector((state: any) => state.filters);
    const dispatch = useDispatch();

    const handleChange = (value: any) => {

        if (!filters[prop.title]) {
            value = [value];
        } else {
            const currentValue = _.cloneDeep(filters[prop.title]);
            if (currentValue.includes(value)) {
                const index = currentValue.indexOf(value);
                currentValue.splice(index, 1);
                value = currentValue;
            } else {
                value = [...currentValue, value];
            }
        }

        dispatch({
            type: CHANGE_FILTERS,
            payload: {
                fieldName: prop.title,
                value,
            }
        })
    }

    const isItemChecked = (value: number | string) => {
        console.log(value, filters[prop.title]);
        return filters[prop.title] && filters[prop.title].includes(value) ? { checked: true } : { checked: false };;
    }

    return (
        <Grid item xs={prop.xs} md={prop.md} style={{ border: '1px solid white', textAlign: 'left' }}>
            <FormGroup>
                <FormLabel component="legend">{prop.title}</FormLabel>
                <Box display="inline">
                    {
                        checkboxOptions.map((opt: OptionType, index: number) => (
                            <FormControlLabel
                                label={opt.label}
                                key={index}
                                control={<Checkbox
                                    {...isItemChecked(String(opt.id))}
                                    value={String(opt.id)}
                                    onChange={(e: any) => handleChange(e.target.value)} />}
                            />
                        ))
                    }
                </Box>
            </FormGroup>
        </Grid>
    )
}