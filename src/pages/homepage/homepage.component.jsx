import { ReactComponent as Damian } from '../../assets/damian.svg';
import React from 'react';
import { HomePageContainer } from './homepage.styles'
import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = () => (

  <div className="coderality">
    <HomePageContainer>
      {/* <img class="logo" alt='pic' src='../assets/coderality.jpg' /> */}
    </HomePageContainer>
    <div className="photo-box">
      <div className="moving-text">
        Where we turn Code into Reality.
     </div> 

      <div class="damian-wrapper">
        <Damian className='damian' />
      </div>
    </div>
    <Directory />
  </div>
);

export default HomePage;