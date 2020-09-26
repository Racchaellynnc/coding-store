import React from 'react';
import '../pages.scss';
import CustomButton from '../../../components/buttons/buttons.component'
import {Link} from 'react-router-dom';

const Beanstalk = () => (
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
    <div className='image-container5'>
    </div>
    <div >
        <div className='blog-content'>
            <div className='blog-title'>
                What is Elastic Beanstalk and what is it good for?
            </div>
        </div>
    </div>
</div>
</div>
)

export default Beanstalk;