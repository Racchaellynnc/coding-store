import styled from 'styled-components';
// import { Link } from 'react-router-dom';


export const FooterContainer = styled.div`
    height: 90px;
    background-color: #003559;
    width: 100%;
    padding-top: 0px;
    bottom: 0;
    margin-top: 50px !important;
    display: flex;
    flex-direction: row;
    text-align: center;
  	justify-content: space-evenly;
    margin: auto;
    margin-bottom: -30px;
    position: relative;
  	@media screen and (max-width: 800px) {
        padding: 10px;
        height: 333px;
        width: 100%;
        text-align: left;
        flex-direction: column;
    	font-size: 14px;
  	}
`;

export const LinkOptions = styled.div`
  	width: 100%;
    position: relative;
    top: 0;
    color: #78d188;
    font-weight: 500;
    vertical-align: top;
    flex-direction: column;
  	display: flex;
    align-items: center;
    padding: 15px;
  	@media screen and (max-width: 800px) {
        width: 100%;
        margin-bottom: 10px;
        margin-top: -25px;
        text-align: left;
  	}
`;
export const LinkOptionsOption = styled.div`
    position: relative;
    width: 100%;
    color: white;
    float: left;
    font-weight: 300;
    font-size: 12px;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
  	align-items: center;
  	@media screen and (max-width: 800px) {
        width: 50%;
        text-align: left;
  	}
`;