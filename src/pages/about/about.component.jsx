import React from 'react';
import './about.styles.scss';
import CustomButton from '../../components/buttons/buttons.component'

const AboutPage = () => (
    <div className='about'>
        <div className='text'>  
            At Coderality we focus on teaching Coders the basics of JavaScript, HTML5, CSS3, React.JS, Vue.JS and Node.JS by offering 1:1 tutoring.
            In the future, we plan to have Full-Stack Developing Courses and Free Tutorials. 
            We are focusing on those who have no prior knowledge of programming. Lets get started! 
        </div>
        <form action="https://getsimpleform.com/messages?form_api_token=b8895f4d6999fd03eb1d4bbfeb5dc4a8" method="post">
            <input type='hidden' name='redirect_to' value='https://coderality.com/ThankYou'/>
            <label for="fname">Your Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Type your full name please."/>

            <label for="lname">Your Email</label>
            <input type="text" id="email" name="email" placeholder="Your email goes here."/>

            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="We appriciate your feedback" ></textarea>

            <CustomButton type="submit" class="btn">Submit</CustomButton>
        </form> 
    </div>
)

export default AboutPage;