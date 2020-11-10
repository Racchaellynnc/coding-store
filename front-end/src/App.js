import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router,  Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {Helmet} from 'react-helmet';
import { GlobalStyles } from './global.styles';
import {ReactComponent as Bars} from './assets/bars-regular.svg';
import { createStructuredSelector } from 'reselect';
import Header from './components/header/header.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import CatchError from './components/errors/error-component.jsx';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const BlogPage = lazy(() => import('./pages/blog/blog.component'));
const AboutPage = lazy(() => import('./pages/about/about.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInPage = lazy(() => import('./pages/signin/signin.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));


const App = ({checkUserSession, currentUser}) => {
useEffect(() => {
	checkUserSession();
}, [checkUserSession]);
		return ( 
			<>
			<div>   
				<Helmet>
					<meta charset="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				  	<title>Coderality</title>
				  	<meta name="description" content="Coding tutorials, blog posts, and mentoring from beginners to advanced. We turn Code into Reality." />	
			  	</Helmet>  
				<GlobalStyles />
				
			{/* <div rel="nofollow" className="nav-links">
				{/* <button onClick={
					// this.Toggle
					}> */}
					<Bars className="menu-bars" />
				{/* </button> */}
				{/* <ul rel="nofollow" className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
					<a href="https://coderality.com" ><li className="links" >HOME</li></a>
					<a href="https://coderality.com/about" ><li className="links" >ABOUT</li></a>
					<a href="https://coderality.com/shop" ><li className="links" >SHOP</li></a>
					<a href="https://coderality.com/blog" ><li className="links" >BLOG</li></a>
					<a href="https://coderality.com/signin" ><li className="links" >SIGN IN</li></a>
				</ul>
			</div>  */}
				<Router > 
					<Header />
					<CatchError>
						<Suspense fallback={<div></div>}>
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
									currentUser ? (
										<Redirect to='/' />
									) : (
										<SignInPage />
									)
								}
							/>
						</Suspense>
					</CatchError>
				</Router>
			</div>
			</>
		);
	}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);