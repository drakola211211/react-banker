import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
    FaBehance,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin
} from 'react-icons/fa'

import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWraper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights
} from './FooterElements'

const toggleHome = () => {
    scroll.scrollToTop()
}

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWraper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>About us</FooterLink>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/signin'>Contact</FooterLink>
                            <FooterLink to='/signin'>Support</FooterLink>
                            <FooterLink to='/signin'>Destinations</FooterLink>
                            <FooterLink to='/signin'>Sponsorship</FooterLink>
                        </FooterLinkItems>
                        </FooterLinksWraper>
                        <FooterLinksWraper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to='/signin'>Submit video</FooterLink>
                            <FooterLink to='/signin'>Ambassadors</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Agency</FooterLink>
                            <FooterLink to='/signin'>Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/signin'>Instagram</FooterLink>
                            <FooterLink to='/signin'>Facebook</FooterLink>
                            <FooterLink to='/signin'>Youtube</FooterLink>
                            <FooterLink to='/signin'>Twitter</FooterLink>
                            <FooterLink to='/signin'>Github</FooterLink>
                            <FooterLink to='/signin'>Linkedin</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWraper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            dolla
                        </SocialLogo>
                        <WebsiteRights>dolla @ {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://www.facebook.com/eladhammm' target='__blank' aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.instagram.com/mohamed.ahmedd' target='__blank' aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='https://github.com/drakola211211' target='__blank' aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.behance.net/mohamedahmed269' target='__blank' aria-label="Behance">
                                <FaBehance />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.linkedin.com/in/mohamed-ahmed-788a5019a' target='__blank' aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
