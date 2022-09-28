import React from 'react'
import { Grid } from '@mui/material';
import Photographer from './Photographer';

function Photographers() {
    return (
        <Grid container rowSpacing={2}
            alignItems="flex-start" justifyContent="space-evenly">
            <Grid item xs={3}>
                <Photographer />
            </Grid>
            <Grid item xs={3}>
                <Photographer />
            </Grid>
            <Grid item xs={3}>
                <Photographer />
            </Grid>
        </Grid>
    )
}

export default Photographers;