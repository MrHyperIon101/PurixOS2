import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ShowcaseSection = styled.section`
  padding: 120px 0;
  position: relative;
  background: radial-gradient(ellipse at center, rgba(102, 126, 234, 0.03) 0%, transparent 70%);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 100%;
    background: linear-gradient(45deg, transparent 30%, rgba(102, 126, 234, 0.05) 50%, transparent 70%);
    animation: drift 20s ease-in-out infinite;
    pointer-events: none;
  }
  
  @keyframes drift {
    0%, 100% { transform: translateX(-20px) translateY(-10px); }
    50% { transform: translateX(20px) translateY(10px); }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ShowcaseItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin-bottom: 120px;
  
  &.reverse {
    .showcase-content {
      order: 2;
    }
    
    .showcase-visual {
      order: 1;
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
    
    &.reverse {
      .showcase-content,
      .showcase-visual {
        order: unset;
      }
    }
  }
`;

const ShowcaseContent = styled(motion.div)``;

const ShowcaseTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
    opacity: 0.8;
  }
`;

const ShowcaseDescription = styled.p`
  font-size: 18px;
  color: #888888;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const ShowcaseButton = styled(motion.button)`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  color: #ffffff;
  border: 1px solid rgba(102, 126, 234, 0.5);
  padding: 12px 24px;
  font-size: 13px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
    border-color: rgba(102, 126, 234, 0.8);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }
`;

const ShowcaseVisual = styled(motion.div)``;

// Workspace Demo Components
const WorkspaceDemo = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

const Workspace = styled(motion.div)`
  width: 80px;
  height: 50px;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid ${props => props.active ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      var(--gradient-angle, 45deg),
      transparent,
      rgba(255, 255, 255, 0.1) 50%,
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
    animation: workspaceGlow 2s linear infinite;
  }
  
  @keyframes workspaceGlow {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }
`;

const WorkspaceWindows = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
`;

const DemoWindow = styled.div`
  flex: 1;
  min-width: 15px;
  height: 12px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
`;

// Privacy Demo Components
const PrivacyDemo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const ShieldIcon = styled(motion.div)`
  width: 100px;
  height: 120px;
  position: relative;
`;

const ShieldBody = styled.div`
  width: 100%;
  height: 100px;
  background: linear-gradient(135deg, #4834d4, #686de0);
  border-radius: 50px 50px 20px 20px;
  position: relative;
  
  &::after {
    content: '✓';
    position: absolute;
    top: 35px;
    left: 50%;
    transform: translateX(-50%);
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
  }
`;

const EncryptionLines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 200px;
`;

const EncryptionLine = styled(motion.div)`
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  width: ${props => props.width || '100%'};
`;

// Code Demo Components
const CodeDemo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CodeWindow = styled.div`
  background: #1e1e1e;
  border-radius: 8px;
  width: 350px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const CodeHeader = styled.div`
  display: flex;
  gap: 8px;
  padding: 15px;
  background: #333;
  border-radius: 8px 8px 0 0;
`;

const CodeDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const CodeContent = styled.div`
  padding: 20px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 14px;
  line-height: 1.5;
`;

const CodeLine = styled.div`
  margin-bottom: 8px;
  color: #f8f8f2;
`;

// Devices Demo Components









const FuturisticDemo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 300px;
`;

const AINode = styled(motion.div)`
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NodeCore = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.8; }
  }
