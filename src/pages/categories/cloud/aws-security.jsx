import React from 'react';
import '../pages.scss';
import CustomButton from '../../../components/buttons/buttons.component'
import {Link} from 'react-router-dom';

const AwsSecurity = () => (
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
    <div className='image-container4'>

    </div>
    <div >
        <div className='blog-content'>
            <div className='blog-title'>
                What is Encryption and why is it important?
            </div>
            <div className='blog-intro'>
                Encryption is the process of turning private information into a secret code. 
                This is important because it prevents MITM (Man in the Middle) attacks where hackers can access all of the data being sent across the internet.
                If the information is encrypted, they will not be able to understand it and it will be useless. There are a few different methods that are used to encrypt data.  
            </div>
            <div className="blog-text">
                <div className="heading">
                    Encryption in Flight (SSL/TSL)
                </div>
                <div className="section">
                    The most common way to protect your data is by using Secure Socket Layer/Transport Layer Security. This is when the data gets 
                    encrypted before being sent and then it is decrypted after it is recieved. SSL certificates help with encryption by using HTTPS. 
                    Anytime there is an option to choose between HTTPS or HTTP, you will know should know that HTTPS is going to be safe because it
                    encrypts your data before it is sent.
                </div>
                <div className="heading">
                    Encryption at Rest / Server Side Encryption
                </div>
                <div className='section'> 
                    Server side encrytion is when data is encrypted after it is recieved by the server. You can use this method by requesting S3 to encrypt objects 
                    before saving it in its data centers and then decrypt them when you download the objects.
                </div>
                <div className="heading">
                    Client Side Encryption
                </div>
                <div className='section'> 
                    As the name suggests, client side encryption is encrypted by the client and not by the server. The encrypted data is then uploaded onto S3 and the client manages the encryption process and 
                    the encryption key.
                </div>
            </div>
        </div>
    </div>
</div>
</div>
)

export default AwsSecurity;