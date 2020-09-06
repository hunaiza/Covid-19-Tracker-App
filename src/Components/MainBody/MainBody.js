import React from 'react'
// import {FetchDialyData} from '../GlobalContext/GlobalContext'
import './MainBody.css'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {CenteralGrid} from './CenteralGrid/CenteralGrid'
import { RightSideChart } from './RightSideChart/RightSideChart';
import { BarChart } from './BarChart/BarChart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
   
  },
  
}));
export const MainBody = ({ data,country }) => {
  
  // let [dialydata, setdialydata] = useState();


  const classes = useStyles();
  
    return (
        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={1}>
                    <Paper className={classes.paper} id="main-left-grid">
                        {/* Starting of LeftSide Grid */}
                    <Grid item xs={12}>
          <Paper className={classes.paper}  id="top-icon"><i class="fas fa-bars" id="icons"></i></Paper>
                        </Grid>
                        <Grid item xs={12}>
          <Paper className={classes.paper} id="grid"><i class="fas fa-user" id="icons"></i></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} id="grid"><i class="fab fa-facebook-messenger" id="icons"></i></Paper>
                        </Grid>
                        <Grid item xs={12}>
          <Paper className={classes.paper} id="grid"><i class="fab fa-twitter-square" id="icons"></i></Paper>
                        </Grid>
                        <Grid item xs={12}>
          <Paper className={classes.paper} id="grid"><i class="fa fa-phone" aria-hidden="true" id="icons"></i></Paper>
        </Grid>
          </Paper>
        </Grid>
                {/* End of LeftMost Grid */}
                
                {/* Starting centeral Grid */}
        <Grid item xs={8} >
            <Paper className={classes.paper} id="centeralPanel">
              <CenteralGrid data={data}/>
            </Paper>
            
                </Grid>
                {/* End of centeral Grid */}
                
                <Grid item xs={3}>
          <Paper  id="rigtside"  >
              <RightSideChart data={data} country={country} />   
              
                  
            </Paper>
            <Grid item xs={12}>
          <Paper  id="rigtside" style={{marginTop:"20px",height:"5cm"}}>
                <BarChart data={data} country={country}/> 
              
              
          </Paper>
        </Grid>
        </Grid>
      </Grid>
    </div>
    )
}
