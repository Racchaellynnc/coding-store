import React from 'react';
import {Helmet} from 'react-helmet';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
	<div className='sign-in-and-sign-up'>
		<head>
			<Helmet >
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Coderality Sign In</title>
				<meta name="description" content="Sign in have complete access to our shop and latest blogs." />		
			</Helmet>
		</head>
		<SignIn className="signin" rel="nofollow" />
		<SignUp rel="nofollow" />
	</div>
);

export default SignInAndSignUpPage;