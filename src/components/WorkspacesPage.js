import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const WorkspacesSection = styled.section`
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
      radial-gradient(circle at 30% 70%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 70% 30%, rgba(118, 75, 162, 0.04) 0%, transparent 50%);
    animation: drift 25s ease-in-out infinite;
    opacity: 0.7;
  }
  
  @keyframes drift {
    0%, 100% { transform: translateX(-10px) translateY(-5px) rotate(0deg); }
    50% { transform: translateX(10px) translateY(5px) rotate(1deg); }
  }
`;

const WorkspacesContainer = styled.div`
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

const WorkspacesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
`;

const WorkspaceCard = styled(motion.div)`
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
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: ${props => props.background || 'rgba(255, 255, 255, 0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 24px;
`;

const WorkspaceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
`;

const WorkspaceDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 24px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 24px;
`;

const FeatureItem = styled.li`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const DemoSection = styled.div`
  margin-top: 80px;
  padding: 60px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`;

const DemoTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
`;

const DemoSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 60px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ShortcutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
`;

const ShortcutCard = styled(motion.div)`
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
      animation: shortcutCardGlow 3s linear infinite;
    }
  }
  
  @keyframes shortcutCardGlow {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }
`;

const ShortcutKeys = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 15px;
  font-family: 'Courier New', monospace;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 15px;
  border-radius: 8px;
  display: inline-block;
`;

const ShortcutDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
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

const WorkspacesPage = () => {
  const workspaces = [
    {
      icon: '💼',
      title: 'Professional Desktop',
      description: 'A dedicated virtual desktop for business productivity. Switch to this workspace for meetings, documents, and professional applications.',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      gradient: 'linear-gradient(90deg, transparent 0%, rgba(102, 126, 234, 0.5) 50%, transparent 100%)',
      features: [
        'Microsoft Office and productivity apps',
        'Business communication tools',
        'File sharing and collaboration',
        'Calendar and scheduling integration',
        'Professional video conferencing'
      ]
    },
    {
      icon: '⚡',
      title: 'Developer Desktop',
      description: 'Your coding sanctuary. This virtual desktop automatically opens your development tools and remembers your project layouts.',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      gradient: 'linear-gradient(90deg, transparent 0%, rgba(240, 147, 251, 0.5) 50%, transparent 100%)',
      features: [
        'IDE and code editors ready',
        'Terminal and command line tools',
        'Git repositories and version control',
        'Development servers and databases',
        'Testing and debugging environments'
      ]
    },
    {
      icon: '🎨',
      title: 'Creative Desktop',
      description: 'Switch to your creative space where design applications, color profiles, and creative tools are optimized and ready.',
      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      gradient: 'linear-gradient(90deg, transparent 0%, rgba(79, 172, 254, 0.5) 50%, transparent 100%)',
      features: [
        'Adobe Creative Suite and design tools',
        'Color-calibrated display settings',
        'Graphics tablet and stylus support',
        'Asset libraries and project files',
        'Rendering and export queues'
      ]
    },
    {
      icon: '🎮',
      title: 'Gaming Desktop',
      description: 'Your entertainment hub. Game launchers, streaming apps, and performance settings are pre-configured for the best experience.',
      background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      gradient: 'linear-gradient(90deg, transparent 0%, rgba(250, 112, 154, 0.5) 50%, transparent 100%)',
      features: [
        'Game launchers (Steam, Epic, etc.)',
        'Performance mode activation',
        'Gaming peripherals configuration',
        'Streaming and recording tools',
        'Discord and social gaming apps'
      ]
    },
    {
      icon: '📊',
      title: 'Analytics Desktop',
      description: 'Data analysis workspace with Jupyter notebooks, statistical tools, and visualization applications ready for your research.',
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      gradient: 'linear-gradient(90deg, transparent 0%, rgba(168, 237, 234, 0.5) 50%, transparent 100%)',
      features: [
        'Jupyter Lab and notebook environments',
        'Python, R, and data science tools',
        'Database connections and queries',
        'Machine learning frameworks',
        'Data visualization dashboards'
      ]
    },
    {
      icon: '🔒',
      title: 'Secure Desktop',
      description: 'Isolated environment for sensitive work. Enhanced encryption, secure browsing, and privacy tools protect your confidential data.',
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      gradient: 'linear-gradient(90deg, transparent 0%, rgba(255, 236, 210, 0.5) 50%, transparent 100%)',
      features: [
        'Encrypted file storage and communication',
        'Secure browser with VPN',
        'Isolated network connections',
        'Privacy-focused applications',
        'Secure document editing and sharing'
      ]
    }
  ];

  return (
    <WorkspacesSection>
      <BackToHome
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <BackButton>
          <Link to="/">← Back to Home</Link>
        </BackButton>
      </BackToHome>

      <WorkspacesContainer>
        <PageHeader>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Virtual Workspaces
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Like Windows virtual desktops, create separate environments for different activities. Switch between workspaces instantly with keyboard shortcuts (Win+Tab, Win+Ctrl+D) and maintain your workflow context across sessions.
          </PageSubtitle>
        </PageHeader>

        <WorkspacesGrid>
          {workspaces.map((workspace, index) => (
            <WorkspaceCard
              key={index}
              gradient={workspace.gradient}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <WorkspaceIcon background={workspace.background}>
                {workspace.icon}
              </WorkspaceIcon>
              <WorkspaceTitle>{workspace.title}</WorkspaceTitle>
              <WorkspaceDescription>{workspace.description}</WorkspaceDescription>
              <FeatureList>
                {workspace.features.map((feature, featureIndex) => (
                  <FeatureItem key={featureIndex}>{feature}</FeatureItem>
                ))}
              </FeatureList>
            </WorkspaceCard>
          ))}
        </WorkspacesGrid>

        <DemoSection>
          <DemoTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Quick Switching
          </DemoTitle>
          <DemoSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Master these keyboard shortcuts to seamlessly navigate between your virtual workspaces, just like Windows virtual desktops.
          </DemoSubtitle>
          
          <ShortcutGrid>
            <ShortcutCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <ShortcutKeys>Win + Tab</ShortcutKeys>
              <ShortcutDescription>
                Open Task View to see all your workspaces and switch between them visually
              </ShortcutDescription>
            </ShortcutCard>
            
            <ShortcutCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <ShortcutKeys>Win + Ctrl + D</ShortcutKeys>
              <ShortcutDescription>
                Create a new virtual workspace instantly for your next project or activity
              </ShortcutDescription>
            </ShortcutCard>
            
            <ShortcutCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <ShortcutKeys>Win + Ctrl + ←/→</ShortcutKeys>
              <ShortcutDescription>
                Switch between workspaces quickly using left and right arrow keys
              </ShortcutDescription>
            </ShortcutCard>
            
            <ShortcutCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <ShortcutKeys>Win + Ctrl + F4</ShortcutKeys>
              <ShortcutDescription>
                Close the current workspace when you're done with a project or task
              </ShortcutDescription>
            </ShortcutCard>
          </ShortcutGrid>
        </DemoSection>
      </WorkspacesContainer>
    </WorkspacesSection>
  );
};

export default WorkspacesPage;
