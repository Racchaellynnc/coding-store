import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const HeaderContainer = styled.div`
  	height: 70px;
  	margin-top: -0px;
  	width: 100%;
  	display: flex;
  	justify-content: space-between;
  	margin-bottom: 25px;
  	@media screen and (max-width: 800px) {
    	padding: 10px;
    	margin-bottom: -10px;
    	font-size: 10px;
  	}
`;

export const LogoContainer = styled(Link)`
	width: 555px;
	padding-top: 10px;
  	padding-left: 25px;
	margin-top: -54px; 
		img{
			width:277px;
		}  
  	@media screen and (max-width: 800px) {
    	display: none;
  	}
`;

export const OptionsContainer = styled.div`
  	width: 50%;
  	height: 100%;
  	display: flex;
  	align-items: center;
  	margin-top: -50px;
  	justify-content: flex-end;
  	@media screen and (max-width: 800px) {
    	width: 100%;
    	margin-top: -25px;
  	}
`;

export const OptionLink = styled(Link)`
  	padding: 10px 15px;
  	cursor: pointer;
  	font-weight: 400;
  	background-color: white;
  	border-radius: 14pc;
  	margin: 5px;
  	width: 105px;
  	text-align: center;
  	font-size: 16px;
  	text-decoration: none;
  	color: #385B7A;
    :hover{
      	background-color: #78d188;
		  color: white;
		  font-weight: 700;
    }
  	@media screen and (max-width: 800px) {
    	display: none;
  	}
`;