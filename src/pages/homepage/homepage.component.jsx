import React from 'react';
import Directory from '../../components/directory/directory.component';
import {ReactComponent as Damian} from '../../assets/damian444.svg';
import {ReactComponent as BackgroundSvg} from '../../assets/Page1.svg';
import {ReactComponent as BackgroundSvg2} from '../../assets/Page2.svg';
import {ReactComponent as BackgroundSvg3} from '../../assets/Page3.svg';
import './homepage.styles.scss';

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
      <BackgroundSvg3 className="photo-background3" />
      <div className="intro-message">
      </div> 
    </div>
    <div className="photo-box">
      {/* <div className="photo-box1" >
        <div className="moving-text-1">
          Co&middot;der&middot;al&middot;ity <br></br>
          <div className="small-text">&#47;Code-er&#47;al-i-tee&#47;</div>
          <div className="smaller-text">noun</div>
        </div> 
        <div className="optimization-wrapper">
        </div>
      </div>
        <div className="photo-box2">
          {/* <div className="moving-text">
            Learn about the Latest VR and AR tech.
          </div> 
          <div className="damian-wrapper">
            <Damian className='damian' />
          </div> */}
          
        {/* </div>   */}
    </div>
    <Directory />
  </div>
);

export default HomePage;