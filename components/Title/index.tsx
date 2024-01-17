import React from "react";
import { Grid } from '@mui/material'
const SectionTitle = ({ subTitle, title, className = "" }: any) => {
    return (
        <Grid className={`sectionTitle ${className}`}>
            <span>{subTitle}</span>
            <h2>{title}</h2>
        </Grid>
    )
}
export default SectionTitle