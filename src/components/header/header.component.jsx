import React from 'react';
import { connect } from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import { Helmet } from 'react-helmet';

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to='/'>
			<img src="https://i.postimg.cc/4yphttYw/logo.png" alt="logo" class="logo"></img>
		</LogoContainer>
		<Helmet>
          <title>Turning Code Into Reality</title>	
          <meta name="description" content="Coding tutorials from beginners to advanced. Learn Front-End frameworks like React, Vue or Angular. Read our blog posts or get tutoring and mentoring." />
		</Helmet>
		<OptionsContainer>
			<OptionLink to='/shop'>SHOP</OptionLink>
			<OptionLink to='/blog'>BLOG</OptionLink>
			<OptionLink to='/about'>ABOUT</OptionLink>
			{currentUser ? (
				<OptionLink as='div' onClick={() => auth.signOut()}>
					SIGN OUT
        		</OptionLink>
			) : (
				<OptionLink to='/signin'>SIGN IN</OptionLink>
				)}
			<CartIcon /> {hidden ? null : <CartDropdown />}
		</OptionsContainer>
			<meta name="Sign up now and stay up to day with all the latest technology." content="Join us today for a fun and exciting coding experience. We want to inspire people to have a coder mentality." />
         	<meta name="theme-color" content="#008f68" />
	
	</HeaderContainer>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
	currentUser,
	hidden
});
export default connect(mapStateToProps)(Header);