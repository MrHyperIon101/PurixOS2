import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.section`
  padding: 80px 2rem 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: 
    radial-gradient(ellipse at top, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, #000000 100%);
  color: #fff;
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
      radial-gradient(circle at 25% 25%, rgba(118, 75, 162, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(102, 126, 234, 0.1) 0%, transparent 50%);
    animation: pulse 4s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 300;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0ff 50%, #c0c0ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #667eea, #764ba2, transparent);
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  line-height: 1.6;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.2), transparent);
    animation: highlight 3s ease-in-out infinite;
  }
  
  @keyframes highlight {
    0%, 100% { width: 0; }
    50% { width: 100%; }
  }
`;

const AdditionalLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const LinkButton = styled(motion.a)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  text-decoration: none;
  padding: 16px 32px;
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 20px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    transform: translateY(-50%);
    animation: glow 2s ease-in-out infinite;
  }
  
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
    50% { box-shadow: 0 0 15px rgba(255, 255, 255, 0.8), 0 0 25px rgba(102, 126, 234, 0.5); }
  }
`;

const Download = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Container>
      <Content>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Title variants={itemVariants}>
            Download Purix OS
          </Title>
          
          <Subtitle variants={itemVariants}>
            Experience the future of operating systems. 
            Built for performance, designed for simplicity.
          </Subtitle>
          
          <AdditionalLinks variants={itemVariants}>
            <LinkButton
              as={Link}
              to="/downloads"
              whileHover={{ scale: 1.02 }}
              style={{ 
                background: 'linear-gradient(90deg, #667eea, #764ba2)', 
                borderColor: 'rgba(255, 255, 255, 0.3)',
                fontWeight: '500',
                fontSize: '1.1rem',
                padding: '16px 32px'
              }}
            >
              🚀 View Downloads
            </LinkButton>
          </AdditionalLinks>
        </motion.div>
      </Content>
    </Container>
  );
};

export default Download;
