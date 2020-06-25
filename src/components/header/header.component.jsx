import React from 'react';
import { connect } from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// import BlogDropdown from '../blog-dropdown/blog-dropdown.component';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
// import BookIcon from '../blog-icon/blog-icon.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden, notvisible }) => (
	<HeaderContainer>
		<LogoContainer to='/'>
			<Logo className='logo' />
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
			{/* <BookIcon /> {notvisible ? null : <BlogDropdown />} */}
			<CartIcon /> {hidden ? null : <CartDropdown />}
		</OptionsContainer>
	</HeaderContainer>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }, blog: { notvisible } }) => ({
	currentUser,
	hidden,
	notvisible
});
export default connect(mapStateToProps)(Header);