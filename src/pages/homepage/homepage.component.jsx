import React from 'react';
import {Helmet} from 'react-helmet';
import './homepage.styles';
import './homepage.styles.scss';
import {
	LearnButton
} from './homepage.styles';


const HomePage = () => (
  	<div className="coderality">
    	<div>
			<head>
				<Helmet>	
					<meta charset="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<title>Coderality</title>
					<meta name="description" content="Coding tutorials from beginners to advanced. Learn about Front-End frameworks, Cloud technologies and much more." />		
				</Helmet>
			</head>
			<div className="photo-background">
				<div className="intro-message-title">
					We turn Code into Reality.
				</div>
			</div>
			<div>
				<img src="https://i.postimg.cc/y8FzsM34/homepage.png" alt="code" className="photo-background2" /> 
			<div>
				<div className="intro-message-description">
					Learn to code with us. We offer mentorship for beginners and free full-stack web developer courses. 
				</div>
				<LearnButton>Learn more</LearnButton>
			</div>	
		</div>
		<img src="https://i.postimg.cc/Cxfq523g/Untitled-4.png" alt="code" className="mobile-background" /> 
	</div>
</div>
);

export default HomePage;