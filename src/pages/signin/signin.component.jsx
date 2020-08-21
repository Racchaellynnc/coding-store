import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
	<div className='sign-in-and-sign-up'>
		<SignIn className="signin" rel="nofollow" />
		<SignUp rel="nofollow" />
	</div>
);

export default SignInAndSignUpPage;