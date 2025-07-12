import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SecuritySection = styled.section`
  min-height: 100vh;
  background: 
    radial-gradient(ellipse 120% 120% at 50% 120%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse 80% 80% at 80% 20%, rgba(118, 75, 162, 0.06) 0%, transparent 50%),
    linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(10, 10, 30, 0.95) 100%);
  padding: 100px 0 80px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 15% 85%, rgba(102, 126, 234, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 85% 15%, rgba(118, 75, 162, 0.03) 0%, transparent 50%);
    animation: securityPulse 22s ease-in-out infinite;
    opacity: 0.7;
  }
  
  @keyframes securityPulse {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.7; }
    33% { transform: scale(1.05) rotate(1deg); opacity: 0.5; }
    66% { transform: scale(0.95) rotate(-1deg); opacity: 0.9; }
  }
`;

const SecurityContainer = styled.div`
  max-width: 1400px;
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
  font-weight: 100;
  background: linear-gradient(135deg, #ffffff 0%, rgba(102, 126, 234, 0.9) 50%, rgba(118, 75, 162, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 30px;
  letter-spacing: -0.03em;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.6), transparent);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, rgba(102, 126, 234, 0.6), rgba(118, 75, 162, 0.4));
    border-radius: 1px;
  }
`;

const SecurityFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
`;

const FeatureCard = styled(motion.div)`
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
    background: ${props => props.gradient || 'linear-gradient(90deg, transparent 0%, rgba(255, 0, 0, 0.3) 50%, transparent 100%)'};
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: ${props => props.background || 'rgba(255, 0, 0, 0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 24px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 24px;
`;

const SecuritySpecs = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 40px;
`;

const SpecsTitle = styled.h3`
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 20px;
  font-weight: 300;
`;

const SpecsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
`;

const SpecItem = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  strong {
    color: rgba(255, 255, 255, 0.9);
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

const SecurityPage = () => {
  const securityFeatures = [
    {
      icon: '🔐',
      title: 'Advanced Encryption',
      description: 'Military-grade AES-256 encryption with quantum-resistant algorithms to protect your data from current and future threats.',
      background: 'linear-gradient(135deg, #ff4b1f 0%, #ff9068 100%)',
      gradient: 'linear-gradient(90deg, transparent 0%, rgba(255, 75, 31, 0.5) 50%, transparent 100%)'
    },
    {
      icon: '🛡️',
      title: 'Zero-Trust Architecture',
      description: 'Every access request is verified, authenticated, and authorized before granting access to system resources.',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      gradient: 'linear-gradient(90deg, transparent 0%, rgba(102, 126, 234, 0.5) 50%, transparent 100%)'
    },
    {
      icon: '🔍',
      title: 'Real-time Threat Detection',
      description: 'AI-powered monitoring system that identifies and neutralizes threats before they can compromise your system.',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      gradient: 'linear-gradient(90deg, transparent 0%, rgba(240, 147, 251, 0.5) 50%, transparent 100%)'
    },
    {
      icon: '🔒',
      title: 'Secure Boot & TPM',
      description: 'Hardware-based security features ensuring system integrity from the moment you power on your device.',
      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      gradient: 'linear-gradient(90deg, transparent 0%, rgba(79, 172, 254, 0.5) 50%, transparent 100%)'
    },
    {
      icon: '🏠',
      title: 'Application Sandboxing',
      description: 'Isolated execution environments prevent malicious software from accessing critical system resources.',
      background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      gradient: 'linear-gradient(90deg, transparent 0%, rgba(67, 233, 123, 0.5) 50%, transparent 100%)'
    },
    {
      icon: '📋',
      title: 'Privacy Controls',
      description: 'Granular privacy settings with complete transparency about data collection and usage policies.',
      background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      gradient: 'linear-gradient(90deg, transparent 0%, rgba(250, 112, 154, 0.5) 50%, transparent 100%)'
    }
  ];

  const securitySpecs = [
    { label: 'Encryption Standard', value: 'AES-256 + Post-Quantum' },
    { label: 'Authentication', value: 'Multi-Factor (MFA)' },
    { label: 'Secure Boot', value: 'UEFI + TPM 2.0' },
    { label: 'Network Security', value: 'VPN + Firewall' },
    { label: 'Data Protection', value: 'End-to-End Encryption' },
    { label: 'Compliance', value: 'GDPR, CCPA, SOC 2' },
    { label: 'Vulnerability Scanning', value: 'Real-time + Scheduled' },
    { label: 'Incident Response', value: 'Automated + Manual' }
  ];

  return (
    <SecuritySection>
      <BackToHome
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <BackButton>
          <Link to="/">← Back to Home</Link>
        </BackButton>
      </BackToHome>

      <SecurityContainer>
        <PageHeader>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Security Features
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Enterprise-grade security built into every layer of the system. Protecting your data, privacy, and digital identity with cutting-edge technology.
          </PageSubtitle>
        </PageHeader>

        <SecurityFeatures>
          {securityFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              gradient={feature.gradient}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <FeatureIcon background={feature.background}>
                {feature.icon}
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </SecurityFeatures>

        <SecuritySpecs>
          <SpecsTitle>Security Specifications</SpecsTitle>
          <SpecsList>
            {securitySpecs.map((spec, index) => (
              <SpecItem key={index}>
                <strong>{spec.label}:</strong> {spec.value}
              </SpecItem>
            ))}
          </SpecsList>
        </SecuritySpecs>
      </SecurityContainer>
    </SecuritySection>
  );
};

export default SecurityPage;
