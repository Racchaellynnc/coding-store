import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const FooterContainer = styled.div`
    height: 111px;
    border-top: 0.5px solid #c7c7cc;
    background-color: white;
    width: 100%;
    padding-top: 0px;
    bottom: 0;
    margin-top: 50px !important;
    display: flex;
    text-decoration: none;
    flex-direction: row;
    text-align: center;
  	justify-content: space-evenly;
    margin: auto;
    margin-bottom: -30px;
    position: relative;
  	@media screen and (max-width: 800px) {
        padding: 10px;
        height: 333px;
        width: 80%;
        text-align: left;
        flex-direction: column;
    	font-size: 14px;
  	}
`;

export const LinkOptions = styled.div`
  	width: 100%;
    position: relative;
    top: 0;
    color: #555;
    text-decoration: none;
    font-weight: 500;
    vertical-align: top;
    flex-direction: column;
  	display: flex;
    align-items: left;
    padding: 15px;
  	@media screen and (max-width: 800px) {
        width: 100%;
  	}
`;
export const LinkOptionsOption = styled(Link)`
    position: relative;
    color: #555;
    margin: auto;
    text-decoration: none;
    font-weight: 300;
    font-size: 14px;
    text-align: left;
    display: flex;
    justify-content: start;
    vertical-align: left;
  	@media screen and (max-width: 800px) {
        width: 50%;
        margin-top: 5px;
        text-align: left;
  	}
`;