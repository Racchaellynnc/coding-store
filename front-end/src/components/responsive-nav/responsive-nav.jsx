import React, { Component } from 'react';
import './responsive-nav.styles.scss';
import {ReactComponent as Bars} from '../../assets/bars-regular.svg';
// import { Link } from 'react-router-dom';

export class ResponsiveNav extends Component {
    state = {
      toggle:false
   	}
    Toggle = () => {
      this.setState({toggle:!this.state.toggle})
    }

    render() {
      return (
        <div rel="nofollow" className="nav-links">
				<button onClick={
			    	this.Toggle
					}>
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
        );
    }
}

export default ResponsiveNav;