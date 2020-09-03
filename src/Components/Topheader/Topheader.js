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
        // border:'2px solid'
        },
        
    }));
    
    export const Topheader = () => {
        const classes = useStyles();
        return (
            <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={1}>
                        <Paper className={classes.paper} id="leftmost">
                        
                            {/* <i className="fas fa-pen"></i> */}
                           <i class="fas fa-virus" id="virus"></i>
                         </Paper>
            </Grid>
            <Grid item xs={3}>
            <h1 className={classes.paper} id="title">Covid 19 Tracker App </h1>
                    </Grid>
                    

            <Grid item xs={8}>
                    <Paper className={classes.paper} id="right">
                        <Grid item xs={2}>
             <Paper className={classes.paper} id="right-in1">
                 DashBoard
            </Paper>
                </Grid>
                            {/* End of right-in grid             */}
                            <Grid item xs={6}>
             <Paper className={classes.paper} id="right-in2">
                 DashBoard
            </Paper>
                </Grid>           

                <Grid item xs={2}>
             <Paper className={classes.paper} id="right-in2">
                 DashBoard
            </Paper>
                </Grid>   
            </Paper>
              
            </Grid>
        </Grid>
        </div>
        )
    }
