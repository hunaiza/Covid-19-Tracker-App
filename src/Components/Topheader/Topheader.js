    import React from 'react'
    import { makeStyles } from '@material-ui/core/styles';
    import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
    import './Topheader.css' 

    const useStyles = makeStyles((theme) => ({
        root: {
        flexGrow: 1,
        },
        paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: '#f1f8fd',
        border:'2px solid'
        },
        
    }));
    
    export const Topheader = () => {
        const classes = useStyles();
        return (
            <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={1}>
                        <Paper className={classes.paper}>xs=1
                                       <div className="top">
                                       
                                       </div>
                         </Paper>
            </Grid>
            <Grid item xs={3}>
            <h3 className={classes.paper} id="title">Covid 19 </h3>
            </Grid>
            <Grid item xs={8}>
            <Paper className={classes.paper}>xs=10</Paper>
            </Grid>
        </Grid>
        </div>
        )
    }
