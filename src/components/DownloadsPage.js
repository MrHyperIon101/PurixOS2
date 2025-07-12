import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const DownloadsPageSection = styled.section`
  min-height: 100vh;
  background: 
    radial-gradient(ellipse 120% 120% at 50% 120%, rgba(102, 126, 234, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse 80% 80% at 80% 20%, rgba(118, 75, 162, 0.08) 0%, transparent 50%),
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
      radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.01) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(118, 75, 162, 0.02) 0%, transparent 50%);
    opacity: 0.8;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 98px,
        rgba(255, 255, 255, 0.005) 100px
      ),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 98px,
        rgba(255, 255, 255, 0.005) 100px
      );
    pointer-events: none;
  }
`;

const DownloadsContainer = styled.div`
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

const EditionSelector = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const EditionTab = styled(motion.button)`
  background: ${props => props.active ? '#ffffff' : 'transparent'};
  color: ${props => props.active ? '#000000' : '#ffffff'};
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 15px 40px;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.6);
    ${props => !props.active && 'background: rgba(255, 255, 255, 0.05);'}
    
    &::before {
      left: 100%;
    }
  }
`;

const ComparisonButton = styled(motion.button)`
  background: ${props => props.active ? 'rgba(102, 126, 234, 0.2)' : 'transparent'};
  color: ${props => props.active ? '#667eea' : 'rgba(255, 255, 255, 0.8)'};
  border: 1px solid ${props => props.active ? 'rgba(102, 126, 234, 0.5)' : 'rgba(255, 255, 255, 0.3)'};
  padding: 15px 30px;
  font-size: 0.9rem;
  font-weight: 400;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;
  position: relative;
  
  &:hover {
    border-color: rgba(102, 126, 234, 0.6);
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
  }
`;

const DownloadContent = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 80px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const DownloadCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(
      var(--gradient-angle, 45deg),
      transparent,
      rgba(255, 255, 255, 0.2) 25%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.03);
    
    &::before {
      opacity: 1;
      animation: downloadCardGlow 3s linear infinite;
    }
  }
  
  @keyframes downloadCardGlow {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }
`;

const CardBadge = styled.div`
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 400;
  margin-bottom: 20px;
  letter-spacing: 0.02em;
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 15px;
  letter-spacing: -0.02em;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 30px;
`;

const SystemRequirements = styled.div`
  margin-bottom: 30px;
`;

const RequirementsTitle = styled.h4`
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 15px;
  font-weight: 400;
`;

const RequirementsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const RequirementItem = styled.li`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.4);
  }
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  text-decoration: none;
  padding: 18px 35px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;
  margin-right: 15px;
  margin-bottom: 10px;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 10;
  user-select: none;
  white-space: nowrap;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(102, 126, 234, 0.4);
    
    &::before {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: 2px solid rgba(102, 126, 234, 0.5);
    outline-offset: 2px;
  }
  
  span {
    position: relative;
    z-index: 1;
  }
`;

const FileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
`;

const FileSize = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  
  span {
    color: #667eea;
    font-weight: 500;
  }
`;

const ChecksumInfo = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
`;

const DownloadStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
  margin-bottom: 25px;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 10px;
  background: rgba(102, 126, 234, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(102, 126, 234, 0.1);
`;

const StatValue = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 2px;
`;

const StatLabel = styled.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
`;

