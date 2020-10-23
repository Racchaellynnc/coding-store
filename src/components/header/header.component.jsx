import React from 'react';
import { connect } from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import { signOutStart } from '../../redux/user/user.actions';
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
	<HeaderContainer>
		<LogoContainer to='/'>
			<img src="https://i.postimg.cc/SQwY15y5/Untitled-design-5.png" alt="logo" className="logo"></img>
		</LogoContainer>
		<OptionsContainer rel="nofollow" >
			<OptionLink rel="nofollow" to='/shop'>SHOP</OptionLink>
			<OptionLink rel="nofollow" to='/blog'>BLOG</OptionLink>
			<OptionLink rel="nofollow" to='/about'>ABOUT</OptionLink>
			{currentUser ? (
				<OptionLink rel="nofollow" as='div' onClick={signOutStart}>
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

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);