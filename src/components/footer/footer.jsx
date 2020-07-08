import React from 'react';
import './footer.scss';
import {
    FooterContainer,
    LinkOptions,
    LinkOptionsOption
} from './footer.styles'

const Skills = () => (
    <div>
        <FooterContainer >
            <img src="https://i.postimg.cc/nhqW96zt/Untitled-design-6.png" alt="logo" class="logo"></img>
            <LinkOptions>
            
            
                Copyright
               <div className="icon">
                    <i class="fal fa-copyright"></i> 
                </div>
            </LinkOptions>
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
                    <div className="icon"><i className="fab fa-facebook"></i></div>
                    <div className="icon"><i className="fab fa-instagram"></i></div>
                    <div className="icon"><i className="fab fa-twitter-square"></i></div>
               </LinkOptionsOption>
            </LinkOptions>
            <LinkOptions>
                Categories
                <LinkOptionsOption>
                    Programming
                </LinkOptionsOption>
                <LinkOptionsOption>
                    Health
                </LinkOptionsOption>
                <LinkOptionsOption>
                    Game Development 
                </LinkOptionsOption>
            </LinkOptions>
        </FooterContainer>
    </div>
);

export default Skills;