import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterSection = styled.footer`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(102, 126, 234, 0.05) 100%);
  border-top: 1px solid rgba(102, 126, 234, 0.3);
  padding: 60px 0 30px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at top, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FooterSection1 = styled.div``;

const FooterSection2 = styled.div``;

const FooterLogo = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 1px;
  }
`;

const FooterDescription = styled.p`
  color: #888888;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  color: #888888;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffffff;
  }
`;

const FooterTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #ffffff;
`;

const FooterLink = styled(motion.a)`
  display: block;
  color: #888888;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 14px;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #ffffff;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #888888;
  font-size: 14px;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const FooterBottomLink = styled(motion.a)`
  color: #888888;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #ffffff;
  }
`;

const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'Download', href: '/downloads' },
      { label: 'Features', href: '#features' },
      { label: 'Workspaces', href: '/workspaces' },
      { label: 'Security', href: '/security' },
      { label: 'Cutting Edge', href: '/cutting-edge' }
    ]
  },
  {
    title: 'Community',
    links: [
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'Discord', href: 'https://discord.com' },
      { label: 'Twitter', href: 'https://twitter.com' }
    ]
  },
  {
    title: 'Developers',
    links: [
      { label: 'Developer Tools', href: '/devtools' },
      { label: 'Pro Changelog', href: '/pro-changelog' },
      { label: 'Core Changelog', href: '/core-changelog' },
      { label: 'Support', href: '/support' }
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/support' },
      { label: 'Contact Us', href: '/support' },
      { label: 'Report Issues', href: '/support' }
    ]
  }
];

const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Discord', href: 'https://discord.com' },
  { label: 'YouTube', href: 'https://youtube.com' }
];

const bottomLinks = [
  { label: 'Privacy Policy', href: '/support' },
  { label: 'Terms of Service', href: '/support' }
];

const Footer = () => {
  const scrollToSection = (sectionId) => {
    if (sectionId.startsWith('#') && sectionId !== '#') {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const linkVariants = {
    hover: {
      x: 5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <FooterSection1>
            <FooterLogo>PurixOS</FooterLogo>
            <FooterDescription>
              Pure innovation in computing. Built for the future, designed for today. 
              Join the revolution of minimalist computing with enterprise-grade security, 
              developer-friendly tools, and an interface that gets out of your way.
            </FooterDescription>
            <SocialLinks>
              {socialLinks.map((link) => (
                <SocialLink
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  {link.label}
                </SocialLink>
              ))}
            </SocialLinks>
          </FooterSection1>
          
          {footerSections.map((section) => (
            <FooterSection2 key={section.title}>
              <FooterTitle>{section.title}</FooterTitle>
              {section.links.map((link) => (
                <FooterLink
                  key={link.label}
                  as={link.href.startsWith('http') ? 'a' : Link}
                  href={link.href.startsWith('http') ? link.href : undefined}
                  to={link.href.startsWith('http') ? undefined : link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }
                  }}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  {link.label}
                </FooterLink>
              ))}
            </FooterSection2>
          ))}
        </FooterContent>
        
        <FooterBottom>
          <Copyright>&copy; 2024 PurixOS. All rights reserved.</Copyright>
          <FooterLinks>
            {bottomLinks.map((link) => (
              <FooterBottomLink
                key={link.label}
                as={Link}
                to={link.href}
                variants={linkVariants}
                whileHover="hover"
              >
                {link.label}
              </FooterBottomLink>
            ))}
          </FooterLinks>
        </FooterBottom>
      </Container>
    </FooterSection>
  );
};

export default Footer;