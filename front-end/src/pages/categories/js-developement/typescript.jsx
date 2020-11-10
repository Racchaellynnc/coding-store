import React from 'react';
import CustomButton from '../../../components/buttons/buttons.component'
import {Link} from 'react-router-dom';

const TypeScriptBlogPage = () => (
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
            <div className='image-container6'>
            </div>
        </div>
    </div>
)

export default TypeScriptBlogPage;