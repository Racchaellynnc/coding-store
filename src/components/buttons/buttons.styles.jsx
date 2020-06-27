import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #78EB88;
  color: black;
  border: none;
  text-decoration: none;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 38px;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: #385B7A;
  color: #7DF48A;
  font-weight: 300;
  font-size: 18px;
  &:hover {
    background-color: black;
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