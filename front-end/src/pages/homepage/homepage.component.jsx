import React from 'react';
import {Helmet} from 'react-helmet';
import './homepage.styles';
import FadeIn from '../../components/animations/fade-in';
import { FadeInUp } from 'animate-css-styled-components';

import Footer from '../../components/footer/footer';
import {
	LearnButton,
	IntroMessageTitle,
	IntroMessageDescription,
	TitleWrapper,
	PhotoBackground,
	HomepageContainer,
	MobileBackground,
	MainContent,
	PhotoWrapper, 
	LearnLink
} from './homepage.styles';


const HomePage = () => (
  <HomepageContainer>		
		<Helmet>	
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>Coderality</title>
			<meta name="description" content="Coding tutorials from beginners to advanced. Learn about Front-End frameworks, Cloud technologies and much more." />	
		</Helmet>	
		<MainContent>
			<TitleWrapper className="photo-background">
				<FadeInUp duration="0.8s" delay="1s">
					<FadeIn duration="2.8s" delay="0.2s">
						<IntroMessageTitle>
							TURNING CODE INTO REALITY
						</IntroMessageTitle>
					</FadeIn>
					<FadeIn duration="3.8s" delay="0.4s">
						<IntroMessageDescription>
							We want to help everyone understand the fundamentals of programming. 
							Learn to code with us, read our latest blog posts, join our tutoring program, or buy a T-shirt.
						</IntroMessageDescription>
					</FadeIn>
					<FadeIn duration="4.8s" delay="1s">
						<LearnLink to='/about' >
							<LearnButton>Learn more</LearnButton>
						</LearnLink>
					</FadeIn>	
				</FadeInUp>
		
			</TitleWrapper>
			<PhotoWrapper>
				<PhotoBackground src="https://i.postimg.cc/y8FzsM34/homepage.png" alt="code" /> 
			</PhotoWrapper>
		</MainContent>	
		<MobileBackground src="https://i.postimg.cc/Cxfq523g/Untitled-4.png" alt="code" className="mobile-background" /> 
		<Footer className="footer"/>
	</HomepageContainer>
);

export default HomePage;