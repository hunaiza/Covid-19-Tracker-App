import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import { Topheader } from './Components/Topheader/Topheader'
import {MainBody} from './Components/MainBody/MainBody'
import './App.css';
//import image from './bg.jpg';


function App() {
 
  return (
    <div  className="main">
      <div className="container">
        
        <Topheader />
        <MainBody/>
     </div>
      </div>
  );
}

export default App;
