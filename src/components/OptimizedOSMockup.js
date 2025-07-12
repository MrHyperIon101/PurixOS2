import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

// Advanced animations
const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.02) rotate(0.1deg); }
`;

const iconFloat = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-2px) rotate(0.5deg); }
  66% { transform: translateY(1px) rotate(-0.5deg); }
`;

const iconGlow = keyframes`
  0%, 100% { box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2); }
  50% { box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3); }
`;

const taskbarPulse = keyframes`
  0%, 100% { box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05); }
  50% { box-shadow: 0 -15px 40px rgba(102, 126, 234, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08); }
`;

// Premium OS Container matching website theme
const OSContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 380px;
  min-height: 300px;
  aspect-ratio: 16/10;
  background: 
    linear-gradient(135deg, 
      rgba(16, 16, 16, 0.95) 0%, 
      rgba(32, 32, 40, 0.95) 25%,
      rgba(24, 24, 30, 0.95) 50%,
      rgba(16, 16, 20, 0.95) 75%,
      rgba(12, 12, 16, 0.95) 100%
    );
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 
    0 40px 120px rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(102, 126, 234, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  border: 2px solid transparent;
  background-clip: padding-box;
  
  /* Responsive sizing */
  @media (max-width: 1200px) {
    max-width: 550px;
    height: 340px;
  }
  
  @media (max-width: 968px) {
    max-width: 500px;
    height: 310px;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    height: 280px;
    border-radius: 20px;
    margin: 0 auto;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    height: 220px;
    border-radius: 16px;
    min-height: 200px;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(
      45deg,
      rgba(102, 126, 234, 0.4) 0%,
      rgba(139, 92, 246, 0.4) 25%,
      rgba(59, 130, 246, 0.4) 50%,
      rgba(168, 85, 247, 0.4) 75%,
      rgba(102, 126, 234, 0.4) 100%
    );
    background-size: 300% 300%;
    animation: ${gradientShift} 3s ease infinite;
    border-radius: 26px;
    z-index: -1;
    
    @media (max-width: 768px) {
      border-radius: 22px;
    }
    
    @media (max-width: 480px) {
      border-radius: 18px;
    }
  }
  
  animation: ${pulse} 4s ease-in-out infinite;
`;

const Desktop = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    linear-gradient(135deg, #0a0a0a 0%, #151515 50%, #0f0f0f 100%);
  border-radius: 24px;
  padding: 25px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  overflow: hidden;
  
  @media (max-width: 768px) {
    border-radius: 20px;
    padding: 20px;
    padding-bottom: 50px;
    gap: 15px;
  }
  
  @media (max-width: 480px) {
    border-radius: 16px;
    padding: 15px;
    padding-bottom: 40px;
    gap: 12px;
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
        transparent 95px,
        rgba(102, 126, 234, 0.02) 97px
      ),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 95px,
        rgba(102, 126, 234, 0.02) 97px
      );
    pointer-events: none;
  }
  
  &::before {
    content: '✨';
    position: absolute;
    top: 15%;
    right: 20%;
    font-size: 12px;
    opacity: 0.3;
    animation: ${iconFloat} 8s ease-in-out infinite;
    animation-delay: 2s;
  }
`;

const Taskbar = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: 
    linear-gradient(135deg, 
      rgba(16, 16, 16, 0.95) 0%, 
      rgba(24, 24, 30, 0.95) 100%
    );
  backdrop-filter: blur(25px);
  border-top: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 0 0 24px 24px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 100;
  animation: ${taskbarPulse} 6s ease-in-out infinite;
  
  @media (max-width: 768px) {
    height: 42px;
    padding: 0 15px;
    border-radius: 0 0 20px 20px;
  }
  
  @media (max-width: 480px) {
    height: 36px;
    padding: 0 12px;
    border-radius: 0 0 16px 16px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20%;
    right: 20%;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(102, 126, 234, 0.6) 50%, 
      transparent 100%
    );
  }
