import React from 'react';

import FormInput from '../form-input/form-input.component';
import Buttons from '../buttons/buttons.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-in'>
				<head>
					<meta charset="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<title>Coderality Sign In</title>
					<meta name="description" content="Sign up with a free account where you can stay up to date with our latest blog posts." />		
			</head>
				<h2 className="title"><b>Welcome Back</b> </h2>
				<span className="title">Sign in with your email or google account</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						class='form-input'
						name='email'
						type='email'
						handleChange={this.handleChange}
						value={this.state.email}
						label='email'
						required
					/>
					<FormInput
						name='password'
						type='password'
						value={this.state.password}
						handleChange={this.handleChange}
						label='password'
						required
					/>
					<div className='buttons'>
						<Buttons type='submit'> Sign in </Buttons>
						<Buttons onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</Buttons>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;