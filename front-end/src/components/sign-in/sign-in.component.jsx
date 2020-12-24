import React, {useState} from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import Buttons from '../buttons/buttons.component';
import { SignInTitle, Subtitle, Form, SignInForm } from './sign-in.styles';
import { FadeInUp} from 'animate-css-styled-components';
import {
	googleSignInStart,
	emailSignInStart
  } from '../../redux/user/user.actions';
  
  const SignIn = ({emailSignInStart, googleSignInStart}) => {
	const [userCredentials, setCredentials ] = useState({ email: '', password: '' })

	const { email, password } = userCredentials;
	const handleSubmit = async event => {
	  event.preventDefault();
	  emailSignInStart(email, password);
	};
  
	const handleChange = event => {
	  const { value, name } = event.target;
	  setCredentials({ ...userCredentials,  [name]: value });
	};
		return (
			<SignInForm className="sign-in">
				<FadeInUp>
               		<SignInTitle className="sign-in-title" > <b>Welcome Back!</b> </SignInTitle>
            		<Subtitle> SIGN IN</Subtitle>
            	</FadeInUp>
				
				<Form className="sign-in-form" onSubmit={handleSubmit}>
					<FormInput
						className='form-input'
						name='email'
						type='email'
						handleChange={handleChange}
						value={email}
						label='email'
						required
					/>
					<FormInput
						name='password'
						type='password'
						value={password}
						handleChange={handleChange}
						label='password'
						required
					/>
					<div className='buttons'>
						<Buttons type='submit'> Sign in </Buttons>
						<Buttons type="button" onClick={googleSignInStart} isGoogleSignIn>
							Sign in with Google
						</Buttons>
					</div>
				</Form>
			</SignInForm>
		);
	}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
	  dispatch(emailSignInStart({ email, password }))
  });
  
  export default connect(
	null,
	mapDispatchToProps
  )(SignIn);