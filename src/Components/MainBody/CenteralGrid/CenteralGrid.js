
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {CardPanel} from './CardPanel/CardPanel'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
      backgroundColor: "#f1f8fd",
   
  },
  
}));

export const CenteralGrid = ({data}) => {
  const classes = useStyles();


 
    return (
      <div className={classes.root} >
    <Grid container spacing={3}>
       
      <Grid item xs={12}>
                  <Paper className={classes.paper} style={{display:"flex",justifyContent:"center",alignItems:"space-between"}}>
              <CardPanel data={data}  />
        </Paper>
              </Grid>
             
    </Grid>
  </div>
  )
 
}
