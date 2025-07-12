import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MockupContainer = styled(motion.div)`
  position: relative;
  width: 500px;
  height: 300px;
  background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%);
  border-radius: 16px;
  border: 1px solid rgba(102, 126, 234, 0.3);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transform: perspective(1200px) rotateY(-12deg) rotateX(8deg);
  transition: all 0.5s ease;
  
  &:hover {
    transform: perspective(1200px) rotateY(-8deg) rotateX(4deg) translateY(-10px);
  }
`;

const Desktop = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e  50%, #16213e 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  font-size: 24px;
  color: #667eea;
  font-weight: bold;
  text-align: center;
`;

const Taskbar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(102, 126, 234, 0.2);
  display: flex;
  align-items: center;
  padding: 0 15px;
`;

const StartButton = styled.div`
  width: 30px;
  height: 30px;
  background: #667eea;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  cursor: pointer;
  
  &:hover {
    background: #764ba2;
  }
`;

const OSMockupSimple = () => {
  return (
    <MockupContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Desktop>
        <Logo>PurixOS</Logo>
        <Taskbar>
          <StartButton>⚡</StartButton>
        </Taskbar>
      </Desktop>
    </MockupContainer>
  );
};

export default OSMockupSimple;
