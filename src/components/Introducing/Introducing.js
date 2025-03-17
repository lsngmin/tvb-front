import React from 'react';
import "./Introducing.css"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'gray',
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    margin: theme.spacing(5),
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const Introducing = () => {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} border={"1px solid "} borderColor={"white"} margin={"0"} padding={"0"}>
            <Grid size={6}>
                <Item>1</Item>
            </Grid>
            <Grid size={6}>
                <Item>2</Item>
            </Grid>
            <Grid size={6}>
                <Item>3</Item>
            </Grid>
            <Grid size={6}>
                <Item>4</Item>
            </Grid>
        </Grid>
    );
}

export default Introducing;