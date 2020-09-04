import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
 import './MainBody.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  
    border:'2px solid'
  },
  
}));
export const LeftMostIcons = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {/* Left Most Side for icons */}
        <Grid item xs={1} >
                    <Paper className={classes.paper} id="lefticon">
                    <Grid item xs={1}>
          <Paper className={classes.paper} id="leftbar">xs=6</Paper>
        </Grid> 
                     
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=6</Paper>
                        </Grid> 
               


                    </Paper>
                  
                
                </Grid>
                {/* End */}


        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
       
      </Grid>
    </div>
    )
}
