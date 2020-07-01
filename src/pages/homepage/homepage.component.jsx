import React from 'react';
import Directory from '../../components/directory/directory.component';
import {ReactComponent as BackgroundSvg} from '../../assets/Page1.svg';
import {ReactComponent as BackgroundSvg2} from '../../assets/Page2-2.svg';
import {ReactComponent as BackgroundSvgMobile} from '../../assets/mobile-page.svg';
import './homepage.styles';
import './homepage.styles.scss';

import {
  LearnButton
} from './homepage.styles';

const HomePage = () => (
  <div className="coderality">
    <div>
      <BackgroundSvg className="photo-background" />
      <div className="intro-message">
        Where We Turn Code Into Reality
      </div> 
    </div>
    <div>
      <BackgroundSvg2 className="photo-background2" />
      <div className="intro-message">
      </div> 
    </div>

    <div>
      <BackgroundSvgMobile className="mobile-background" />
      <div className="intro-message-mobile">
        Where We Turn Code Into Reality
      </div> 
    </div>
    <div className="photo-box">
      <div className="options">
        <img src="https://i.postimg.cc/05wRK7jJ/brain-1.png" className="option-photo" alt="brain"></img>
        <div className="option-title">
          Brain Optimization
        </div>
        <div className="option-description">
          Realizing the only competition you are facing is your own body and mind is the first step to becoming successful. Find out more about my journey and how 
          I went from having low self esteem, no confidence, and a depressed mentality to finding my full potential.
        </div>
        <LearnButton>Learn More</LearnButton>
      </div>
      <div className="options">
        <img src="https://i.postimg.cc/tJ1wHZvP/code.png" className="option-photo" alt="code"></img>
        <div className="option-title">
          See what we've created
        </div>
        <div className="option-description">
          We want everyone to find inspiration in writing code. There are many ways to have fun while learning. We want to show how great it can be. Come see a few of the awesome projects we have built and consider joining us on our journey! 
        </div>
        <LearnButton>Learn More</LearnButton>
      </div>
      <div className="options">
        <img src="https://i.postimg.cc/nzjFzzCK/face.png" className="option-photo" alt="resume"></img>
        <div className="option-title">
          We are Hiring
        </div>
        <div className="option-description">
          We are hiring code tutors and code mentors. You don't need to have a lot of experience, just the basics and the willingness to learn. If you tutor someone and they are charged $50/hr., you will receive $40/hr. (Our business policy donates 20% of ALL profits to 
          kids in other countries.) 
        </div>
        <LearnButton>Learn More</LearnButton>
      </div>
    </div>
    <Directory />
  </div>
);

export default HomePage;