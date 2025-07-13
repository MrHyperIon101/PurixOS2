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
  
  @media (max-width: 768px) {
    padding: 160px 0 80px; /* Extra top padding to account for back button */
  }
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
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
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
      rgba(255, 255, 255, 0.3) 50%, 
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
    color: rgba(255, 255, 255, 0.6);
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

const BackToHome = styled(motion.div)`
  position: fixed;
  top: 120px;
  left: 40px;
  z-index: 100;
  
  @media (max-width: 768px) {
    left: 20px;
    top: 80px; /* Higher position on mobile for better visibility */
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
  background: #ffffff;
  color: #000000;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-1px);
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const ProChangelog = () => {
  const newFeatures = [
    {
      title: "Improved User Interface",
      description: "PurixOS Pro features a Windows base with a modern, clean look with rounded corners, a centered Start Menu, and a redesigned taskbar."
    },
    {
      title: "Updated Kernel",
      description: "PurixOS Pro includes the new updated Windows kernel that brings many new features and improvements."
    },
    {
      title: "Improved Snap Feature",
      description: "PurixOS Pro allows you to create snap layouts just like Windows without the bloat for efficient multitasking and window organization."
    },
    {
      title: "Privacy Upgrades",
      description: "Telemetry tasks are reduced by 87%. Cortana and Copilot are disabled. Enhanced system tray, taskbar, and Wi-Fi network access controls."
    },
    {
      title: "Optimized Performance",
      description: "Implements meaningful enhancements for responsiveness & low latency without sacrificing stability or compatibility."
    },
    {
      title: "Wireless Interfaces Upgrade",
      description: "Bluetooth® LE Audio enhancements for assistive hearing devices support, Wi-Fi 7 Support, and QR code network sharing."
    },
    {
      title: "Enhanced Security",
      description: "Latest version of Microsoft Defender with enhanced threat protection. Windows Hello support utilizing Windows base."
    },
    {
      title: "Gaming & Media Enhancements",
      description: "Support for Auto HDR and DirectStorage added for improved gaming and media experiences."
    },
    {
      title: "Hardware Optimization",
      description: "Optimized for older hardware with reduced storage requirements while maintaining performance."
    }
  ];

  const securityImprovements = [
    {
      title: "Hardware-based Isolation",
      description: "PurixOS Pro incorporates improved security features, including hardware-based isolation and secure booting capabilities."
    },
    {
      title: "DirectAccess Issues Resolved",
      description: "Fixed issues with DirectAccess connectivity after fresh install or in-place upgrade to PurixOS Pro in the latest build."
    },
    {
      title: "Enhanced Boot Security",
      description: "Improved secure boot implementation with better hardware validation and trusted platform module integration."
    },
    {
      title: "Network Security Enhancements",
      description: "Advanced firewall configurations and network isolation features for better protection against network-based threats."
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
            PurixOS Pro Changelog
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the latest features, improvements, and security enhancements in PurixOS Professional.
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
          <InfoTitle>Ready to Experience PurixOS Pro?</InfoTitle>
          <InfoText>
            Download the latest version and experience the perfect balance of performance, 
            security, and user-friendly design that PurixOS Professional offers.
          </InfoText>
          <InfoButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to="/downloads">Download PurixOS Pro</Link>
          </InfoButton>
        </AdditionalInfo>
      </ChangelogContainer>
    </ChangelogSection>
  );
};

export default ProChangelog;
