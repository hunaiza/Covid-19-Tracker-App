import React, { useEffect,useState } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import { Topheader } from './Components/Topheader/Topheader'
import {MainBody} from './Components/MainBody/MainBody'
import './App.css';
//import image from './bg.jpg';

import { FetchData } from './Components/GlobalContext/GlobalContext'


function App() {
  const [data, setdata] = useState({});

  useEffect(() => {
    const getdata = async () => {
      const data1 = await FetchData();
      //console.log(data1);
      setdata(data1);
      
    }
   
    getdata();
 },[])

 
  return (
   
    <div  className="main">
      <div className="container">
        
        <Topheader data={data} />
        <MainBody data={data}/>
          
     </div>
      </div>
      
  );
}

export default App;