`;

const StartButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: 
    linear-gradient(135deg, 
      rgba(102, 126, 234, 0.9) 0%, 
      rgba(139, 92, 246, 0.9) 100%
    );
  border: 1px solid rgba(102, 126, 234, 0.5);
  border-radius: 14px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  font-size: 13px;
  box-shadow: 
    0 8px 25px rgba(102, 126, 234, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (max-width: 768px) {
    gap: 6px;
    padding: 8px 12px;
    font-size: 12px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    gap: 4px;
    padding: 6px 10px;
    font-size: 11px;
    border-radius: 10px;
  }
  
  &:hover {
    background: 
      linear-gradient(135deg, 
        rgba(102, 126, 234, 1) 0%, 
        rgba(139, 92, 246, 1) 100%
      );
    transform: translateY(-1px) scale(1.02);
    box-shadow: 
      0 12px 35px rgba(102, 126, 234, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
      
    @media (max-width: 480px) {
      transform: translateY(-0.5px) scale(1.01);
      box-shadow: 
        0 6px 20px rgba(102, 126, 234, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
  }
`;

const TaskbarItems = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 20px;
  flex: 1;
  
  @media (max-width: 768px) {
    gap: 6px;
    margin-left: 15px;
  }
  
  @media (max-width: 480px) {
    gap: 4px;
    margin-left: 10px;
  }
`;

const TaskbarItem = styled(motion.div)`
  width: 36px;
  height: 36px;
  background: ${props => props.active 
    ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.5) 0%, rgba(139, 92, 246, 0.5) 100%)' 
    : 'rgba(255, 255, 255, 0.08)'
  };
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: ${props => props.active 
    ? '1px solid rgba(102, 126, 234, 0.6)' 
    : '1px solid rgba(255, 255, 255, 0.1)'
  };
  font-size: 14px;
  backdrop-filter: blur(15px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 12px;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    width: 26px;
    height: 26px;
    font-size: 11px;
    border-radius: 7px;
  }
  
  ${props => props.active && `
    &::before {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 24px;
      height: 2px;
      background: linear-gradient(90deg, rgba(102, 126, 234, 0.8), rgba(139, 92, 246, 0.8));
      border-radius: 1px;
      
      @media (max-width: 768px) {
        bottom: -6px;
        width: 18px;
        height: 1.5px;
      }
      
      @media (max-width: 480px) {
        bottom: -5px;
        width: 16px;
        height: 1px;
      }
    }
  `}
  
  &:hover {
    background: ${props => props.active 
      ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.7) 0%, rgba(139, 92, 246, 0.7) 100%)' 
      : 'rgba(255, 255, 255, 0.15)'
    };
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    
    @media (max-width: 480px) {
      transform: translateY(-1px) scale(1.03);
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
    }
  }
`;

const TaskbarTime = styled.div`
  color: #e2e8f0;
  font-size: 13px;
  font-weight: 500;
  text-align: right;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
  
  @media (max-width: 480px) {
    font-size: 10px;
    line-height: 1.1;
  }
`;

const DesktopIcon = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  padding: 8px;
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  @media (max-width: 768px) {
    gap: 4px;
    padding: 6px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    gap: 3px;
    padding: 4px;
    border-radius: 10px;
  }
  
  &:hover {
    background: rgba(102, 126, 234, 0.15);
    transform: translateY(-4px) scale(1.05);
    
    @media (max-width: 480px) {
      transform: translateY(-2px) scale(1.03);
    }
    
    &::after {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      background: linear-gradient(45deg, 
        rgba(102, 126, 234, 0.2) 0%, 
        rgba(139, 92, 246, 0.2) 100%
      );
      border-radius: 20px;
      z-index: -1;
      opacity: 0.6;
      
      @media (max-width: 480px) {
        top: -3px;
        left: -3px;
        right: -3px;
        bottom: -3px;
        border-radius: 14px;
      }
    }
  }
`;

const IconContainer = styled(motion.div)`
  width: 45px;
  height: 45px;
  background: ${props => props.gradient || 
    'linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%)'
  };
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  position: relative;
  animation: ${iconFloat} 6s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  cursor: pointer;
  
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 16px;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: 14px;
    border-radius: 8px;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    background: linear-gradient(45deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      transparent 50%, 
      rgba(255, 255, 255, 0.1) 100%
    );
    border-radius: 13px;
    z-index: -1;
    animation: ${iconGlow} 4s ease-in-out infinite;
    animation-delay: ${props => props.delay || '0s'};
    
    @media (max-width: 768px) {
      border-radius: 11px;
    }
    
    @media (max-width: 480px) {
      border-radius: 9px;
    }
  }
  
  &:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 
      0 15px 40px rgba(102, 126, 234, 0.4),
      inset 0 2px 0 rgba(255, 255, 255, 0.3);
      
    @media (max-width: 480px) {
      transform: scale(1.05) rotate(3deg);
      box-shadow: 
        0 8px 20px rgba(102, 126, 234, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }
  }
`;


