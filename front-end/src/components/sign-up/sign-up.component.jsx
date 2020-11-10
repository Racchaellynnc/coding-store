import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../buttons/buttons.component';
import { Title, Subtitle, Form, SignUpForm } from './sign-up.styles';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';


const SignUp = ({signUpStart}) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { email, displayName, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
      if  (password !== confirmPassword ) {
        alert("passwords don't match");
        return;
      }
      signUpStart({ displayName, email, password });
    };
  
  const handleChange = event => {
    const { name, value } = event.target;
      setUserCredentials({ ...userCredentials, [name]: value });
    };
        return(     
          <SignUpForm className="sign-up">
            <Title ><b>Don't have an account yet?</b> </Title>
            <Subtitle >SIGN UP</Subtitle>
            <Form className="sign-up-form" onSubmit={handleSubmit}>
              <FormInput
                type="text"
                name="displayName"
                value={displayName}
                onChange={handleChange}
                label="Display Name"
                required
              />
                    
              <FormInput
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                label="Email"
                required
              />
                                       
              <FormInput
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                label="Password"
                required
              />
                                       
              <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                label="Confirm Password"
                required
              />
            <CustomButton type='submit'>SIGN UP</CustomButton>
          </Form>
        </SignUpForm>
      );
    }

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(SignUp);