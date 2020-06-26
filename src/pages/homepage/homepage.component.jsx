import { ReactComponent as Damian } from '../../assets/damian444.svg';
import React from 'react';
import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className="coderality">
    <div className="photo-box">
      <div className="photo-box1" >
        <div className="moving-text-1">
          Learn how to make coding <br></br>fun for your whole family!
        </div> 
        <div className="optimization-wrapper">
          <img src="https://i.postimg.cc/dQbmKvVs/computer-1.png" alt="brain-optimization" className='brain-optimization'></img>
        </div>
      </div>
        <div className="photo-box2">
          <div className="moving-text">
            Turn Code into Reality with us.
          </div> 
          <div className="damian-wrapper">
            <Damian className='damian' />
          </div>
        </div>
    </div>
    <Directory />
  </div>
);

export default HomePage;