const BootScreen = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at center, rgba(16, 16, 16, 0.95) 0%, rgba(8, 8, 8, 0.98) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  border-radius: 24px;
`;

const BootLogo = styled(motion.div)`
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 25%,
    #6b73ff 50%,
    #9a4993 75%,
    #667eea 100%
  );
  background-size: 400% 400%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientShift} 3s ease infinite;
  margin-bottom: 20px;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 12px;
  }
  
  &::after {
    content: '⚡';
    position: absolute;
    top: -10px;
    right: -30px;
    font-size: 1.5rem;
    animation: ${iconFloat} 3s ease-in-out infinite;
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
      top: -8px;
      right: -24px;
    }
    
    @media (max-width: 480px) {
      font-size: 1rem;
      top: -6px;
      right: -20px;
    }
  }
`;

const BootText = styled(motion.div)`
  color: #94a3b8;
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 8px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-top: 6px;
  }
`;

const LoadingBar = styled(motion.div)`
  width: 300px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 30px;
`;

const LoadingProgress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(102, 126, 234, 0.8) 0%,
    rgba(139, 92, 246, 0.8) 50%,
    rgba(59, 130, 246, 0.8) 100%
  );
  border-radius: 2px;
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
`;

const Window = styled(motion.div)`
  position: absolute;
  background: 
    linear-gradient(135deg, 
      rgba(20, 20, 25, 0.98) 0%, 
      rgba(16, 16, 20, 0.98) 100%
    );
  border-radius: 12px;
  box-shadow: 
    0 25px 80px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(102, 126, 234, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: ${props => props.zIndex || 10};
  overflow: hidden;
  min-width: 350px;
  min-height: 250px;
  max-width: 500px;
  max-height: 400px;
  
  @media (max-width: 768px) {
    min-width: 280px;
    max-width: 90%;
    min-height: 200px;
    max-height: 70%;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    min-width: 250px;
    max-width: 95%;
    min-height: 180px;
    max-height: 75%;
    border-radius: 8px;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%) !important;
  }
`;

const WindowHeader = styled.div`
  height: 40px;
  background: 
    linear-gradient(135deg, 
      rgba(102, 126, 234, 0.1) 0%, 
      rgba(139, 92, 246, 0.1) 100%
    );
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  
  @media (max-width: 768px) {
    height: 35px;
    padding: 0 12px;
  }
  
  @media (max-width: 480px) {
    height: 32px;
    padding: 0 10px;
  }
`;

const WindowTitle = styled.div`
  color: #e2e8f0;
  font-size: 14px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const WindowControls = styled.div`
  display: flex;
  gap: 8px;
  
  @media (max-width: 768px) {
    gap: 6px;
  }
  
  @media (max-width: 480px) {
    gap: 5px;
  }
`;

const WindowControl = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color || '#64748b'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
  
  @media (max-width: 480px) {
    width: 9px;
    height: 9px;
  }
  
  &:hover {
    transform: scale(1.2);
    opacity: 0.8;
    
    @media (max-width: 480px) {
      transform: scale(1.1);
    }
  }
`;

const WindowContent = styled.div`
  padding: 10px;
  color: #cbd5e1;
  font-size: 11px;
  line-height: 1.4;
  height: calc(100% - 40px);
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 8px;
    font-size: 10px;
    height: calc(100% - 35px);
  }
  
  @media (max-width: 480px) {
    padding: 6px;
    font-size: 9px;
    height: calc(100% - 32px);
    line-height: 1.3;
  }
  
  &::-webkit-scrollbar {
    width: 4px;
    
    @media (max-width: 480px) {
      width: 3px;
    }
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(102, 126, 234, 0.3);
    border-radius: 2px;
    
    &:hover {
      background: rgba(102, 126, 234, 0.5);
    }
  }
`;

const FileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 8px;
  margin-top: 8px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
    gap: 6px;
    margin-top: 6px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(45px, 1fr));
    gap: 4px;
    margin-top: 4px;
  }
`;

const FileItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  @media (max-width: 768px) {
    gap: 3px;
    padding: 4px;
    border-radius: 5px;
  }
  
  @media (max-width: 480px) {
    gap: 2px;
    padding: 3px;
    border-radius: 4px;
  }
  
  &:hover {
    background: rgba(102, 126, 234, 0.1);
    transform: translateY(-2px);
    
    @media (max-width: 480px) {
      transform: translateY(-1px);
    }
  }
`;

