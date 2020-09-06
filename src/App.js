import React, { useEffect,useState } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import { Topheader } from './Components/Topheader/Topheader'
import {MainBody} from './Components/MainBody/MainBody'
import './App.css';
//import image from './bg.jpg';
import { FetchData } from './Components/GlobalContext/GlobalContext'


 let response = null;
 
 

  function App() {
    const [data, setdata] = useState({});

  useEffect(() => {
    const getdata = async () => {
      const data1 = await FetchData();
      //console.log(data1);
      setdata(data1);
      
      
    }
   
    getdata();
   
  }, [])
 
    //   function getdata() {
    //     if (response!=null) {
    //       console.log(response);
    //     //  setdata(response);
    //     }
        
    //   }
     
    // // getdata();

    const getcountry = async (country) => {
      response = await FetchData(country);
      console.log(response);
        
      }
 
    return (
    
   
    <div  className="main">
      <div className="container">
        
        <Topheader data={data} getcountry={this.getcountry} />
        <MainBody data={data} />
          
     </div>
      </div>
      
  );
}

export default App;
