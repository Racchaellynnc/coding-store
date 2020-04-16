import React from 'react';
import './about.styles.scss';

const AboutPage = () => (
    <div className='about'>
        <div className='text'> Here at Coderality we focus on teaching Coders the basics of JavaScript, React, Vue, and VR by offering high quality tutorials and courses that are designed for people who have no prior knowledge of programming. Lets get started! </div>
        <div className='signup'>Sign up to get a free shirt!</div>
            <form action="https://getsimpleform.com/messages?form_api_token=b8895f4d6999fd03eb1d4bbfeb5dc4a8" method="post">
            <input type='hidden' name='redirect_to' value='https://coderality.com/ThankYou'/>
            <label for="fname">Your Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Type your full name please."/>

            <label for="lname">Your Email</label>
            <input type="text" id="email" name="email" placeholder="Your email goes here."/>

            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="We appriciate your feedback" ></textarea>

            <button type="submit" class="btn">Submit</button>
            </form> 
    </div>
)

export default AboutPage;