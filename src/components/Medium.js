/* eslint-disable react/prefer-stateless-function */

import React, { useState, useEffect } from 'react';
import { stat } from 'fs';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBook } from '@fortawesome/free-solid-svg-icons';
import * as electron from 'electron';


/* async function getState() {
  let number: StatDetail[] = [];

  number = await fetch('http://localhost:3000/pup')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data.map(
        (eachStat: StatDetail) =>
          new StatDetail(
            eachStat['readNumber'],
            eachStat['title'],
            eachStat['viewNumber']
          )
      );
    });
  return number;
} */

export const Medium = () => {
  const initStats = [];
  const [numstat, setnumStat] = useState(0);
  const [stats, setStats] = useState(initStats);
  //const { numberofStat } = this.state;

  useEffect(() => {
    const ipcRenderer = electron.ipcRenderer;

    ipcRenderer.on('medium-stat', (event, data) => {
      console.log(data);
      setStats(data);
    });

    /* getState().then(result => {
      setnumStat(result.length);
      setStats(result);
    }); */
  }, []);

  const printStats = (stats) => {
    for (const stat of stats) {
      console.log(stat.title);
    }
  };

  return (
    <div className='medium-container'>
      {stats === initStats ? (
        <div className="loader"></div>
      ) : (
        stats.map(stat => (
          <div className='medium-item' key={stat.title}>
            <div className='stat-title'>{stat.title}</div>
            <div className='stat-view'>
              <i className='i-small'>
                <FontAwesomeIcon icon={faEye} />
              </i>
              &nbsp;{stat.viewNumber}
            </div>
            <div className='stat-read'>
              <i className='i-small'>
                <FontAwesomeIcon icon={faBook} />
              </i>
              &nbsp;{stat.readNumber}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