const SecondaryButton = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  background: transparent;
  color: #ffffff;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 400;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;
  margin-bottom: 10px;
  cursor: pointer;
  position: relative;
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.05);
  }
  
  a {
    color: inherit;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
    padding: 18px 35px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ChangelogSection = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 30px;
  margin-top: 40px;
`;

const ChangelogTitle = styled.h4`
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 20px;
  font-weight: 400;
`;

const ChangelogList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ComparisonSection = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
  margin-bottom: 80px;
  backdrop-filter: blur(10px);
  overflow: hidden;
`;

const ComparisonTitle = styled.h3`
  font-size: 2rem;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: -0.02em;
`;

const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const ComparisonRow = styled.tr`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  ${props => props.header && `
    background: rgba(102, 126, 234, 0.1);
    font-weight: 500;
  `}
`;

const ComparisonCell = styled.td`
  padding: 15px 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  text-align: center;
  
  &:first-child {
    text-align: left;
    font-weight: 500;
    color: #ffffff;
  }
`;

const ChangelogItem = styled.li`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 12px;
  padding-left: 25px;
  position: relative;
  line-height: 1.5;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.8rem;
  }
`;

const InstallationGuide = styled.div`
  margin-top: 60px;
  text-align: center;
`;

const GuideTitle = styled.h3`
  font-size: 2rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 30px;
  letter-spacing: -0.02em;
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

const Step = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 30px 20px;
  text-align: center;
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 1.1rem;
  font-weight: 500;
  color: #ffffff;
`;

const StepTitle = styled.h4`
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 10px;
  font-weight: 400;
`;

const StepDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
`;

const WorkspaceFeatureSection = styled.div`
  margin: 80px 0;
  padding: 60px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`;

const WorkspaceFeatureTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
`;

const WorkspaceFeatureDescription = styled(motion.p)`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const WorkspaceFeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
`;

const WorkspaceFeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(
      var(--gradient-angle, 45deg),
      transparent,
      rgba(255, 255, 255, 0.2) 50%,
      transparent
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.03);
    
    &::before {
      opacity: 1;
      animation: workspaceFeatureGlow 3s linear infinite;
    }
  }
  
  @keyframes workspaceFeatureGlow {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const FeatureCardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 15px;
  letter-spacing: -0.01em;
`;

const FeatureCardText = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`;

const WorkspaceSection = styled.div`
  margin: 80px 0;
  padding: 60px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const WorkspaceTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
`;

const WorkspaceSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-bottom: 60px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const WorkspaceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

const WorkspaceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(
      var(--gradient-angle, 45deg),
      transparent,
      ${props => props.gradient || 'rgba(255, 255, 255, 0.2)'} 50%,
      transparent
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.03);
    
    &::before {
      opacity: 1;
      animation: workspaceCardGlow 3s linear infinite;
    }
  }
  
  @keyframes workspaceCardGlow {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }
`;

const WorkspaceIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const WorkspaceCardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 12px;
  letter-spacing: -0.01em;
`;

const WorkspaceDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  margin-bottom: 20px;
`;

const WorkspaceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
`;

const WorkspaceFeature = styled.li`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 6px;
  padding-left: 16px;
  position: relative;
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const WorkspaceDownloadInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;
`;

const WorkspaceDownloadButton = styled(motion.a)`
  display: inline-block;
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 12px 24px;
  font-size: 0.9rem;
  font-weight: 400;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.5);
    color: #ffffff;
  }
`;

const AdditionalLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LinkButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  padding: 12px 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 400;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.03);
  }
