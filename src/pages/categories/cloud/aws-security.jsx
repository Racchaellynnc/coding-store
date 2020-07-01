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
                    Server side encryption is when data is encrypted after it is received by the server. You can use this method by requesting S3 to encrypt your objects 
                    before saving it in its data centers and then decrypt them when you download the objects.
                </div>
                <div className="heading">
                    Client Side Encryption
                </div>
                <div className='section'> 
                    As the name suggests, client side encryption is encrypted by the client and not by the server. The encrypted data is then uploaded onto S3 and the client manages the encryption process and 
                    the encryption key. The receiving client will then need to decrypt the key.
                </div>
                <div className='blog-title'>
                    KMS for Encryption
                </div>
                <div className="heading">
                    What is KMS? 
                </div>
                <div className='section'> 
                    KMS stands for Key Management System and anytime your use encryption with AWS it will most likely be using KMS. It is fully integrated with IAM and easily integrates 
                    with EBS, S3, SSM and other AWS services. Anytime you need to share sensitive information like database passwords, private keys, ssl certificates or credentials It is a good idea to use KMS.
                    It is a best practice to never store sensitive information in plaintext. Encrypted data can be saved in your code with environment variables. KMS can only encrypt data under 4KB.
                    If your data is over 4KB you should use envelope encryption. If you want to give somebody access to KMS you need to make sure the Key Policy allows users and that the IAM Policy can make API calls.
                    KMS keys are bound to specific regions so if you want to transfer an EBS volume across regions you have to take a snapshot of the volume and copy it over to the new region. Then KMS will re-encrypt the 
                    snapshot with a new KMS key. You cannot control access to your KMS without a key policy. This is created by default if you don't specify if yourself and it will give access to the root user.
                </div>
                <div className="heading">
                   Custom Master Keys (CMK) 
                </div>
                <div className='section'> 
                    There are two types of CMK in AWS. 
                </div>
                <div className='section'> 
                    Symmetric(AES-256 keys): This is a single encryption used to encrypt and decrypt and it is most commonly used.
                    They are necessary if you are using Envelope Encryption. You will never get access to a symmetric key while it is un-encrypted. 
                    You have to call to the API to use it.
                </div>
                <div className='section'> 
                    Asymmetric(RSA and ECC key pairs): There are two keys, the public key for encryption and the private key for decryption. The use for 
                    this type of CMK is for someone who is encrypting outside of AWS and they can't access the AWS API.
                </div>
                <div className='section'> 
                    The Encryption SDK implements envelope encryption. It also exists as a CLI tool and provides implementation for Java, Python, C, and JavaScript.
                    One of the cool features that it has is Data Caching. This is useful if you are making a lot of calls to KMS because it re-uses 
                    data keys instead of making new ones for each encryption. To access this feature you can use the API call LocalCryptoMaterialsCache and specify the max age, max bytes, and max number of messages.
                    <ul>
                       <li>KMS Symmetric APIS:</li> 
                       <li>Encrypt</li> 
                       <li>GenerateDataKey </li> 
                       <li>GenerateDataKeyWithoutPlaintext</li> 
                       <li>Decrypt</li> 
                       <li>GenerateRandomNumber</li> 
                       
                    </ul>
                </div>

            </div>
        </div>
    </div>
</div>
</div>
)

export default AwsSecurity;