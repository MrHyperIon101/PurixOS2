import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(0.95); }
  50% { opacity: 0.8; transform: scale(1.05); }
`;

const bootFlicker = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
`;

const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const glitch = keyframes`
  0%, 98%, 100% { transform: translateX(0); }
  1%, 3% { transform: translateX(-2px); }
  2%, 4% { transform: translateX(2px); }
`;

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

const MockupContainer = styled.div`
  position: relative;
  width: 600px;
  height: 360px;
  background: linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 20px;
  border: 2px solid rgba(102, 126, 234, 0.2);
  box-shadow: 
    0 25px 80px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transform: perspective(1200px) rotateY(-12deg) rotateX(8deg);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  
  &:hover {
    transform: perspective(1200px) rotateY(-8deg) rotateX(4deg) translateY(-15px);
    box-shadow: 
      0 35px 100px rgba(0, 0, 0, 0.7),
      0 0 0 1px rgba(102, 126, 234, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -30px;
    left: -30px;
    right: -30px;
    bottom: -30px;
    background: radial-gradient(ellipse at center, rgba(102, 126, 234, 0.15) 0%, transparent 70%);
    filter: blur(25px);
    z-index: -1;
    animation: ${pulse} 4s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    border-radius: 20px;
    pointer-events: none;
  }
`;

const Screen = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
  overflow: hidden;
  border-radius: 18px;
`;

const BootScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #000000 0%, #0f0f23 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  border-radius: 18px;
  animation: ${bootFlicker} 2s ease-in-out;
`;

const BootLogo = styled.div`
  font-size: 36px;
  color: #667eea;
  font-weight: bold;
  margin-bottom: 30px;
  text-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
  animation: ${pulse} 2s ease-in-out infinite;
`;

const BootText = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  margin-bottom: 20px;
  text-align: center;
  animation: ${glitch} 3s infinite;
`;

const BootProgress = styled.div`
  width: 250px;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
`;

const BootProgressBar = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #667eea 100%);
  background-size: 200% 100%;
  border-radius: 3px;
  width: ${props => props.progress}%;
  transition: width 0.3s ease;
  animation: ${gradientShift} 2s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
`;

const Desktop = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  position: relative;
  background: 
    radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const DesktopIcon = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  background: ${props => props.color || 'rgba(102, 126, 234, 0.8)'};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  top: ${props => props.top};
  left: ${props => props.left};
  
  &:hover {
    transform: scale(1.1) translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }
`;

const Window = styled.div`
  position: absolute;
  width: 320px;
  height: 200px;
  background: rgba(30, 30, 30, 0.95);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(20px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const WindowHeader = styled.div`
  height: 32px;
  background: rgba(102, 126, 234, 0.1);
  border-bottom: 1px solid rgba(102, 126, 234, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  border-radius: 8px 8px 0 0;
`;

const WindowTitle = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
`;

const WindowControls = styled.div`
  display: flex;
  gap: 6px;
`;

const WindowControl = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

const WindowContent = styled.div`
  flex: 1;
  padding: 16px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 11px;
  line-height: 1.4;
  position: relative;
  overflow: hidden;
`;

const TerminalLine = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  font-family: 'Courier New', monospace;
`;

const TerminalPrompt = styled.span`
  color: #667eea;
  margin-right: 8px;
`;

const TerminalText = styled.span`
  color: #a0a0a0;
  white-space: nowrap;
  overflow: hidden;
  width: ${props => props.typing ? '0' : 'auto'};
  animation: ${props => props.typing ? typing : 'none'} 2s steps(40, end) forwards;
  border-right: ${props => props.cursor ? '2px solid #667eea' : 'none'};
  animation: ${props => props.cursor ? `${typing} 2s steps(40, end) forwards, ${blink} 1s infinite` : typing + ' 2s steps(40, end) forwards'};
`;

const Taskbar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(30px);
  border-top: 1px solid rgba(102, 126, 234, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 10;
`;

const StartButton = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const TaskbarApps = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 16px;
`;

const TaskbarApp = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.active ? 'rgba(102, 126, 234, 0.2)' : 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid ${props => props.active ? 'rgba(102, 126, 234, 0.4)' : 'transparent'};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
  
  &:hover {
    background: rgba(102, 126, 234, 0.1);
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-2px);
  }
`;

const SystemTray = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 11px;
`;

const SystemIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }
`;

const StatusDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${props => props.color};
  animation: ${pulse} 2s ease-in-out infinite;
`;

const StartMenu = styled.div`
  position: absolute;
  bottom: 55px;
  left: 16px;
  width: 280px;
  height: 320px;
  background: rgba(15, 15, 15, 0.95);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 12px;
  backdrop-filter: blur(30px);
  padding: 20px;
  z-index: 50;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.7);
  transform: translateY(10px);
  opacity: 0;
  animation: ${float} 0.3s ease forwards;
`;

const StartMenuHeader = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(102, 126, 234, 0.2);
`;

const StartMenuItem = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  cursor: pointer;
  margin-bottom: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &:hover {
    background: rgba(102, 126, 234, 0.15);
    color: rgba(255, 255, 255, 0.95);
    transform: translateX(4px);
  }
`;

