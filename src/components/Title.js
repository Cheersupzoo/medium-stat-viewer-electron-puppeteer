import React from 'react';
import * as style from './Home.css';

export const Title = () => {
  return (
    <div className='main-nav'>
      <h4 className="title">Medium</h4>
      <img
        src="https://cdn-images-1.medium.com/fit/c/32/32/0*NSKY8Vgh7aYsHs-y.jpg"
        className='avatar-image avatar-image--icon'
        alt="Avatar Icon"
      ></img>
    </div>
  );
};
