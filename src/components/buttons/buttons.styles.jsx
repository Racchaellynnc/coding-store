import styled, { css } from 'styled-components';

const buttonStyles = css`
background-color: white;
box-shadow: 3px 3px 3px 1px #78eb8786;
  color: #333;
  border: none;
  font-weight: 600 !important;
  text-decoration: none;
  padding-left: 15px;
  font-family: Arial, Helvetica, sans-serif;
  padding-right: 15px;
  border-radius: 38px;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: #385b7a;
  border-radius: 38px;
  font-weight: 600 !important;
  font-size: 14px;
  &:hover {
    background-color: #385B79;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #a4f2b4;
  color: #222;
  border-radius: 38px;
  border:none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
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
  height: 50px;
  border-radius: 38px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 10 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;