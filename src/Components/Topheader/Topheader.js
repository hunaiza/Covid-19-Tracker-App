    import React from 'react'
    import { makeStyles } from '@material-ui/core/styles';
    import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Topheader.css' 
//import selectBox
import { SelectBox } from './SelectBox/SelectBox'



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
    
    export const Topheader = ({data,getcountry}) => {
        const classes = useStyles();
        console.log(data);
         
        // getcountry("okasdf");
      
        return (
            <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={1}>
                        <Paper className={classes.paper} id="leftmost">
                        
                            {/* <i className="fas fa-pen"></i> */}
                           <i className="fas fa-virus" id="virus"></i>
                         </Paper>
            </Grid>
            <Grid item xs={3}>
            <h1 className={classes.paper} id="title">Covid 19 Tracker App </h1>
                    </Grid>
                    

            <Grid item xs={8}>
                    <Paper className={classes.paper} id="right">
                        <Grid item xs={1}>
             <Paper className={classes.paper} id="right-in1">
                                    {/* DashBoard */}
                         <i className="fa fa-home" aria-hidden="true" id="home-icon"></i>
            </Paper>
                </Grid>
                            {/* End of right-in grid             */}

                            {/* {selectBox} */}
                            <Grid item xs={6}>
             <Paper className={classes.paper} id="right-in2">
                                    <SelectBox getcountry={getcountry}/>
            </Paper>
                </Grid>           

                <Grid item xs={2}>
             <Paper className={classes.paper} id="right-in2">
                                    
             <i className="fas fa-bell" id="home-icon"></i>           
            </Paper>
                </Grid>   
            </Paper>
              
            </Grid>
        </Grid>
        </div>
        )
    }
