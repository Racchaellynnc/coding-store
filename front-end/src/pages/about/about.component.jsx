import React from 'react';
import './about.styles.scss';
import Footer from '../../components/footer/footer';
import MapContainer from '../../components/google-map/google-map';
import CustomButton from '../../components/buttons/buttons.component';
import { Helmet } from 'react-helmet';
import { FadeInUp } from 'animate-css-styled-components';
// import Skills from '../../components/skills/skills';


const AboutPage = () => (
  <div className='about-container'>
    <div className="about-text-wrapper">
      <Helmet>
        <title>About Coderality</title>
        <meta name="description" content="We hope to inspire people of all ages to have a code mentality." />
      </Helmet>
        <div className="intro-container"></div>
        <div className="about-text">
          <section className="our-mission">
            <FadeInUp duration="0.8s" delay="0.2s" >
              <div className="title">OUR MISSION</div>
            </FadeInUp>
          
              <div className="about-us">
              Having fun while learning together is our main priority! We hope to inspire people of all ages to have a code mentality. We want to give everyone a fun, motivational and exciting experience.
              We will guide you in your journey to creating games, mobile applications, websites, or any other idea that you have in mind. Sign up and 
              you can attend our monthly virtual meetings where we will expand our knowledge together. We offer 1:1 tutoring for 
              kids (ages 8 and up) where we will create awesome games and graphics together. 
            </div>
           
            
          </section>
          <section className="about-section">
            <FadeInUp duration="2.8s" delay="0.2s" >
              <div className="title">ABOUT US</div>
            </FadeInUp>
            
            <div className="about-us">
              We are a just a small family with the last name Coder.
              Our main focus as a family is to make the world a better place. 20% of proceeds from our business will be donated to charity. 
            </div>
          </section>
        </div>
      </div>
      <FadeInUp duration="2.8s" delay="0.2s" >
        <div className="title">
        OUR LOCATION
      </div>
      </FadeInUp>
      
    <div className="map-wrapper">
    	<MapContainer className="map"/>
    </div>
    <div className="form-wrapper">
    <FadeInUp duration="2.8s" delay="0.2s" >
    	<div className="title">
        GET IN TOUCH WITH US
    	</div>
    </FadeInUp>
    	<form action="https://getsimpleform.com/messages?form_api_token=b8895f4d6999fd03eb1d4bbfeb5dc4a8" method="post">
        <input type='hidden' name='redirect_to' value='https://coderality.com'/>
        <label className="form-label" for="fname">Your Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Type your full name please."/>
        <label className="form-label" for="lname">Your Email</label>
        <input type="text" id="email" name="email" placeholder="Your email goes here."/>
        <label className="form-label" for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="We appriciate your feedback" ></textarea>
        <CustomButton type="submit" class="btn">Submit</CustomButton>
      </form> 
    </div>   
  <Footer className="footer"/>
</div> 
)

export default AboutPage;