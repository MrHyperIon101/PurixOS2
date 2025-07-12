import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import OptimizedOSMockup from './OptimizedOSMockup';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: 
    radial-gradient(ellipse 120% 120% at 50% 120%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse 80% 80% at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%),
    linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(10, 10, 30, 0.98) 100%);
  overflow: hidden;
  padding-top: 40px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(118, 75, 162, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 60% 60%, rgba(102, 126, 234, 0.03) 0%, transparent 40%);
    opacity: 0.6;
  }
`;

const HeroContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 100px;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 20px;
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  text-align: left;
  position: relative;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.03) 0%, transparent 50%);
    animation: ambientGlow 12s ease-in-out infinite;
    pointer-events: none;
    z-index: -1;
  }
  
  @keyframes ambientGlow {
    0%, 100% { opacity: 0.4; transform: scale(0.8) rotate(0deg); }
    33% { opacity: 0.7; transform: scale(1.2) rotate(120deg); }
    66% { opacity: 0.5; transform: scale(1.0) rotate(240deg); }
  }
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const HeroVisual = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background: 
      radial-gradient(circle, rgba(102, 126, 234, 0.08) 0%, transparent 40%),
      radial-gradient(circle, rgba(118, 75, 162, 0.05) 0%, transparent 60%);
    transform: translateX(-50%) translateY(-50%);
    animation: visualGlow 15s ease-in-out infinite reverse;
    pointer-events: none;
    z-index: -1;
  }
  
  @keyframes visualGlow {
    0%, 100% { opacity: 0.6; transform: translateX(-50%) translateY(-50%) scale(1) rotate(0deg); }
    50% { opacity: 0.9; transform: translateX(-50%) translateY(-50%) scale(1.3) rotate(180deg); }
  }
  
  @media (max-width: 768px) {
    order: -1;
  }
`;

const ProductAnnouncement = styled(motion.div)`
  margin-bottom: 40px;
`;

const AnnouncementText = styled(motion.p)`
  font-size: 16px;
  font-weight: 400;
  color: rgba(102, 126, 234, 0.8);
  letter-spacing: 0.05em;
  margin-bottom: 15px;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  
  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 50%;
    width: 12px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.6));
    transform: translateY(-50%);
  }
  
  &::after {
    content: '';
    position: absolute;
    right: -20px;
    top: 50%;
    width: 12px;
    height: 1px;
    background: linear-gradient(90deg, rgba(102, 126, 234, 0.6), transparent);
    transform: translateY(-50%);
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(4rem, 12vw, 11rem);
  font-weight: 100;
  line-height: 0.85;
  margin-bottom: 30px;
  letter-spacing: -0.05em;
  background: linear-gradient(135deg, #ffffff 0%, rgba(102, 126, 234, 0.9) 50%, rgba(118, 75, 162, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
`;

const ProductName = styled(motion.span)`
  display: block;
  font-size: clamp(2.5rem, 8vw, 7rem);
  font-weight: 200;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 70%, #a8edea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.03em;
  margin-top: 15px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -30px;
    width: calc(100% + 60px);
    height: 3px;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(102, 126, 234, 0.3), 
      rgba(118, 75, 162, 0.4), 
      rgba(168, 237, 234, 0.3), 
      transparent
    );
    transform: translateY(-50%);
    opacity: 0.6;
    filter: blur(1px);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: -15px;
    width: calc(100% + 30px);
    height: 1px;
    background: linear-gradient(90deg, transparent, #667eea, #764ba2, transparent);
    transform: translateY(-50%);
    opacity: 0.8;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 22px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 40px;
  max-width: 580px;
  line-height: 1.6;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.6));
    border-radius: 1px;
  }
  
  @media (max-width: 768px) {
    font-size: 19px;
    margin-bottom: 35px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
  }
`;

const PrimaryButton = styled(motion.div)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 70%, #a8edea 100%);
  color: #ffffff;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  letter-spacing: -0.01em;
  display: inline-block;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 10px 40px rgba(102, 126, 234, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
    transform: translateX(-50%) translateY(-50%);
    transition: all 0.3s ease;
    border-radius: 50%;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 
      0 15px 50px rgba(102, 126, 234, 0.5),
      0 5px 20px rgba(118, 75, 162, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.2) inset;
    
    &::before {
      left: 100%;
    }
    
    &::after {
      width: 120px;
      height: 120px;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(0.98);
  }
  
  a {
    color: inherit;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
    padding: 20px 45px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    font-weight: inherit;
  }
`;

const SecondaryButton = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(102, 126, 234, 0.3);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 20px;
  letter-spacing: -0.01em;
  display: inline-block;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(102, 126, 234, 0.05), 
      rgba(118, 75, 162, 0.03), 
      rgba(255, 255, 255, 0.05)
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    border-color: rgba(102, 126, 234, 0.6);
    transform: translateY(-3px) scale(1.02);
    box-shadow: 
      0 12px 40px rgba(102, 126, 234, 0.2),
      0 0 0 1px rgba(102, 126, 234, 0.1) inset;
    color: #ffffff;
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(0.98);
  }
  
  a {
    color: inherit;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
    padding: 20px 45px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    font-weight: inherit;
  }
`;

// Product visualization component removed - using simplified display

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
    transform: translateX(-50%) translateY(-5px);
  }
`;

const ScrollText = styled.p`
  font-size: 12px;
  color: rgba(102, 126, 234, 0.8);
  margin-bottom: 15px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
`;

const ScrollArrow = styled(motion.div)`
  width: 2px;
  height: 40px;
  background: linear-gradient(180deg, rgba(102, 126, 234, 0.8) 0%, transparent 100%);
  margin: 0 auto;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid rgba(102, 126, 234, 0.8);
  }
`;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        filter: { duration: 0.8 }
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    }
  };

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <HeroSection id="hero">
      <HeroContainer>
        <HeroContent>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <ProductAnnouncement variants={itemVariants}>
              <AnnouncementText>Introducing</AnnouncementText>
            </ProductAnnouncement>

            <HeroTitle variants={titleVariants}>
              Purix
              <ProductName>OS</ProductName>
            </HeroTitle>

            <HeroSubtitle variants={itemVariants}>
              A revolutionary operating system designed for the modern era. 
              Pure simplicity meets powerful performance.
            </HeroSubtitle>

            <CTAContainer variants={itemVariants}>
              <PrimaryButton
                variants={buttonVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/downloads">Download now</Link>
              </PrimaryButton>
              <SecondaryButton
                variants={buttonVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/workspaces">Explore Workspaces</Link>
              </SecondaryButton>
            </CTAContainer>
          </motion.div>
        </HeroContent>

        <HeroVisual>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <OptimizedOSMockup />
          </motion.div>
        </HeroVisual>
      </HeroContainer>

      <ScrollIndicator onClick={scrollToNext}>
        <ScrollText>Scroll</ScrollText>
        <ScrollArrow
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;