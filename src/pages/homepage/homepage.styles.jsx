import styled from 'styled-components'
import CustomButton from '../../components/buttons/buttons.component';

export const LearnButton = styled(CustomButton)`
  	font-weight: 400;
  	background-color: #78eb88;
	margin-top: 447px;
	color: white;
	background-image: linear-gradient(to right,#7df489 -22%,#2871a4 125%);
	position: absolute;
	width: 10%;
	margin-left: 144px;
  	margin-bottom: 30px;
  		@media screen and (max-width: 1100px) {
			display: block;
			opacity: 0.9;
			margin-left: 20px;
			margin-bottom: 20px;
		  }
		  @media screen and (max-width: 800px) {
			display: block;
			opacity: 0.9;
			position: relative;
			margin: auto;
			margin-top: 5px;
			margin: auto;
  		}
`;
export const OptionsBox = styled.div`
	margin-top: 0px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 90%;
	border-radius: 4px;
	transition: all 0.8s ease;
	margin: auto;
	justify-content: center;
	margin-bottom: 88px;
  @media screen and (max-width: 800px) { 
	   flex-direction: column;
	   margin: auto;
	   justify-content: center;
	} 
	.options{
		margin: 15px;
		margin-bottom: 40px;
	  }
	  .option-description{  
		padding: 15px;
	  }
 }
`;