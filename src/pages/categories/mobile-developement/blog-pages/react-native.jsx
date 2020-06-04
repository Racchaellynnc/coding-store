import React from 'react';
import './pages.scss';
import CustomButton from '../../../../components/buttons/buttons.component'
import {Link} from 'react-router-dom';

const MobileBlogReactNative = () => (
<div>        
    <div className='header'>
        <div className='text-heading'>
        </div>
        <CustomButton as={Link} to={'/mobile-blog'} > 
           Back to Mobile Developement Page
        </CustomButton>
    </div>
<div className='about'>            
    <div className='image-container'>

    </div>
    <div >
        <div className='blog-content'>
            <div className='blog-title'>
                Lets Create a React Native Application!
            </div>
            <div className='blog-intro'>
                React Native is an open source mobile application framework that was developed by facebook. One of it's greatest features
                is that it allows you to create IOS and Android applications at the same time.
            </div>
            <div className="blog-text">
                <div className="heading">
                Step One: Install Expo 
                </div>
                <div className="section">
                If you don't have node already installed, that needs to be done because you cannot use Expo without Node. . '
                </div>
                <div className='section'> Install expo and then create an expo project. 
                    <div className='code'>
                        npm install expo-cli --global
                    </div>
                    <div className="code">
                        expo init my-new-project<br></br>
                        cd my-new-project<br></br>
                        expo start
                    </div>
                    This is going to create an app and open up a metro bundler window in your browser. This will give you the option to Run a simulator on an android or IOS device.
                    To do this you need to install a Reality Converter for IOS and Android Studio for Android. I personally preffer to use my Iphone instead of a simulator.
                    </div>
                    <div className="small-intro">Viewing your App from your phone is super easy!</div>
                    <div className='section'>
                    You can download an App called Expo Client from the App Store. Its as easy as opening up your camera 
                    and scanning the QR code that you see on the metro bundler window. This will allow a notification to pop up and it will take you to your project.
                    </div> 
                

    </div>
        <div className="heading">
           
        </div>
        <div className="heading">
           
        </div>
        <div className="heading">
    
        </div>


        </div>
    </div>
</div>
</div>
)

export default MobileBlogReactNative;