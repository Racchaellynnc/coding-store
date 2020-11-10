import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
	font-weight: 200;
	padding: 20px 0px;
	margin: 0px !important;
}
html,body{
	margin:0;
	}
.menu-bars {
	width: 30px;
	color: #6fd985;
	float: left;
	position: absolute;
	left: 20px;
	top: 20px;
	z-index: 5;
	display: none;
}

button {
	font-size: 30px;
	margin-right: 30px;
	color: white;
	background: transparent;
	border: none;
	cursor: pointer;
	outline: none;
}
.links {
	padding: 40px 40px;
	display: none;
}
 
@media screen and (max-width: 800px) {
	body{
		height: 100%;
		margin: 0px;
		padding: 0px;
	}
	a {
		text-decoration: none;
		color: #444;
		font-weight: 333;
		font-size: 18px;
	}
	.show-nav .links {
		display: flex; 
	}
	.nav-links{
		margin-bottom: -16px;
	}
	.menu-bars {
		display: flex;
		color: #6fd985;
	}
	
}
`