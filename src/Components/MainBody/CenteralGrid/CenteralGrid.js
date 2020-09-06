
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
    
    // border:'2px solid #222e51',
      backgroundColor: "#f1f8fd",
      
    // boxShadow:"5px 5px 10px #d4dadf, -5px -5px 10px #ffffff"
  },
  
}));

export const CenteralGrid = ({data}) => {
  const classes = useStyles();

  const a = 23;
 
    return (
      <div className={classes.root} >
    <Grid container spacing={3}>
       
      <Grid item xs={12}>
                  <Paper className={classes.paper} style={{display:"flex",justifyContent:"center",alignItems:"space-between"}}>
              <CardPanel data={data}  />
        </Paper>
              </Grid>
              {/* <Grid item xs={4}>
                  <Paper className={classes.paper}>
                   <CardPanel/>
        </Paper>
              </Grid>
              <Grid item xs={4}>
                  <Paper className={classes.paper}>
                   <CardPanel/>
        </Paper>
      </Grid> */}
      
      <Grid item xs={6}>
          <Paper className={classes.paper}> Chat Panle{a}</Paper>
              </Grid>
              <Grid item xs={6}>
        <Paper className={classes.paper}>Chat Panle</Paper>
      </Grid>
      
    </Grid>
  </div>
  )
 
}