`;

const NodeRing = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: rgba(102, 126, 234, 0.8);
  animation: rotate 3s linear infinite;
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const QuantumField = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const QuantumParticle = styled(motion.div)`
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(45deg, #f093fb, #f5576c);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(240, 147, 251, 0.8);
  
  &:nth-child(1) {
    top: 10%;
    left: 10%;
    animation: float1 3s ease-in-out infinite;
  }
  
  &:nth-child(2) {
    top: 20%;
    right: 15%;
    animation: float2 3s ease-in-out infinite 0.5s;
  }
  
  &:nth-child(3) {
    bottom: 20%;
    left: 20%;
    animation: float3 3s ease-in-out infinite 1s;
  }
  
  &:nth-child(4) {
    bottom: 10%;
    right: 10%;
    animation: float4 3s ease-in-out infinite 1.5s;
  }
  
  @keyframes float1 {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(-20px) translateX(10px); }
  }
  
  @keyframes float2 {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(15px) translateX(-10px); }
  }
  
  @keyframes float3 {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(-10px) translateX(15px); }
  }
  
  @keyframes float4 {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(20px) translateX(-15px); }
  }
`;

const NeuralNetwork = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const NeuralConnection = styled.div`
  position: absolute;
  width: 2px;
  height: 100px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform-origin: bottom;
  
  &:nth-child(1) {
    top: 20%;
    left: 20%;
    transform: rotate(45deg);
    animation: neural 4s ease-in-out infinite;
  }
  
  &:nth-child(2) {
    top: 40%;
    right: 30%;
    transform: rotate(-30deg);
    animation: neural 4s ease-in-out infinite 1s;
  }
  
  &:nth-child(3) {
    bottom: 20%;
    left: 50%;
    transform: rotate(60deg);
    animation: neural 4s ease-in-out infinite 2s;
  }
  
  @keyframes neural {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.8; }
  }
