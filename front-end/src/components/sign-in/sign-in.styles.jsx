import styled from 'styled-components';

export const SignInTitle = styled.h2`
  	width: 100%;
    display: flex;
    color: #2871a4;
	text-align: center !important;
    margin: auto;
    font-size: 28px;
    justify-content: center;
  	margin-bottom: 25px;
  	@media screen and (max-width: 800px) {
    	padding: 10px;
    	margin-bottom: 30px;
  	}
`;



export const Subtitle = styled.div`
    text-align: center;
    margin: auto;
    width: 100%;
    align-items: center;
    font-size: 22px;
    justify-content: center;
    padding-bottom: 30px;
    color: #2871a4;
`;

export const SignInForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Form = styled.form`
    width: 70%;
    color: white;
    padding: 30px;
    background-color: #8E8E93;
    color: #333;
    box-shadow: 3px 3px 18px -8px #8b8b8b;
`;