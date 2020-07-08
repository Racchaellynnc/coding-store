import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: white;
  color: #333;
  border: none;
  font-weight: 400 !important;
  text-decoration: none;
  padding-left: 15px;
  font-family: Arial, Helvetica, sans-serif;
  padding-right: 15px;
  border-radius: 38px;
  &:hover {
    background-color: #78EB88;
    color: #333;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: #385b7a;
  border-radius: 38px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600 !important;
  font-size: 14px;
  &:hover {
    background-color: #78eb88;
    color: #333;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-image: linear-gradient(to right,#7df489 -22%,#2871a4 125%);
  color: white;
  font-size: 14px;
  width: 50%;
  border-radius: 38px;
  border:none;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
   color: #111
   background-image: linear-gradient(to right,#7df489ad -22%,#2871a4ad 125%);
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 155px;
  width: auto;
  margin: auto;
  font-family: Arial, Helvetica, sans-serif;
  height: 50px;
  border-radius: 38px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 10 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: 200 !important;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;