`;

const Showcase = () => {
  const navigate = useNavigate();
  const [activeWorkspace, setActiveWorkspace] = useState(0);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWorkspace(prev => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const visualVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const encryptionVariants = {
    animate: {
      background: [
        'rgba(255, 255, 255, 0.1)',
        'rgba(72, 52, 212, 0.5)',
        'rgba(255, 255, 255, 0.1)'
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <ShowcaseSection id="showcase">
      <Container>
        <ShowcaseItem ref={ref1}>
          <ShowcaseContent
            className="showcase-content"
            variants={contentVariants}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
          >
            <ShowcaseTitle>Workspace reimagined.</ShowcaseTitle>
            <ShowcaseDescription>
              Dynamic workspaces that adapt to your workflow. Seamless multitasking with intelligent window management.
            </ShowcaseDescription>
            <ShowcaseButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('/workspaces')}
            >
              Explore Workspaces
            </ShowcaseButton>
          </ShowcaseContent>
          
          <ShowcaseVisual
            className="showcase-visual"
            variants={visualVariants}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
          >
            <WorkspaceDemo>
              {[0, 1, 2].map(index => (
                <Workspace
                  key={index}
                  active={index === activeWorkspace}
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    scale: index === activeWorkspace ? 1.1 : 1,
                    background: index === activeWorkspace 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'rgba(255, 255, 255, 0.05)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <WorkspaceWindows>
                    {index === 0 && (
                      <>
                        <DemoWindow />
                        <DemoWindow />
                      </>
                    )}
                    {index === 1 && <DemoWindow />}
                    {index === 2 && (
                      <>
                        <DemoWindow />
                        <DemoWindow />
                        <DemoWindow />
                      </>
                    )}
                  </WorkspaceWindows>
                </Workspace>
              ))}
            </WorkspaceDemo>
          </ShowcaseVisual>
        </ShowcaseItem>

        <ShowcaseItem className="reverse" ref={ref2}>
          <ShowcaseContent
            className="showcase-content"
            variants={contentVariants}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
          >
            <ShowcaseTitle>Privacy first.</ShowcaseTitle>
            <ShowcaseDescription>
              Your data stays yours. Built-in VPN, encrypted storage, and anonymous browsing by default. Advanced threat protection and zero-knowledge architecture ensure your privacy is never compromised.
            </ShowcaseDescription>
            <ShowcaseButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('/security')}
            >
              Security Features
            </ShowcaseButton>
          </ShowcaseContent>
          
          <ShowcaseVisual
            className="showcase-visual"
            variants={visualVariants}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
          >
            <PrivacyDemo>
              <ShieldIcon
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ShieldBody />
              </ShieldIcon>
              <EncryptionLines>
                <EncryptionLine
                  variants={encryptionVariants}
                  animate="animate"
                />
                <EncryptionLine
                  width="70%"
                  variants={encryptionVariants}
                  animate="animate"
                  transition={{ delay: 0.3 }}
                />
                <EncryptionLine
                  width="85%"
                  variants={encryptionVariants}
                  animate="animate"
                  transition={{ delay: 0.6 }}
                />
              </EncryptionLines>
            </PrivacyDemo>
          </ShowcaseVisual>
        </ShowcaseItem>

        <ShowcaseItem ref={ref3}>
          <ShowcaseContent
            className="showcase-content"
            variants={contentVariants}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
          >
            <ShowcaseTitle>Developer friendly.</ShowcaseTitle>
            <ShowcaseDescription>
              Native support for modern development tools. Integrated terminal, code editors, and debugging tools. Run containers, manage deployments, and collaborate seamlessly with built-in Git integration.
            </ShowcaseDescription>
            <ShowcaseButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('/dev-tools')}
            >
              Dev Tools
            </ShowcaseButton>
          </ShowcaseContent>
          
          <ShowcaseVisual
            className="showcase-visual"
            variants={visualVariants}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
          >
            <CodeDemo>
              <CodeWindow>
                <CodeHeader>
                  <CodeDot color="#ff5f57" />
                  <CodeDot color="#ffbd2e" />
                  <CodeDot color="#28ca42" />
                </CodeHeader>
                <CodeContent>
                  <CodeLine>
                    <span style={{ color: '#ff79c6' }}>const</span>{' '}
                    <span style={{ color: '#f8f8f2' }}>purixApp</span>{' '}
                    <span style={{ color: '#ff79c6' }}>=</span>{' '}
                    <span style={{ color: '#50fa7b' }}>'amazing'</span>
                  </CodeLine>
                  <CodeLine>
                    <span style={{ color: '#8be9fd' }}>console</span>
                    <span style={{ color: '#ff79c6' }}>.</span>
                    <span style={{ color: '#50fa7b' }}>log</span>
                    <span style={{ color: '#f8f8f2' }}>(purixApp)</span>
                  </CodeLine>
                </CodeContent>
              </CodeWindow>
            </CodeDemo>
          </ShowcaseVisual>
        </ShowcaseItem>

        <ShowcaseItem className="reverse" ref={ref4}>
          <ShowcaseContent
            className="showcase-content"
            variants={contentVariants}
            initial="hidden"
            animate={inView4 ? "visible" : "hidden"}
          >
            <ShowcaseTitle>Cutting-edge hardware.</ShowcaseTitle>
            <ShowcaseDescription>
              Latest technology support including WiFi 7, Bluetooth 6.0 LE, USB4 v2.0, DDR5-6400 memory, PCIe 5.0, and native AV1 hardware decode for 8K video streaming.
            </ShowcaseDescription>
            <ShowcaseButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('/cutting-edge')}
            >
              Explore Features
            </ShowcaseButton>
          </ShowcaseContent>
          
          <ShowcaseVisual
            className="showcase-visual"
            variants={visualVariants}
            initial="hidden"
            animate={inView4 ? "visible" : "hidden"}
          >
            <FuturisticDemo>
              <AINode>
                <NodeCore />
                <NodeRing />
              </AINode>
              <QuantumField>
                <QuantumParticle delay={0} />
                <QuantumParticle delay={0.5} />
                <QuantumParticle delay={1} />
                <QuantumParticle delay={1.5} />
              </QuantumField>
              <NeuralNetwork>
                <NeuralConnection />
                <NeuralConnection />
                <NeuralConnection />
              </NeuralNetwork>
            </FuturisticDemo>
          </ShowcaseVisual>
        </ShowcaseItem>
      </Container>
    </ShowcaseSection>
  );
};

export default Showcase;