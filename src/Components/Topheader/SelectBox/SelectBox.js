import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FetchCountries } from '../../GlobalContext/GlobalContext';



const useStyles = makeStyles((theme) => ({
  
  formControl: {
    
    minWidth: 140,
  },
}));

export const SelectBox = ({ getcountry }) => {


  let [countries, setcountries] = useState([]);

  useEffect( () => {
    
    async function fetchcountry() {
      
      setcountries(await FetchCountries());
    }
    fetchcountry();

  },[setcountries])


  
    const classes = useStyles();

  const [open, setOpen] = React.useState(false);



  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
   
     
    return (
        <div>
        
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Select Country</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            
            onChange={(e)=>getcountry(e.target.value)}
          >
            
            {countries.map((country,i) =>
              <MenuItem value={country} key={i} >{country}</MenuItem>
            )}
            
          </Select>
        </FormControl>
      </div>
    )
}
