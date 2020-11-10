import styled from 'styled-components'
import CustomButton from '../../components/buttons/buttons.component';
import { Link } from 'react-router-dom';

export const HomepageContainer = styled.div`
	width:	100% !important;
	margin: 0px !important;
`

export const LearnButton = styled(CustomButton)`
  	font-weight: 400;
  	background-color: #78eb88;
	color: white;
	margin: auto;
	text-style: none;
	justify-content: center;
	background-image: linear-gradient(to right,#2871A4 15%,#28A499 85%);
	width: 17%;
		  @media screen and (max-width: 800px) {
			display: block;
			opacity: 0.9;
			justify-content: center;
			position: relative;
			margin: auto;
  		}
`;
export const IntroMessageTitle = styled.div`
	letter-spacing: 1px;
	font-weight: 500;
	width: 100%;
	text-align: center;
	color: #2871a4;
	font-family: sans-serif;
	font-size: 24px;
	// -webkit-margin-before: 555px;
	// -webkit-margin-after: -555px;
	@media screen and (max-width: 800px) {
		justify-content: center;
		padding: 0px;
		right: 20;
		position: relative;
		margin-top: 0px;
		padding-bottom: 10px ;
		text-align: center;
		justify-content: center;
	}
`;

export const IntroMessageDescription = styled.div`
	width: 80%;
	color:#333;
	padding: 50px;
	margin-left: 30px;
	font-size: 18px;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	@media screen and (max-width: 800px) {
		font-size: 20px;
		padding: 10px;
		padding-top: 10px;
		position: relative;
		width: 90% !important;
		margin: auto !important;
	}
`;

export const TitleWrapper = styled.div`
	display: flex;
	height: 100vh;
	flex-direction: column;
	width: 50%;
	transition: all 0.8s ease;
	justify-content: center;
	@media screen and (max-width: 800px) {
		flex-direction: column;
		width: 90%;
		padding-top: 100px;
		margin: auto;
		text-align: center;
	}
`

export const PhotoBackground = styled.img`
	display: flex;
	flex-direction: row;
	width: 50%;
	height: 150vh;
	border-radius: 4px;
	transition: all 0.8s ease;
	float: right;
	@media screen and (max-width: 800px) {
		display: none;
	}
`
export const MobileBackground = styled.img`
	display: none;
	@media screen and (max-width: 800px) {
		display: flex;
		margin-top: 277px;
		width: 100%;
		bottom: 0;
	}
`
export const MainContent = styled.div`
	display: flex;
	flex-direction: row;
`
export const PhotoWrapper = styled.div`
	margin-top: -200px;
	width: 100%;
	position: absolute;
	left: 0px;
	top: 0px;
	z-index: -1;
`
export const LearnLink = styled(Link)`
	text-decoration: none;

`
