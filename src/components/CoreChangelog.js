import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ChangelogSection = styled.section`
  min-height: 100vh;
  background: #000000;
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
`;

const ChangelogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const PageTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 200;
  color: #ffffff;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const VersionBadge = styled.div`
  display: inline-block;
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 40px;
  letter-spacing: 0.02em;
`;

const ChangesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ChangeCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(102, 126, 234, 0.5) 50%, 
      transparent 100%
    );
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 30px;
  letter-spacing: -0.02em;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
  padding-left: 30px;
  position: relative;
  line-height: 1.6;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #667eea;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 8px;
  line-height: 1.5;
`;

const TechnicalDetails = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 20px;
  margin-top: 15px;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TechItem = styled.li`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #667eea;
  }
`;

const BackToHome = styled(motion.div)`
  position: fixed;
  top: 120px;
  left: 40px;
  z-index: 100;
  
  @media (max-width: 768px) {
    left: 20px;
    top: 100px;
  }
`;

const BackButton = styled(motion.div)`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  padding: 12px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 400;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.05);
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const AdditionalInfo = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  margin-top: 40px;
`;

const InfoTitle = styled.h4`
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 15px;
  font-weight: 400;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 20px;
`;

const InfoButton = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: #ffffff;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const CoreChangelog = () => {
  const newFeatures = [
    {
      title: "Year 2038 Support for armhf Architecture",
      description: "PurixOS solves the Year 2038 problem that existed on armhf. More than a thousand packages have been updated to handle time using a 64-bit value rather than a 32-bit one, making it possible to handle times up to 292 billion years in the future."
    },
    {
      title: "Updated Linux Kernel 6.8",
      description: "PurixOS Core includes the new 6.8 Linux kernel that brings many new features and performance improvements."
    },
    {
      title: "systemd v255.4",
      description: "The init system was updated to systemd v255.4 for better system management and service handling."
    },
    {
      title: "Toolchain Upgrades",
      description: "Major updates to development tools and programming languages.",
      details: [
        "GCC updated to version 14, binutils to 2.42, and glibc to 2.39",
        "Python now defaults to version 3.12",
        "OpenJDK now defaults to LTS version 21",
        "LLVM now defaults to version 18",
        "Rust toolchain defaults to version 1.75",
        "Golang updated to 1.22",
        ".NET 8 is now default"
      ]
    },
    {
      title: "Enhanced OpenJDK Support",
      description: "OpenJDK LTS 21 is the default while maintaining support for versions 17, 11, and 8. OpenJDK 17 and 21 are TCK certified for Java standards compliance and interoperability."
    },
    {
      title: ".NET 8 Support",
      description: "Full .NET 8 support on Ubuntu 24.04 LTS and 22.04 LTS for the entire lifecycle of both releases. Extended support to IBM System Z platform."
    },
    {
      title: "Apport Integration",
      description: "Apport added integration with systemd-coredump to handle crashes. Developers can co-install systemd-coredump and use coredumpctl to analyze crash data."
    }
  ];

  const securityImprovements = [
    {
      title: "Unprivileged User Namespace Restrictions",
      description: "Enhanced security through AppArmor package restrictions on unprivileged user namespaces. Includes default profiles for common applications like Google Chrome and Discord."
    },
    {
      title: "Deprecated TLS Protocols Disabled",
      description: "TLS 1.0, 1.1 and DTLS 1.0 are forcefully disabled for enhanced security. OpenSSL configurations have been consistently applied system-wide."
    },
    {
      title: "Improved Configuration Access",
      description: "More consistent application of openssl and gnutls system configurations. AppArmor rules now grant access to configuration files by default."
    },
    {
      title: "APT Repository Security",
      description: "APT requires repositories to be signed with RSA keys no smaller than 2048 bits, Ed25519, or Ed448. Enhanced protection against compromised repositories."
    }
  ];

  return (
    <ChangelogSection>
      <BackToHome
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <BackButton>
          <Link to="/">← Back to Home</Link>
        </BackButton>
      </BackToHome>

      <ChangelogContainer>
        <PageHeader>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            PurixOS Core Changelog
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore the latest updates, features, and security enhancements in PurixOS Core - built on the robust Linux foundation.
          </PageSubtitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <VersionBadge>Version 1.X - June 2024 Security Patch</VersionBadge>
          </motion.div>
        </PageHeader>

        <ChangesGrid>
          <ChangeCategory
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <CategoryTitle>New Features</CategoryTitle>
            <FeatureList>
              {newFeatures.map((feature, index) => (
                <FeatureItem key={index}>
                  <strong>{feature.title}</strong>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                  {feature.details && (
                    <TechnicalDetails>
                      <TechList>
                        {feature.details.map((detail, detailIndex) => (
                          <TechItem key={detailIndex}>{detail}</TechItem>
                        ))}
                      </TechList>
                    </TechnicalDetails>
                  )}
                </FeatureItem>
              ))}
            </FeatureList>
          </ChangeCategory>

          <ChangeCategory
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CategoryTitle>Security Improvements</CategoryTitle>
            <FeatureList>
              {securityImprovements.map((feature, index) => (
                <FeatureItem key={index}>
                  <strong>{feature.title}</strong>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureItem>
              ))}
            </FeatureList>
          </ChangeCategory>
        </ChangesGrid>

        <AdditionalInfo
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <InfoTitle>Ready to Experience PurixOS Core?</InfoTitle>
          <InfoText>
            Download the latest version and discover the power of a Linux-based operating system 
            designed for developers and enthusiasts who value performance and reliability.
          </InfoText>
          <InfoButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to="/downloads">Download PurixOS Core</Link>
          </InfoButton>
        </AdditionalInfo>
      </ChangelogContainer>
    </ChangelogSection>
  );
};

export default CoreChangelog;
