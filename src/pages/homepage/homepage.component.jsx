import React from 'react';
import Directory from '../../components/directory/directory.component';
import CoderalityDefinition from '../../components/coderality-definition/coderality';
import {ReactComponent as BackgroundSvg} from '../../assets/Page1.svg';
import {ReactComponent as BackgroundSvg2} from '../../assets/Page2-2.svg';
import {ReactComponent as BackgroundSvgMobile} from '../../assets/mobile-page.svg';
import './homepage.styles';
import './homepage.styles.scss';

import {
	  LearnButton,
	  OptionsBox
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
        		{/* put graphic here */}
      		</div> 
    	</div>
		<div>
			<BackgroundSvgMobile className="mobile-background" />
			<div className="intro-message-mobile">
				Where We Turn Code Into Reality
			</div> 
		</div>
		<OptionsBox className="photo-box">
			<div className="options">
				<img src="https://i.postimg.cc/05wRK7jJ/brain-1.png" className="option-photo" alt="brain"></img>
				<div className="option-title">
					Brain Optimization
				</div>
				<div className="option-description">
					Realizing the only competition you are facing is your own body and mind is the first step to becoming successful. Find out more about the best ways
					to stay focused. 
				</div>
				<LearnButton>Learn More</LearnButton>
			</div>
			<div className="options">
				<img src="https://i.postimg.cc/tJ1wHZvP/code.png" className="option-photo" alt="code"></img>
				<div className="option-title">
					See what we've created
				</div>
				<div className="option-description">
					Come see a few of the awesome projects we've built and consider joining us on our journey! 
				</div>
				<LearnButton>Learn More</LearnButton>
			</div>
			<div className="options">
				<img src="https://i.postimg.cc/nzjFzzCK/face.png" className="option-photo" alt="resume"></img>
				<div className="option-title">
					We are Hiring
				</div>
				<div className="option-description">
					You don't need to have a lot of experience, just the basics and the willingness to learn. We are hiring Web Developers and Graphic Designers.
				</div>
				<LearnButton>Learn More</LearnButton>
			</div>
		</OptionsBox>
	<CoderalityDefinition ></CoderalityDefinition>
	<Directory />		
	</div>
);

export default HomePage;