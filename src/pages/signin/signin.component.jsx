import React from 'react';
import {Helmet} from 'react-helmet';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
	<div className='sign-in-and-sign-up'>
		<Helmet >
			<title>Coderality Sign In</title>
			<meta name="description" content="Sign up with a free account where you can stay up to date with our latest blog posts." />	
		</Helmet>
		<SignIn />
		<SignUp />
	</div>
);

export default SignInAndSignUpPage;