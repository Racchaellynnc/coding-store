import React from 'react';
import { connect } from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import {Helmet} from 'react-helmet';
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<Helmet>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>Turn code into reality.</title>
			<meta name="description" content="Join us today for a fun and exciting coding experience. We want to inspire people to have a coder mentality." />
         	<meta name="theme-color" content="#008f68" />	
		</Helmet>
		<LogoContainer to='/'>
			<img src="https://i.postimg.cc/4yphttYw/logo.png" alt="logo" class="logo"></img>
		</LogoContainer>
		<OptionsContainer rel="nofollow" >
			<OptionLink rel="nofollow" to='/shop'>SHOP</OptionLink>
			<OptionLink rel="nofollow" to='/blog'>BLOG</OptionLink>
			<OptionLink rel="nofollow" to='/about'>ABOUT</OptionLink>
			{currentUser ? (
				<OptionLink rel="nofollow" as='div' onClick={() => auth.signOut()}>
					SIGN OUT
        		</OptionLink>
			) : (
				<OptionLink rel="nofollow" to='/signin'>SIGN IN</OptionLink>
				)}
			<CartIcon /> {hidden ? null : <CartDropdown />}
		</OptionsContainer>
	</HeaderContainer>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
	currentUser,
	hidden
});
export default connect(mapStateToProps)(Header);