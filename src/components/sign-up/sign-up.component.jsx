import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../buttons/buttons.component';
import './sign-up.styles.scss';
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
            <div className="sign-up">
                <h2 className="title"><b>Don't have an account yet?</b> </h2>
                <span className="title">Sign up with your email</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
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
                </form>
            </div>
        );
    }

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(SignUp);