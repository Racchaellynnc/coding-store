import React from 'react';
import '../../pages.scss';
import CustomButton from '../../../../components/buttons/buttons.component'
import {Link} from 'react-router-dom';

const MobileBlogReactNative = () => (
<div>        
    <div className='header'>
        <div className='text-heading'>
        </div>
        <div className="button-wrapper">
            <CustomButton as={Link} to={'/blog'} > 
            Back to Blog Page
            </CustomButton>
        </div>
    </div>
<div className='about-wrapper'>            
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
                    <div className="heading">
                        Step Two: Install a Reality Convertor or use Expo on your phone.
                    </div>
                    <div className="small-intro">Viewing your App from your phone is super easy!</div>
                    <div className='section'>
                        You can download an App called Expo Client from the App Store. After it is installed, you can simply open up your camera 
                        and scan the QR code that you see on the metro bundler window. Expo will allow a notification to pop up and it will redirect you to your project.
                    </div> 
                </div>
                <div className="heading">
                    Step Three:
                </div>
            </div>
        </div>
    </div>
</div>
)

export default MobileBlogReactNative;