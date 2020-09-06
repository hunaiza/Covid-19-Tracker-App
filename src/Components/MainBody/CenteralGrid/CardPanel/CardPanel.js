import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CountUp from 'react-countup'
import Typography from '@material-ui/core/Typography';
import './CardPanel.css'

const useStyles = makeStyles({
  root: {
        width: "30%",
     
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
      transform: 'scale(0.8)',
      
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export const CardPanel = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    const classes = useStyles();
     
 
 
  if (!confirmed) {
    return (
      <>
    <Card className={classes.root} variant="outlined"  id="card1">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
       
        </Typography>
        <Typography variant="h5" component="h2">
          Recovered 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Loading...
        </Typography>
        <Typography variant="body2" component="p">
          Covid-19 Cases
        </Typography>
      </CardContent>
      <CardActions>
        
          </CardActions>
          

      </Card>
      


           {/* Second Card */}
      <Card className={classes.root} variant="outlined" id="card2">
      <CardContent >
        <Typography className={classes.title} color="textSecondary" gutterBottom>
       
        </Typography>
        <Typography variant="h5" component="h2">
          Death
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Loading...
        </Typography>
        <Typography variant="body2" component="p">
          Covid-19 Cases
        </Typography>
      </CardContent>
      <CardActions>
        
          </CardActions>
            </Card>
            
            {/* Last Card */}

      <Card className={classes.root} variant="outlined" id="card3">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        
        </Typography>
        <Typography variant="h5" component="h2" >
          Infected
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Loading...
        </Typography>
        <Typography variant="body2" component="p">
          Covid-19 Cases
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
            </Card>
            </>
  );
  }
  else {
   
    return (
      <>
    <Card className={classes.root} variant="outlined"  id="card1">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
       
        </Typography>
        <Typography variant="h5" component="h2">
          Recovered 
        </Typography>
            <Typography className={classes.pos} color="textSecondary">
            <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
          
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
           
            {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          Covid-19 Cases
        </Typography>
      </CardContent>
      <CardActions>
        
          </CardActions>
          

      </Card>
      


           {/* Second Card */}
      <Card className={classes.root} variant="outlined" id="card2">
      <CardContent >
        <Typography className={classes.title} color="textSecondary" gutterBottom>
       
        </Typography>
        <Typography variant="h5" component="h2">
          Death
        </Typography>
            <Typography className={classes.pos} color="textSecondary">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
                
         
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
           
            {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          Covid-19 Cases
        </Typography>
      </CardContent>
      <CardActions>
        
          </CardActions>
            </Card>
            
            {/* Last Card */}

      <Card className={classes.root} variant="outlined" id="card3">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        
        </Typography>
        <Typography variant="h5" component="h2" >
          Infected
        </Typography>
            <Typography className={classes.pos} color="textSecondary">
            <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
          
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
           
            {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          Covid-19 Cases
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
            </Card>
            </>
  ); 
  }
}
