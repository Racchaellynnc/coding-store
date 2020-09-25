import React from 'react';
import { BrowserRouter as Router,  Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {Helmet} from 'react-helmet';
import { selectCurrentUser } from './redux/user/user.selectors';
import './App.css';
import {ReactComponent as Bars} from './assets/bars-regular.svg';
import { createStructuredSelector } from 'reselect';
import HomePage from './pages/homepage/homepage.component';
import BlogPage from './pages/blog/blog.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/signin/signin.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import AboutPage from './pages/about/about.component';


class App extends React.Component {
unsubscribeFromAuth = null;

componentDidMount() {
	const { setCurrentUser } = this.props
	this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
		if (userAuth) {
			const userRef = await createUserProfileDocument(userAuth);

			userRef.onSnapshot(snapShot => {
				setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
			});
		}
		setCurrentUser(userAuth);
	});
}

componentWillUnmount() {
	this.unsubscribeFromAuth();
}
state = {
	toggle:false
}
Toggle = () => {
	this.setState({toggle:!this.state.toggle})
}
	render(){
		return ( 
			<>
			<div>   
				<Helmet>
					<meta charset="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				  	<title>Coderality</title>
				  	<meta name="description" content="Coding tutorials, blog posts, and mentoring from beginners to advanced. We turn Code into Reality." />	
			  	</Helmet>  
			<div rel="nofollow" className="nav-links">
				<button onClick={this.Toggle}>
					<Bars className="menu-bars" />
				</button>
				<ul rel="nofollow" className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
					<a href="https://coderality.com" ><li className="links" >HOME</li></a>
					<a href="https://coderality.com/about" ><li className="links" >ABOUT</li></a>
					<a href="https://coderality.com/shop" ><li className="links" >SHOP</li></a>
					<a href="https://coderality.com/blog" ><li className="links" >BLOG</li></a>
					<a href="https://coderality.com/signin" ><li className="links" >SIGN IN</li></a>
				</ul>
			</div>
				<Router > 
					<Header />
						<Route exact path='/' component={HomePage} />
						<Route exact path='/shop' name="Our Store"component={ShopPage} />
						<Route exact path='/blog' name="Our Blog" component={BlogPage} />
						<Route exact path='/about' name="About Us" component={AboutPage} />
						<Route exact path='/checkout' component={CheckoutPage} />
						<Route
							exact
							name="Sign in"
							path='/signin'
							render={() =>
								this.props.currentUser ? (
									<Redirect to='/' />
								) : (
									<SignInPage />
								)
							}
						/>
				</Router>
			</div>
			</>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);