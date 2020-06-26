import React from 'react';
import { connect } from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to='/'>
			<img src="https://i.postimg.cc/4yphttYw/logo.png" alt="logo" className='logo' />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to='/shop'>SHOP</OptionLink>
			<OptionLink to='/blog'>BLOG</OptionLink>
			<OptionLink to='/about'>ABOUT US</OptionLink>
			{currentUser ? (
				<OptionLink as='div' onClick={() => auth.signOut()}>
					SIGN OUT
        		</OptionLink>
			) : (
				<OptionLink to='/signin'>SIGN IN</OptionLink>
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