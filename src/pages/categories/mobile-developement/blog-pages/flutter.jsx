import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../../../components/buttons/buttons.component'

const MobileBlogFlutter = () => (
<div>
        <div className='header'>
            <div className='text-heading'>
                
            </div>
            <CustomButton as={Link} to={'/mobile-blog'} > 
            Back to Mobile
            </CustomButton>
        </div>

<div className='about'>

        <div >
            <div className='textadfas'>Cominasdfasdfasdfag Soon</div>
        </div>
</div></div>
)

export default MobileBlogFlutter;