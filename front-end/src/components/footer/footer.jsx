import React from 'react';
import './footer.scss';
import {ReactComponent as FaceBook} from '../../assets/facebook.svg';
import {ReactComponent as Instagram} from '../../assets/instagramm.svg';
import {ReactComponent as Twitter} from '../../assets/twitter.svg';
import {
    FooterContainer,
    LinkOptions,
    LinkOptionsOption,
    Icons
} from './footer.styles'

const Skills = () => (
  <div>
    <FooterContainer >
      <LinkOptions>
        Support Us
        <LinkOptionsOption>
        	Donate
        </LinkOptionsOption>
        <LinkOptionsOption>
          Join Us
      	</LinkOptionsOption>
  		</LinkOptions>
  		<LinkOptions>
          Questions?
      		<LinkOptionsOption>
          	Email Us
          </LinkOptionsOption>
          <LinkOptionsOption>
            Call Us
          </LinkOptionsOption>
        </LinkOptions>
        <LinkOptions>
        	Find us on Social Media
          <LinkOptionsOption>
            <Icons><a className="icon" href="https://www.facebook.com/coderality/"> <FaceBook/></a></Icons>
            <Icons><a className="icon" href="https://www.instagram.com/coderality/"> <Instagram/></a></Icons>
            <Icons><a className="icon" href="https://twitter.com/coderality"> <Twitter/></a> </Icons>
          </LinkOptionsOption>
        </LinkOptions>
        <LinkOptions>
          More
          <LinkOptionsOption to="/about">
            About Us
          </LinkOptionsOption>
          <LinkOptionsOption to="signin">
            Sign up
          </LinkOptionsOption>
          <LinkOptionsOption>
            Privacy Policy
          </LinkOptionsOption>
        </LinkOptions>
      </FooterContainer>
    </div>
	);

export default Skills;