const FileIcon = styled.div`
  font-size: 18px;
  color: ${props => props.color || '#60a5fa'};
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const FileName = styled.div`
  font-size: 8px;
  color: #cbd5e1;
  text-align: center;
  word-break: break-word;
  
  @media (max-width: 768px) {
    font-size: 7px;
  }
  
  @media (max-width: 480px) {
    font-size: 6px;
  }
`;

const SettingsSection = styled.div`
  margin-bottom: 12px;
`;

const SettingsTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const SettingsItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px;
  border-radius: 6px;
  margin-bottom: 4px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 11px;
  
  &:hover {
    background: rgba(102, 126, 234, 0.1);
    border-color: rgba(102, 126, 234, 0.3);
  }
`;

const ToggleSwitch = styled.div`
  width: 30px;
  height: 16px;
  background: ${props => props.active ? 'linear-gradient(90deg, #667eea, #764ba2)' : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${props => props.active ? '16px' : '2px'};
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`;

const AboutSection = styled.div`
  text-align: center;
  padding: 10px 0;
`;

const OSLogo = styled.div`
  font-size: 32px;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const OSVersion = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 4px;
`;

const OSBuild = styled.div`
  font-size: 10px;
  color: #94a3b8;
  margin-bottom: 12px;
`;

const SystemInfo = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 6px;
  padding: 10px;
  margin-top: 8px;
  text-align: left;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 10px;
  
  @media (max-width: 768px) {
    font-size: 9px;
    margin-bottom: 3px;
  }
  
  @media (max-width: 480px) {
    font-size: 8px;
    margin-bottom: 2px;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoLabel = styled.span`
  color: #94a3b8;
`;

const InfoValue = styled.span`
  color: #e2e8f0;
  font-weight: 500;
`;

const StartMenu = styled(motion.div)`
  position: absolute;
  bottom: 60px;
  left: 20px;
  width: 250px;
  height: 200px;
  background: 
    linear-gradient(135deg, 
      rgba(16, 16, 16, 0.95) 0%, 
      rgba(24, 24, 30, 0.95) 100%
    );
  backdrop-filter: blur(30px);
  border-radius: 16px;
  border: 1px solid rgba(102, 126, 234, 0.2);
  box-shadow: 
    0 30px 80px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  padding: 15px;
  z-index: 200;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 160px;
    bottom: 50px;
    left: 15px;
    padding: 12px;
    border-radius: 14px;
  }
  
  @media (max-width: 480px) {
    width: calc(100% - 24px);
    max-width: 180px;
    height: 140px;
    bottom: 42px;
    left: 12px;
    right: 12px;
    padding: 10px;
    border-radius: 12px;
  }
`;

const StartMenuHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    gap: 8px;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  
  @media (max-width: 480px) {
    gap: 6px;
    padding-bottom: 8px;
    margin-bottom: 8px;
  }
`;

const UserAvatar = styled.div`
  width: 35px;
  height: 35px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
  font-weight: 600;
  
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
    border-radius: 7px;
  }
  
  @media (max-width: 480px) {
    width: 26px;
    height: 26px;
    font-size: 12px;
    border-radius: 6px;
  }
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.div`
  color: #e2e8f0;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 2px;
`;

const UserStatus = styled.div`
  color: #94a3b8;
  font-size: 11px;
`;

const MenuApps = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

const MenuApp = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: rgba(102, 126, 234, 0.1);
    transform: translateY(-2px);
  }
`;

const MenuAppIcon = styled.div`
  width: 30px;
  height: 30px;
  background: ${props => props.gradient || 
    'linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%)'
  };
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    width: 26px;
    height: 26px;
    font-size: 12px;
    border-radius: 7px;
  }
  
  @media (max-width: 480px) {
    width: 22px;
    height: 22px;
    font-size: 11px;
    border-radius: 6px;
  }
