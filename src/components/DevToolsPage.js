import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DevToolsSection = styled.section`
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
      radial-gradient(circle at 10% 90%, rgba(102, 126, 234, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 90% 10%, rgba(118, 75, 162, 0.03) 0%, transparent 50%);
    animation: pulse 18s ease-in-out infinite;
    opacity: 0.8;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
    50% { transform: scale(1.1) rotate(1deg); opacity: 0.6; }
  }
`;

const DevToolsContainer = styled.div`
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

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
`;

const ToolCard = styled(motion.div)`
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
    background: ${props => props.gradient || 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 127, 0.3) 50%, transparent 100%)'};
  }
`;

const ToolIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: ${props => props.background || 'rgba(0, 255, 127, 0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 24px;
`;

const ToolTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
`;

const ToolDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 24px;
`;

const ToolFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ToolFeature = styled.li`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  
  &::before {
    content: '→';
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const TechStack = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
`;

const TechStackTitle = styled.h3`
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 30px;
  font-weight: 300;
  text-align: center;
`;

const TechCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const TechCategory = styled.div`
  text-align: center;
`;

const CategoryTitle = styled.h4`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 16px;
  font-weight: 400;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

const TechItem = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
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

const DevToolsPage = () => {
  const devTools = [
    {
      icon: '⚡',
      title: 'Integrated Development Environment',
      description: 'Full-featured IDE with intelligent code completion, debugging, and project management capabilities.',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      gradient: 'linear-gradient(90deg, transparent 0%, rgba(102, 126, 234, 0.5) 50%, transparent 100%)',
      features: [
        'Multi-language syntax highlighting',
        'IntelliSense code completion',
        'Integrated terminal',
        'Git version control',
        'Extension marketplace'
      ]
    },
    {
      icon: '🐛',
      title: 'Advanced Debugging Suite',
      description: 'Comprehensive debugging tools with breakpoints, variable inspection, and performance profiling.',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      gradient: 'linear-gradient(90deg, transparent 0%, rgba(240, 147, 251, 0.5) 50%, transparent 100%)',
      features: [
        'Visual debugger with breakpoints',
        'Memory and CPU profiling',
        'Call stack analysis',
        'Variable watch windows',
        'Remote debugging support'
      ]
    },
    {
      icon: '📦',
      title: 'Package Management',
      description: 'Universal package manager supporting npm, pip, cargo, and other language-specific package systems.',
      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      gradient: 'linear-gradient(90deg, transparent 0%, rgba(79, 172, 254, 0.5) 50%, transparent 100%)',
      features: [
        'Universal package installer',
        'Dependency resolution',
        'Version management',
        'Security vulnerability scanning',
        'Private registry support'
      ]
    },
    {
      icon: '🔧',
      title: 'Build & Deployment Tools',
      description: 'Automated build systems with CI/CD integration and containerization support.',
      background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      gradient: 'linear-gradient(90deg, transparent 0%, rgba(67, 233, 123, 0.5) 50%, transparent 100%)',
      features: [
        'Multi-platform build system',
        'Docker integration',
        'CI/CD pipeline tools',
        'Automated testing',
        'Cloud deployment'
      ]
    },
    {
      icon: '🧪',
      title: 'Testing Framework',
      description: 'Comprehensive testing suite with unit tests, integration tests, and performance benchmarks.',
      background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      gradient: 'linear-gradient(90deg, transparent 0%, rgba(250, 112, 154, 0.5) 50%, transparent 100%)',
      features: [
        'Unit and integration testing',
        'Code coverage reports',
        'Performance benchmarking',
        'Mock and stub generation',
        'Test automation'
      ]
    },
    {
      icon: '📊',
      title: 'Performance Monitoring',
      description: 'Real-time application monitoring with metrics, logging, and performance optimization tools.',
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      gradient: 'linear-gradient(90deg, transparent 0%, rgba(168, 237, 234, 0.5) 50%, transparent 100%)',
      features: [
        'Real-time performance metrics',
        'Application logging',
        'Resource usage monitoring',
        'Error tracking',
        'Performance optimization suggestions'
      ]
    }
  ];

  const techStack = {
    'Programming Languages': ['JavaScript', 'TypeScript', 'Python', 'Rust', 'Go', 'C++', 'Java', 'C#'],
    'Web Technologies': ['React', 'Vue.js', 'Node.js', 'Express', 'Next.js', 'Webpack', 'Vite'],
    'Mobile Development': ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
    'Database Systems': ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'MySQL', 'Firebase'],
    'DevOps & Cloud': ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Terraform', 'Jenkins'],
    'Machine Learning': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Jupyter', 'NumPy', 'Pandas']
  };

  return (
    <DevToolsSection>
      <BackToHome
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <BackButton>
          <Link to="/">← Back to Home</Link>
        </BackButton>
      </BackToHome>

      <DevToolsContainer>
        <PageHeader>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Developer Tools
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional development environment with modern tools and frameworks. Everything you need to build, test, and deploy applications efficiently.
          </PageSubtitle>
        </PageHeader>

        <ToolsGrid>
          {devTools.map((tool, index) => (
            <ToolCard
              key={index}
              gradient={tool.gradient}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <ToolIcon background={tool.background}>
                {tool.icon}
              </ToolIcon>
              <ToolTitle>{tool.title}</ToolTitle>
              <ToolDescription>{tool.description}</ToolDescription>
              <ToolFeatures>
                {tool.features.map((feature, featureIndex) => (
                  <ToolFeature key={featureIndex}>{feature}</ToolFeature>
                ))}
              </ToolFeatures>
            </ToolCard>
          ))}
        </ToolsGrid>

        <TechStack>
          <TechStackTitle>Supported Technologies</TechStackTitle>
          <TechCategories>
            {Object.entries(techStack).map(([category, technologies]) => (
              <TechCategory key={category}>
                <CategoryTitle>{category}</CategoryTitle>
                <TechList>
                  {technologies.map((tech, index) => (
                    <TechItem key={index}>{tech}</TechItem>
                  ))}
                </TechList>
              </TechCategory>
            ))}
          </TechCategories>
        </TechStack>
      </DevToolsContainer>
    </DevToolsSection>
  );
};

export default DevToolsPage;
