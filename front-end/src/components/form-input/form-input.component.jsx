import React from 'react';
import './form-input.styles.scss';
import { FormInputs, FormGroup, FormLabel } from './form-input.styles'

const FormInput = ({ handleChange, label, ...otherProps }) => (
  	<FormGroup className='group'>
    	<FormInputs className='form-input' onChange={handleChange} {...otherProps} />
    	{label ? (
     		<FormLabel
						className={`${
						otherProps.value.length ? 'shrink' : ''
						} form-input-label`}
      		>
        	{label}
      	</FormLabel>
    	) : null}
  	</FormGroup>
);

export default FormInput;