`;



// Component
const OptimizedOSMockup = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [activeWindow, setActiveWindow] = useState(null);
  const [time, setTime] = useState(new Date());
  const [settingsData, setSettingsData] = useState({
    darkMode: true,
    notifications: true,
    bluetooth: false,
    wifi: true,
    soundEffects: true
  });

  // Boot sequence - shorter for demo
  useEffect(() => {
    const bootTimer = setTimeout(() => {
      setIsBooting(false);
    }, 2000); // Reduced from 3000ms

    const progressInterval = setInterval(() => {
      setBootProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 3; // Faster progress
      });
    }, 40); // Faster updates

    return () => {
      clearTimeout(bootTimer);
      clearInterval(progressInterval);
    };
  }, []);

  // Time update
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = useCallback((date) => {
    return {
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: date.toLocaleDateString([], { month: 'short', day: 'numeric' })
    };
  }, []);

  const desktopIcons = useMemo(() => [
    { id: 1, label: 'About', icon: 'ℹ️', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { id: 2, label: 'Files', icon: '📁', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
    { id: 3, label: 'Settings', icon: '⚙️', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }
  ], []);

  const taskbarApps = useMemo(() => [
    { id: 1, icon: '📁', active: false, tooltip: 'File Manager' },
    { id: 2, icon: '⚙️', active: true, tooltip: 'Settings' },
    { id: 3, icon: 'ℹ️', active: false, tooltip: 'About' }
  ], []);

  const handleIconClick = useCallback((iconId) => {
    setActiveWindow(null); // Close any existing window first
    
    setTimeout(() => {
      if (iconId === 1) {
        setActiveWindow({
          id: 'about',
          title: 'About PurixOS',
          type: 'about',
          position: { x: 50, y: 40 },
          size: { width: 320, height: 280 }
        });
      } else if (iconId === 2) {
        setActiveWindow({
          id: 'files',
          title: 'File Manager',
          type: 'files',
          position: { x: 80, y: 50 },
          size: { width: 350, height: 260 }
        });
      } else if (iconId === 3) {
        setActiveWindow({
          id: 'settings',
          title: 'System Settings',
          type: 'settings',
          position: { x: 60, y: 30 },
          size: { width: 340, height: 300 }
        });
      }
    }, 100);
  }, []);

  const toggleStartMenu = useCallback(() => {
    setShowStartMenu(prev => !prev);
  }, []);

  const toggleSetting = useCallback((setting) => {
    setSettingsData(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  }, []);

  const renderWindowContent = useCallback(() => {
    if (!activeWindow) return null;

    switch (activeWindow.type) {
      case 'about':
        return (
          <AboutSection>
            <OSLogo>⚡</OSLogo>
            <OSVersion>PurixOS v2.1</OSVersion>
            <OSBuild>Build 2025.07.12</OSBuild>
            <SystemInfo>
              <InfoRow>
                <InfoLabel>Processor:</InfoLabel>
                <InfoValue>Quantum Core X1</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Memory:</InfoLabel>
                <InfoValue>16 GB DDR5</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Storage:</InfoLabel>
                <InfoValue>1 TB NVMe SSD</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Graphics:</InfoLabel>
                <InfoValue>Integrated AI GPU</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Uptime:</InfoLabel>
                <InfoValue>7 days, 14 hours</InfoValue>
              </InfoRow>
            </SystemInfo>
          </AboutSection>
        );

      case 'files':
        return (
          <div>
            <div style={{ marginBottom: '10px', color: '#94a3b8', fontSize: '10px' }}>
              📍 /Users/Demo/Documents
            </div>
            <FileGrid>
              {[
                { name: 'Projects', icon: '📁', color: '#60a5fa' },
                { name: 'Photos', icon: '🖼️', color: '#f59e0b' },
                { name: 'Documents', icon: '📄', color: '#10b981' },
                { name: 'Music', icon: '🎵', color: '#8b5cf6' },
                { name: 'Videos', icon: '🎬', color: '#ef4444' },
                { name: 'Downloads', icon: '⬇️', color: '#6b7280' },
                { name: 'README.md', icon: '📝', color: '#14b8a6' },
                { name: 'config.json', icon: '⚙️', color: '#f97316' }
              ].map((file, index) => (
                <FileItem
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <FileIcon color={file.color}>{file.icon}</FileIcon>
                  <FileName>{file.name}</FileName>
                </FileItem>
              ))}
            </FileGrid>
          </div>
        );

      case 'settings':
        return (
          <div>
            <SettingsSection>
              <SettingsTitle>🎨 Appearance</SettingsTitle>
              <SettingsItem onClick={() => toggleSetting('darkMode')}>
                <span>Dark Mode</span>
                <ToggleSwitch active={settingsData.darkMode} />
              </SettingsItem>
            </SettingsSection>

            <SettingsSection>
              <SettingsTitle>🔔 Notifications</SettingsTitle>
              <SettingsItem onClick={() => toggleSetting('notifications')}>
                <span>Allow Notifications</span>
                <ToggleSwitch active={settingsData.notifications} />
              </SettingsItem>
              <SettingsItem onClick={() => toggleSetting('soundEffects')}>
                <span>Sound Effects</span>
                <ToggleSwitch active={settingsData.soundEffects} />
              </SettingsItem>
            </SettingsSection>

            <SettingsSection>
              <SettingsTitle>📡 Connectivity</SettingsTitle>
              <SettingsItem onClick={() => toggleSetting('wifi')}>
                <span>Wi-Fi</span>
                <ToggleSwitch active={settingsData.wifi} />
              </SettingsItem>
              <SettingsItem onClick={() => toggleSetting('bluetooth')}>
                <span>Bluetooth</span>
                <ToggleSwitch active={settingsData.bluetooth} />
              </SettingsItem>
            </SettingsSection>
          </div>
        );

      default:
        return <div>Application content</div>;
    }
  }, [activeWindow, settingsData, toggleSetting]);

  const currentTime = formatTime(time);

  return (
    <OSContainer
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <AnimatePresence>
        {isBooting && (
          <BootScreen
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BootLogo
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              PurixOS
            </BootLogo>
            <BootText
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Initializing Revolutionary Experience...
            </BootText>
            <LoadingBar
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <LoadingProgress
                initial={{ width: "0%" }}
                animate={{ width: `${bootProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </LoadingBar>
          </BootScreen>
        )}
      </AnimatePresence>

      {!isBooting && (
        <>
          <Desktop>
            {desktopIcons.map((icon, index) => (
              <DesktopIcon
                key={icon.id}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.6, ease: "easeOut" }}
                onClick={() => handleIconClick(icon.id)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconContainer 
                  gradient={icon.gradient}
                  delay={`${index * 0.5}s`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  {icon.icon}
                </IconContainer>
              </DesktopIcon>
            ))}
          </Desktop>

          <Taskbar
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            <StartButton
              onClick={toggleStartMenu}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 8px 25px rgba(102, 126, 234, 0.4)",
                  "0 12px 35px rgba(102, 126, 234, 0.6)",
                  "0 8px 25px rgba(102, 126, 234, 0.4)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              ⚡
            </StartButton>
            
            <TaskbarItems>
              {taskbarApps.map((app, index) => (
                <TaskbarItem
                  key={app.id}
                  active={app.active}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: app.active ? [0, -1, 0] : 0
                  }}
                  transition={{ 
                    opacity: { delay: 1 + index * 0.1, duration: 0.4 },
                    scale: { delay: 1 + index * 0.1, duration: 0.4 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title={app.tooltip}
                >
                  {app.icon}
                </TaskbarItem>
              ))}
            </TaskbarItems>
            
            <TaskbarTime>
              <motion.div
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {currentTime.time}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                {currentTime.date}
              </motion.div>
            </TaskbarTime>
          </Taskbar>

          <AnimatePresence>
            {showStartMenu && (
              <StartMenu
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <StartMenuHeader>
                  <UserAvatar>U</UserAvatar>
                  <UserInfo>
                    <UserName>Demo User</UserName>
                    <UserStatus>Administrator</UserStatus>
                  </UserInfo>
                </StartMenuHeader>
                
                <MenuApps>
                  {desktopIcons.map(app => (
                    <MenuApp
                      key={app.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        handleIconClick(app.id);
                        setShowStartMenu(false);
                      }}
                    >
                      <MenuAppIcon gradient={app.gradient}>
                        {app.icon}
                      </MenuAppIcon>
                    </MenuApp>
                  ))}
                </MenuApps>
              </StartMenu>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {activeWindow && (
              <Window
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                style={{
                  left: activeWindow.position.x,
                  top: activeWindow.position.y,
                  width: activeWindow.size.width,
                  height: activeWindow.size.height
                }}
                zIndex={50}
              >
                <WindowHeader>
                  <WindowTitle>{activeWindow.title}</WindowTitle>
                  <WindowControls>
                    <WindowControl color="#ef4444" onClick={() => setActiveWindow(null)} />
                    <WindowControl color="#f59e0b" />
                    <WindowControl color="#10b981" />
                  </WindowControls>
                </WindowHeader>
                <WindowContent>
                  {renderWindowContent()}
                </WindowContent>
              </Window>
            )}
          </AnimatePresence>
        </>
      )}
    </OSContainer>
  );
};

export default OptimizedOSMockup;
