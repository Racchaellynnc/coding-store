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
			<img src="https://i.postimg.cc/SQwY15y5/Untitled-design-5.png" alt="logo" class="logo"></img>
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