import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import { Topheader } from './Components/Topheader/Topheader'
import {MainBody} from './Components/MainBody/MainBody'
import './App.css';
//import image from './bg.jpg';
import { FetchData } from './Components/GlobalContext/GlobalContext'


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
  
  async componentDidMount() {
    const data = await FetchData();

    this.setState({ data });
  }
  getcountry = async (country) => {
    const data = await FetchData(country);
    // console.log(country);
    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
    
   
      <div className="main">
        <div className="container">
        
          <Topheader data={data} getcountry={this.getcountry} />
          <MainBody data={data} />
          
        </div>
      </div>
      
    );
  }
}

export default App;
