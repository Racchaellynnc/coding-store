import React from 'react';
import './about.styles.scss';
import MapContainer from '../../components/google-map/google-map';
import CustomButton from '../../components/buttons/buttons.component';
import { Helmet } from 'react-helmet';


const AboutPage = () => (
    <div className='about-container'>
        <Helmet>
            <title>Coderality</title>
            <meta name="About Us" content="Having fun while learning together is our main priority! We hope to inspire people of all ages to have a code mentality." />
            <meta name="theme-color" content="#008f68" />
        </Helmet>
        <div class="about-text-wrapper">
            <div className="about-text-photo"></div>
            <div className="about-text">
                <section className="our-mission">
                    <div className="title about-title">Our Mission</div>
                    <div className="about-us">
                        Having fun while learning together is our main priority! We hope to inspire people of all ages to have a code mentality. We want to give everyone a fun, motivational and exciting experience.
                        We will guide you in your journey to creating games, portfolios, and other types of websites. Sign up for as little as $5 a month and 
                        you can attend our monthly virtual meetings where we will expand our knowledge together. We offer 1:1 tutoring for 
                        kids (ages 8 and up) where we will create awesome games and graphics together. 
                    </div>
                </section>
                <section className="about-section">
                    <div className="title about-title">About Us</div>
                        <div className="about-us">
                            We are the just a small family of 5 with the last name of Coder. All of us love to write code ( even our 1 year old baby writes giberish code ). 
                            Our main focus as a family is to make the world a better place. 20% of proceeds from our business will be donated to kids in other 
                            countries who can't afford to get education. 
                        </div>
                </section>
            </div>
        </div>

        <div className='our-team'>  
            <div className="team-header">
                Our Tutors
            </div>
            <div className="teacher-wrapper">
                <div className="team-members">
                    <div className="img-wrapper">
                        <img src="https://i.postimg.cc/Jh7cd4R8/zxcvzxc.png" alt="team-photo" className="rachael" ></img> 
                        <div className="member-name">Rachael Coder</div>
                        <div className="member-title">CEO/Founder</div>
                    </div>
                </div>
            </div>
            <div className="team-header">
                Our Team
            </div>
            <div className="team-wrapper">
                <div className="img-wrapper">
                    <div className="team-members">
                        <img src="https://i.postimg.cc/GmyjsSq0/IMG-2408.png" alt="team-photo" className="rachael" ></img>
                        <div className="member-name">Miguel Coder</div>
                        <div className="member-title">Code Creator</div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <div className="team-members">
                        <img src="https://i.postimg.cc/MKzVXfpR/IMG-2443.png" alt="team-photo" className="rachael" ></img>
                        <div className="member-name">Ruby Coder</div>
                        <div className="member-title">Code Creator</div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <div className="team-members">
                        <img src="https://i.postimg.cc/cJ7MFgpX/IMG-2410.png" alt="team-photo" className="rachael" ></img>
                        <div className="member-name">Damian Coder</div>
                        <div className="member-title">Game Developer</div>
                    </div>
                </div>
            </div>
        </div>
    <div className="form-wrapper">
        <div className="form-title">
            Get in touch with us 
        </div>
        <form action="https://getsimpleform.com/messages?form_api_token=b8895f4d6999fd03eb1d4bbfeb5dc4a8" method="post">
            <input type='hidden' name='redirect_to' value='https://coderality.com/ThankYou'/>
            <label className="form-label" for="fname">Your Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Type your full name please."/>

            <label className="form-label" for="lname">Your Email</label>
            <input type="text" id="email" name="email" placeholder="Your email goes here."/>

            <label className="form-label" for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="We appriciate your feedback" ></textarea>

            <CustomButton type="submit" class="btn">Submit</CustomButton>
        </form> 
    </div>   
    <div className="form-title">
               Our Location
        </div>
    <div className="map-wrapper">
  
     
     <MapContainer className="map"/>
    </div>
</div> 
)

export default AboutPage;