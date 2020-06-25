import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #355C7D;
  color: white;
  border: none;
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
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border-radius: 38px;
  border:none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 177px;
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