const MenuIcon = styled.div`
  width: 24px;
  height: 24px;
  background: ${props => props.color};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;

const Particle = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(102, 126, 234, 0.6);
  border-radius: 50%;
  animation: ${float} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
`;

const OSMockup = () => {
  const [bootPhase, setBootPhase] = useState('booting');
  const [bootProgress, setBootProgress] = useState(0);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Boot sequence
    const bootTimer = setTimeout(() => {
      setBootPhase('desktop');
    }, 4000);

    // Progress animation
    const progressInterval = setInterval(() => {
      setBootProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    // Clock update
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearTimeout(bootTimer);
      clearInterval(progressInterval);
      clearInterval(clockInterval);
    };
  }, []);

  const handleStartMenuToggle = () => {
    setShowStartMenu(!showStartMenu);
  };

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 2
  }));

  return (
    <MockupContainer>
      <Screen>
        <ParticleContainer>
          {particles.map(particle => (
            <Particle
              key={particle.id}
              top={particle.top}
              left={particle.left}
              duration={particle.duration}
              delay={particle.delay}
            />
          ))}
        </ParticleContainer>

        <AnimatePresence>
          {bootPhase === 'booting' && (
            <BootScreen
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BootLogo>PURIXOS</BootLogo>
              <BootText>Initializing secure environment...</BootText>
              <BootProgress>
                <BootProgressBar progress={Math.min(bootProgress, 100)} />
              </BootProgress>
            </BootScreen>
          )}
        </AnimatePresence>

        {bootPhase === 'desktop' && (
          <>
            <Desktop>
              <DesktopIcon top="20px" left="20px" color="rgba(255, 87, 87, 0.8)">
                📁
              </DesktopIcon>
              <DesktopIcon top="80px" left="20px" color="rgba(46, 204, 113, 0.8)">
                💾
              </DesktopIcon>
              <DesktopIcon top="140px" left="20px" color="rgba(52, 152, 219, 0.8)">
                🌐
              </DesktopIcon>
              <DesktopIcon top="200px" left="20px" color="rgba(155, 89, 182, 0.8)">
                ⚙️
              </DesktopIcon>

              <Window
                as={motion.div}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <WindowHeader>
                  <WindowTitle>Terminal - PurixOS</WindowTitle>
                  <WindowControls>
                    <WindowControl color="#ff5f57" />
                    <WindowControl color="#ffbd2e" />
                    <WindowControl color="#28ca42" />
                  </WindowControls>
                </WindowHeader>
                <WindowContent>
                  <TerminalLine>
                    <TerminalPrompt>purix@system:~$</TerminalPrompt>
                    <TerminalText typing>Welcome to PurixOS</TerminalText>
                  </TerminalLine>
                  <TerminalLine>
                    <TerminalPrompt>purix@system:~$</TerminalPrompt>
                    <TerminalText>System status: Optimal</TerminalText>
                  </TerminalLine>
                  <TerminalLine>
                    <TerminalPrompt>purix@system:~$</TerminalPrompt>
                    <TerminalText>Security level: Maximum</TerminalText>
                  </TerminalLine>
                  <TerminalLine>
                    <TerminalPrompt>purix@system:~$</TerminalPrompt>
                    <TerminalText cursor>_</TerminalText>
                  </TerminalLine>
                </WindowContent>
              </Window>
            </Desktop>

            <Taskbar>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <StartButton onClick={handleStartMenuToggle}>
                  ⬟
                </StartButton>
                <TaskbarApps>
                  <TaskbarApp active>📁</TaskbarApp>
                  <TaskbarApp>🌐</TaskbarApp>
                  <TaskbarApp>💻</TaskbarApp>
                  <TaskbarApp>⚙️</TaskbarApp>
                </TaskbarApps>
              </div>
              
              <SystemTray>
                <SystemIndicator>
                  <StatusDot color="#28ca42" />
                  System
                </SystemIndicator>
                <SystemIndicator>
                  🔊
                </SystemIndicator>
                <SystemIndicator>
                  📶
                </SystemIndicator>
                <SystemIndicator>
                  {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </SystemIndicator>
              </SystemTray>
            </Taskbar>

            <AnimatePresence>
              {showStartMenu && (
                <StartMenu
                  as={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <StartMenuHeader>PurixOS Menu</StartMenuHeader>
                  <StartMenuItem>
                    <MenuIcon color="rgba(52, 152, 219, 0.8)">📁</MenuIcon>
                    File Explorer
                  </StartMenuItem>
                  <StartMenuItem>
                    <MenuIcon color="rgba(46, 204, 113, 0.8)">⚙️</MenuIcon>
                    Settings
                  </StartMenuItem>
                  <StartMenuItem>
                    <MenuIcon color="rgba(155, 89, 182, 0.8)">💻</MenuIcon>
                    Applications
                  </StartMenuItem>
                  <StartMenuItem>
                    <MenuIcon color="rgba(231, 76, 60, 0.8)">🔒</MenuIcon>
                    Security Center
                  </StartMenuItem>
                  <StartMenuItem>
                    <MenuIcon color="rgba(241, 196, 15, 0.8)">📊</MenuIcon>
                    System Monitor
                  </StartMenuItem>
                </StartMenu>
              )}
            </AnimatePresence>
          </>
        )}
      </Screen>
    </MockupContainer>
  );
};

export default OSMockup;