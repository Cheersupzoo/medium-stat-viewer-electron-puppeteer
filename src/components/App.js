import '../assets/css/App.css'
import React, { Component } from 'react'
// import * as electron from 'electron';
import { Medium } from './Medium';
import { Title } from './Title';
import './Home.css';

class App extends Component {
  render() {
    // const ipcRenderer = electron.ipcRenderer;

    /* ipcRenderer.on('medium-stat', (event, data) => {
      console.log(data);
      //setStats(data);
    }); */


    return (
      <div className="container">
      <Title />
      <Medium />
    </div>
    )
  }
}

export default App
