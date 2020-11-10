import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  	height: 70px;
  	margin-top: 20px;
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
	margin-top: -30px;
  	display: flex;
  	align-items: center;
  	justify-content: flex-end;
  	@media screen and (max-width: 800px) {
    	width: 100%;
    	margin-top: -25px;
  	}
`;

export const OptionLink = styled(Link)`
  	padding: 10px 15px;
  	cursor: pointer;
  	font-weight: 500;
  	background-color: white;
  	border-radius: 14pc;
  	margin: 5px;
  	width: 105px;
  	text-align: center;
  	font-size: 15px;
  	text-decoration: none;
  	color: #2871A4;
    :hover{
      	background-color: #2871A4;
		  color: white;
		  font-weight: 600;
    }
  	@media screen and (max-width: 800px) {
    	display: none;
  	}
`;