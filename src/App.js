import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import './App.css';
import {ReactComponent as Bars} from './assets/bars-solid.svg';
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
import MobileBlogReactNative from './pages/categories/mobile-developement/blog-pages/react-native';
import JSBlogPage from './pages/categories/js-developement/js-developement';
import AwsSecurity from './pages/categories/cloud/aws-security';


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
      <div className="navBar">
                    <button onClick={this.Toggle}>
                        <Bars className="menu-bars" />
                    </button>
                    <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
                        <a href="https://coderality.com"><li className="links" >HOME</li></a>
                        <a href="https://coderality.com/about"><li className="links" >ABOUT</li></a>
                        <a href="https://coderality.com/shop"><li className="links" >SHOP</li></a>
                        <a href="https://coderality.com/blog"><li className="links" >BLOG</li></a>
                        <a href="https://coderality.com/signin"><li className="links" >SIGN IN</li></a>
                    </ul>
              </div>
        <Router>
   
          <Header />
          <Switch>

            <Route exact path='/aws-security' component={AwsSecurity} />
            <Route exact path='/javascript' component={JSBlogPage} />
            <Route exact path='/reactnative' component={MobileBlogReactNative} />
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/blog' component={BlogPage} />
            <Route path='/about' component={AboutPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/signin'
              render={() =>
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInPage />
                )
              }
            />
          </Switch>
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