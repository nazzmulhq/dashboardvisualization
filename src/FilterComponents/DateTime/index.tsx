import { Grid } from "@mui/material";
import React from "react";
import { FilterOptionType } from "../constants";

export default function DateTimeField(prop: FilterOptionType) {
    return (
        <Grid item xs={prop.xs} md={prop.md} style={{ border: '1px solid white', textAlign: 'left' }}>
            DateTime field
        </Grid>
    )
}