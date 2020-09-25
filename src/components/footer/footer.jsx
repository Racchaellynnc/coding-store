import React from 'react';
import './footer.scss';
import {ReactComponent as FaceBook} from '../../assets/facebook.svg';
import {ReactComponent as Instagram} from '../../assets/instagramm.svg';
import {ReactComponent as Twitter} from '../../assets/twitter.svg';
import {
    FooterContainer,
    LinkOptions,
    LinkOptionsOption
} from './footer.styles'

const Skills = () => (
    <div>
        <FooterContainer >
            <LinkOptions>
                    Support Us
                <LinkOptionsOption>
                    <a href="https://www.gofundme.com/f/coderality?utm_medium=copy_link&utm_source=customer&utm_campaign=p_lico+share-sheet">Donate</a>
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
                    <a href="https://www.facebook.com/coderality/"><FaceBook className="icon"><i className="fab fa-facebook"></i></FaceBook></a>
                    <a href="https://www.instagram.com/coderality/"> <Instagram className="icon"><i className="fab fa-instagram"></i></Instagram></a>
                    <a href="https://twitter.com/coderality"><Twitter className="icon"><i className="fab fa-twitter-square"></i></Twitter></a>
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