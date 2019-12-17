import {ReactComponent as Damian } from '../../assets/1111.svg';
import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <div class="coderality">
      {/* <img class="logo" alt='pic' src='../assets/coderality.jpg' /> */}
    </div>
    <div class="photo-box">
      <div class="moving-text" >
      Where we turn Code into Reality.
      </div>
      <Damian className='damian' />
    
    </div>
    <Directory />
    </div>
);

export default HomePage;