`;

const FloatingQuickDownload = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;

const QuickDownloadButton = styled(motion.button)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  border-radius: 50px;
  padding: 15px 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 10px;
  
  &:hover {
    box-shadow: 0 12px 48px rgba(102, 126, 234, 0.6);
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

const DownloadsPage = () => {
  const [activeEdition, setActiveEdition] = useState('pro');
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showComparison, setShowComparison] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [downloadCount, setDownloadCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Debug logging
  console.log('Current activeEdition:', activeEdition);

  const editionData = {
    pro: {
      title: 'PurixOS Professional',
      badge: 'Windows-Based',
      description: 'A performance-optimized Windows experience designed for power users. Features enhanced privacy controls, reduced telemetry, and optimized performance without sacrificing compatibility.',
      fileSize: '4.2 GB',
      checksum: 'SHA256: a1b2c3d4e5f6...',
      downloadCount: '15,847',
      lastUpdated: '2025-01-10',
      requirements: [
        'CPU: 2 GHz Dual Core Processor or more',
        'RAM: 4 GB of system memory',
        'Storage: 15-40 GB of free disk space',
        'System: 64-bit system capability'
      ],
      downloadLink: 'https://drive.google.com/file/d/1CbhUV-R7kg7t-74S4iEFxccS9vcOKRbP/view?usp=sharing',
      changelogLink: '/changelog/pro',
      changelog: [
        'Improved User Interface with modern design',
        'Updated Windows kernel with enhanced features',
        'Improved Snap Feature for efficient multitasking',
        'Telemetry reduced by 87% for enhanced privacy',
        'Optimized performance for responsiveness',
        'Wi-Fi 7 Support and Bluetooth LE Audio',
        'Enhanced security with hardware-based isolation',
        'Support for Auto HDR and DirectStorage',
        'Optimized for older hardware'
      ]
    },
    core: {
      title: 'PurixOS Core',
      badge: 'Linux-Based',
      description: 'Built on the robust foundation of the Linux kernel, PurixOS Core delivers a lightweight, efficient, and reliable operating system perfect for developers and Linux enthusiasts.',
      fileSize: '2.8 GB',
      checksum: 'SHA256: f6e5d4c3b2a1...',
      downloadCount: '8,352',
      lastUpdated: '2025-01-08',
      requirements: [
        'CPU: 2 GHz Dual Core Processor or more',
        'RAM: 2 GB of system memory',
        'Storage: 20-30 GB of free disk space',
        'System: 32-bit or 64-bit system capability'
      ],
      downloadLink: 'https://drive.google.com/file/d/10Z-4XpNkeoKTmvKDbXjVBn3n_R9gYZqV/view?usp=drive_link',
      changelogLink: '/changelog/core',
      changelog: [
        'Year 2038 support for armhf architecture',
        'Updated Linux Kernel 6.8 with new features',
        'systemd v255.4 for improved system management',
        'GCC 14, Python 3.12, OpenJDK 21 toolchain upgrades',
        '.NET 8 support with full lifecycle coverage',
        'Enhanced security with unprivileged user namespace restrictions',
        'TLS 1.0, 1.1 and DTLS 1.0 forcefully disabled',
        'Improved AppArmor integration',
        'Enhanced APT repository security'
      ]
    }
  };

  const currentEdition = editionData[activeEdition];

  const handleDownload = (url) => {
    setIsDownloading(true);
    setDownloadProgress(0);
    setIsAnimating(true);
    
    // Animate download count
    const countInterval = setInterval(() => {
      setDownloadCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 500);
    
    // Simulate download progress
    const progressInterval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(countInterval);
          setIsDownloading(false);
          setIsAnimating(false);
          window.open(url, '_blank');
          return 0;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 200);
  };

  const handleEditionSwitch = (edition) => {
    if (edition !== activeEdition) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveEdition(edition);
        setIsAnimating(false);
      }, 300);
    }
  };

  const toggleComparison = () => {
    setShowComparison(!showComparison);
  };

  const installationSteps = [
    {
      number: '1',
      title: 'Download ISO',
      description: 'Download the official ISO from the link above for your chosen edition.'
    },
    {
      number: '2',
      title: 'Create Bootable USB',
      description: 'Use Rufus for Pro Edition or BalenaEtcher for Core Edition to create a bootable USB.'
    },
    {
      number: '3',
      title: 'Boot from USB',
      description: 'Insert USB, restart PC, enter BIOS/UEFI, set USB as first boot option.'
    },
    {
      number: '4',
      title: 'Install System',
      description: 'Follow the installation wizard: select language, timezone, partition disk, create user account.'
    },
    {
      number: '5',
      title: 'Complete Setup',
      description: 'Remove USB after installation, reboot, log in, install drivers and updates.'
    },
    {
      number: '6',
      title: 'Enjoy PurixOS',
      description: 'Customize settings and start enjoying your optimized operating system experience.'
    }
  ];

  return (
    <DownloadsPageSection>
      <BackToHome
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <BackButton>
          <Link to="/">← Back to Home</Link>
        </BackButton>
      </BackToHome>

      <DownloadsContainer>
        <PageHeader>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Download PurixOS
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose your edition and transform your computing experience with our optimized operating systems.
          </PageSubtitle>
        </PageHeader>

        <EditionSelector>
          <EditionTab
            active={activeEdition === 'pro'}
            onClick={() => {
              console.log('Switching to pro edition');
              handleEditionSwitch('pro');
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            animate={isAnimating ? { opacity: 0.5 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            🚀 PurixOS Professional
          </EditionTab>
          <EditionTab
            active={activeEdition === 'core'}
            onClick={() => {
              console.log('Switching to core edition');
              handleEditionSwitch('core');
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            animate={isAnimating ? { opacity: 0.5 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            ⚡ PurixOS Core
          </EditionTab>
          <ComparisonButton
            onClick={toggleComparison}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            active={showComparison}
          >
            📊 Compare Editions
          </ComparisonButton>
        </EditionSelector>

        <AnimatePresence mode="wait">
          <DownloadContent
            key={activeEdition}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <DownloadCard
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setHoveredCard('main')}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <CardBadge>{currentEdition.badge}</CardBadge>
              <CardTitle>{currentEdition.title}</CardTitle>
              <CardDescription>{currentEdition.description}</CardDescription>
              
              <FileInfo>
                <FileSize>Size: <span>{currentEdition.fileSize}</span></FileSize>
                <ChecksumInfo>Verified</ChecksumInfo>
              </FileInfo>

              <DownloadStats>
                <StatItem
                  as={motion.div}
                  whileHover={{ scale: 1.1, y: -2 }}
                  animate={{ 
                    scale: downloadCount > 0 ? [1, 1.05, 1] : 1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <StatValue>{parseInt(currentEdition.downloadCount) + downloadCount}</StatValue>
                  <StatLabel>Downloads</StatLabel>
                </StatItem>
                <StatItem
                  as={motion.div}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <StatValue>99.2%</StatValue>
                  <StatLabel>Uptime</StatLabel>
                </StatItem>
                <StatItem
                  as={motion.div}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <StatValue>{currentEdition.lastUpdated}</StatValue>
                  <StatLabel>Last Updated</StatLabel>
                </StatItem>
              </DownloadStats>
              
              <SystemRequirements>
                <RequirementsTitle>System Requirements</RequirementsTitle>
                <RequirementsList>
                  {currentEdition.requirements.map((req, index) => (
                    <RequirementItem key={index}>{req}</RequirementItem>
                  ))}
                </RequirementsList>
              </SystemRequirements>

              <div style={{ position: 'relative', zIndex: 10 }}>
                <DownloadButton
                  as="button"
                  onClick={() => handleDownload(currentEdition.downloadLink)}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isDownloading}
                  animate={{
                    background: isDownloading 
                      ? `linear-gradient(135deg, #667eea ${downloadProgress}%, rgba(118, 75, 162, 0.3) ${downloadProgress}%)`
                      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span>
                    {isDownloading ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid white', borderRadius: '50%' }}
                        />
                        Downloading... {downloadProgress}%
                      </motion.div>
                    ) : (
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                      >
                        ⬇️ Download Now
                      </motion.span>
                    )}
                  </span>
                </DownloadButton>
                <SecondaryButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link to={currentEdition.changelogLink}>View Changelog</Link>
                </SecondaryButton>
              </div>
            </DownloadCard>

            <DownloadCard
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onMouseEnter={() => setHoveredCard('changelog')}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <ChangelogSection>
                <ChangelogTitle>Latest Updates</ChangelogTitle>
                <ChangelogList>
                  {currentEdition.changelog.slice(0, 6).map((item, index) => (
                    <ChangelogItem 
                      key={index}
                      as={motion.li}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        x: 10,
                        color: 'rgba(255, 255, 255, 0.9)',
                        transition: { duration: 0.2 }
                      }}
                      onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
                      style={{ 
                        cursor: 'pointer',
                        background: selectedFeature === index ? 'rgba(102, 126, 234, 0.1)' : 'transparent',
                        padding: selectedFeature === index ? '8px 12px' : '0',
                        borderRadius: selectedFeature === index ? '8px' : '0',
                        border: selectedFeature === index ? '1px solid rgba(102, 126, 234, 0.3)' : 'none'
                      }}
                    >
                      {item}
                      {selectedFeature === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          style={{ 
                            marginTop: '8px', 
                            fontSize: '0.8rem', 
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontStyle: 'italic'
                          }}
                        >
                          ✨ This feature enhances your experience significantly
                        </motion.div>
                      )}
                    </ChangelogItem>
                  ))}
                </ChangelogList>
              </ChangelogSection>
            </DownloadCard>
          </DownloadContent>
        </AnimatePresence>

        {showComparison && (
          <ComparisonSection
            as={motion.div}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <ComparisonTitle>Edition Comparison</ComparisonTitle>
            <ComparisonTable>
              <ComparisonRow header>
                <ComparisonCell>Feature</ComparisonCell>
                <ComparisonCell>PurixOS Professional</ComparisonCell>
                <ComparisonCell>PurixOS Core</ComparisonCell>
              </ComparisonRow>
              <ComparisonRow
                as={motion.tr}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
              >
                <ComparisonCell>Base System</ComparisonCell>
                <ComparisonCell>🪟 Windows-Based</ComparisonCell>
                <ComparisonCell>🐧 Linux-Based</ComparisonCell>
              </ComparisonRow>
              <ComparisonRow
                as={motion.tr}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
              >
                <ComparisonCell>File Size</ComparisonCell>
                <ComparisonCell>📦 4.2 GB</ComparisonCell>
                <ComparisonCell>📦 2.8 GB</ComparisonCell>
              </ComparisonRow>
              <ComparisonRow
                as={motion.tr}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
              >
                <ComparisonCell>RAM Required</ComparisonCell>
                <ComparisonCell>🧠 4 GB</ComparisonCell>
                <ComparisonCell>🧠 2 GB</ComparisonCell>
              </ComparisonRow>
              <ComparisonRow
                as={motion.tr}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
              >
                <ComparisonCell>Target Audience</ComparisonCell>
                <ComparisonCell>💼 Power Users</ComparisonCell>
                <ComparisonCell>👨‍💻 Developers</ComparisonCell>
              </ComparisonRow>
              <ComparisonRow
                as={motion.tr}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
              >
                <ComparisonCell>Gaming Support</ComparisonCell>
                <ComparisonCell>🎮 Excellent</ComparisonCell>
                <ComparisonCell>🎮 Good</ComparisonCell>
              </ComparisonRow>
            </ComparisonTable>
          </ComparisonSection>
        )}

        <WorkspaceFeatureSection>
          <WorkspaceFeatureTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Built-in Workspace Management
          </WorkspaceFeatureTitle>
          <WorkspaceFeatureDescription
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Like Windows virtual desktops, PurixOS lets you create and switch between multiple workspace environments. 
            Each workspace is tailored for different activities - Professional, Developer, Creative, Gaming, Data Science, 
            and Secure - with specialized applications, settings, and optimizations ready when you need them.
          </WorkspaceFeatureDescription>
          
          <WorkspaceFeatureGrid>
            <WorkspaceFeatureCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FeatureIcon>�️</FeatureIcon>
              <FeatureCardTitle>Multiple Workspaces</FeatureCardTitle>
              <FeatureCardText>Create separate desktop environments for work, gaming, development, and personal use - just like Windows virtual desktops</FeatureCardText>
            </WorkspaceFeatureCard>
            
            <WorkspaceFeatureCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <FeatureIcon>⌨️</FeatureIcon>
              <FeatureCardTitle>Quick Switching</FeatureCardTitle>
              <FeatureCardText>Switch between workspaces instantly with keyboard shortcuts (Win+Tab, Win+Ctrl+D) or taskbar gestures</FeatureCardText>
            </WorkspaceFeatureCard>
            
            <WorkspaceFeatureCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <FeatureIcon>🎯</FeatureIcon>
              <FeatureCardTitle>Context Awareness</FeatureCardTitle>
              <FeatureCardText>Each workspace remembers your apps, window positions, and settings - pick up exactly where you left off</FeatureCardText>
            </WorkspaceFeatureCard>
          </WorkspaceFeatureGrid>
        </WorkspaceFeatureSection>

        <InstallationGuide>
          <GuideTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Installation Guide
          </GuideTitle>
          
          <StepsContainer>
            {installationSteps.map((step, index) => (
              <Step
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                onMouseEnter={() => setHoveredCard(`step-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <StepNumber
                  as={motion.div}
                  animate={hoveredCard === `step-${index}` ? { 
                    scale: [1, 1.2, 1],
                    rotate: [0, 360, 0]
                  } : {}}
                  transition={{ duration: 0.8 }}
                >
                  {step.number}
                </StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
                {hoveredCard === `step-${index}` && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      marginTop: '10px',
                      padding: '8px',
                      background: 'rgba(102, 126, 234, 0.1)',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}
                  >
                    💡 Tip: This step is crucial for a successful installation
                  </motion.div>
                )}
              </Step>
            ))}
          </StepsContainer>

          <AdditionalLinks>
            <LinkButton
              as={Link}
              to="/support"
              whileHover={{ scale: 1.02 }}
            >
              Get Support
            </LinkButton>
            <LinkButton
              as={Link}
              to="/support"
              whileHover={{ scale: 1.02 }}
            >
              Contact Support
            </LinkButton>
          </AdditionalLinks>
        </InstallationGuide>

        <WorkspaceSection>
          <WorkspaceTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Additional Downloads
          </WorkspaceTitle>
          <WorkspaceSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Specialized ISOs and tools for developers, testers, and advanced users.
          </WorkspaceSubtitle>

          <WorkspaceGrid>
            <WorkspaceCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <WorkspaceIcon>�️</WorkspaceIcon>
              <WorkspaceCardTitle>PurixOS Developer Edition</WorkspaceCardTitle>
              <WorkspaceDescription>
                Pre-configured development environment with essential tools, IDEs, and frameworks.
              </WorkspaceDescription>
              
              <WorkspaceFeatures>
                <WorkspaceFeature>Visual Studio Code, IntelliJ IDEA</WorkspaceFeature>
                <WorkspaceFeature>Docker, Kubernetes, Git</WorkspaceFeature>
                <WorkspaceFeature>Node.js, Python, Java SDK</WorkspaceFeature>
                <WorkspaceFeature>Database tools (MySQL, PostgreSQL)</WorkspaceFeature>
              </WorkspaceFeatures>

              <WorkspaceDownloadInfo>
                <div>File Size: <span style={{color: '#667eea', fontWeight: '500'}}>5.1 GB</span></div>
                <div>Downloads: <span style={{color: '#667eea', fontWeight: '500'}}>3,247</span></div>
              </WorkspaceDownloadInfo>
              
              <WorkspaceDownloadButton
                as="button"
                onClick={() => handleDownload("https://drive.google.com/uc?export=download&id=1CbhUV-R7kg7t-74S4iEFxccS9vcOKRbP")}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={hoveredCard === 'dev' ? { 
                  background: 'rgba(102, 126, 234, 0.2)',
                  borderColor: 'rgba(102, 126, 234, 0.6)'
                } : {}}
              >
                💻 Download Dev Edition
              </WorkspaceDownloadButton>
            </WorkspaceCard>

            <WorkspaceCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ 
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3 }
              }}
              onMouseEnter={() => setHoveredCard('gaming')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <WorkspaceIcon>🎮</WorkspaceIcon>
              <WorkspaceCardTitle>PurixOS Gaming Edition</WorkspaceCardTitle>
              <WorkspaceDescription>
                Optimized for gaming with performance tweaks, gaming tools, and minimal bloatware.
              </WorkspaceDescription>
              
              <WorkspaceFeatures>
                <WorkspaceFeature>Steam, Epic Games Store pre-installed</WorkspaceFeature>
                <WorkspaceFeature>Game Mode optimization</WorkspaceFeature>
                <WorkspaceFeature>Enhanced GPU drivers</WorkspaceFeature>
                <WorkspaceFeature>Low-latency audio configuration</WorkspaceFeature>
              </WorkspaceFeatures>

              <WorkspaceDownloadInfo>
                <div>File Size: <span style={{color: '#667eea', fontWeight: '500'}}>4.8 GB</span></div>
                <div>Downloads: <span style={{color: '#667eea', fontWeight: '500'}}>7,891</span></div>
              </WorkspaceDownloadInfo>
              
              <WorkspaceDownloadButton
                as="button"
                onClick={() => handleDownload("https://drive.google.com/uc?export=download&id=10Z-4XpNkeoKTmvKDbXjVBn3n_R9gYZqV")}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={hoveredCard === 'gaming' ? { 
                  background: 'rgba(102, 126, 234, 0.2)',
                  borderColor: 'rgba(102, 126, 234, 0.6)'
                } : {}}
              >
                🎮 Download Gaming Edition
              </WorkspaceDownloadButton>
            </WorkspaceCard>

            <WorkspaceCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ 
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3 }
              }}
              onMouseEnter={() => setHoveredCard('secure')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <WorkspaceIcon>🔒</WorkspaceIcon>
              <WorkspaceCardTitle>PurixOS Secure Edition</WorkspaceCardTitle>
              <WorkspaceDescription>
                Maximum security configuration with hardened kernel and privacy-focused tools.
              </WorkspaceDescription>
              
              <WorkspaceFeatures>
                <WorkspaceFeature>Tor Browser pre-configured</WorkspaceFeature>
                <WorkspaceFeature>Full disk encryption</WorkspaceFeature>
                <WorkspaceFeature>Firewall hardening</WorkspaceFeature>
                <WorkspaceFeature>Zero telemetry guarantee</WorkspaceFeature>
              </WorkspaceFeatures>

              <WorkspaceDownloadInfo>
                <div>File Size: <span style={{color: '#667eea', fontWeight: '500'}}>3.9 GB</span></div>
                <div>Downloads: <span style={{color: '#667eea', fontWeight: '500'}}>2,156</span></div>
              </WorkspaceDownloadInfo>
              
              <WorkspaceDownloadButton
                as="button"
                onClick={() => handleDownload("https://drive.google.com/uc?export=download&id=1CbhUV-R7kg7t-74S4iEFxccS9vcOKRbP")}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={hoveredCard === 'secure' ? { 
                  background: 'rgba(102, 126, 234, 0.2)',
                  borderColor: 'rgba(102, 126, 234, 0.6)'
                } : {}}
              >
                🔒 Download Secure Edition
              </WorkspaceDownloadButton>
            </WorkspaceCard>
          </WorkspaceGrid>
        </WorkspaceSection>
      </DownloadsContainer>

      <FloatingQuickDownload
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
      >
        <QuickDownloadButton
          onClick={() => handleDownload(currentEdition.downloadLink)}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          animate={isDownloading ? { 
            background: `conic-gradient(from 0deg, #667eea, #764ba2, #667eea)`,
            rotate: 360
          } : {}}
          transition={{ 
            rotate: { duration: 2, repeat: isDownloading ? Infinity : 0, ease: "linear" }
          }}
        >
          {isDownloading ? '⏳' : '⚡'} Quick Download
        </QuickDownloadButton>
      </FloatingQuickDownload>
    </DownloadsPageSection>
  );
};

export default DownloadsPage;
