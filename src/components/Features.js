import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeaturesSection = styled.section`
  padding: 160px 0;
  background: 
    radial-gradient(ellipse at center, rgba(102, 126, 234, 0.08) 0%, transparent 70%),
    linear-gradient(180deg, #000000 0%, rgba(10, 10, 20, 0.95) 100%);
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
      radial-gradient(circle at 20% 20%, rgba(118, 75, 162, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(102, 126, 234, 0.06) 0%, transparent 50%);
    animation: float 15s ease-in-out infinite alternate;
  }
  
  @keyframes float {
    0% { transform: translate(0, 0) rotate(0deg); }
    100% { transform: translate(-10px, -5px) rotate(0.5deg); }
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 120px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 200;
  margin-bottom: 30px;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0ff 50%, #c0c0ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #667eea, #764ba2, transparent);
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 20px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.6);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.4;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(102, 126, 234, 0.02) 100%);
  border-right: 1px solid rgba(102, 126, 234, 0.15);
  border-bottom: 1px solid rgba(102, 126, 234, 0.15);
  padding: 60px 40px;
  text-align: left;
  position: relative;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  backdrop-filter: blur(20px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      transparent,
      rgba(102, 126, 234, 0.08) 30%,
      rgba(118, 75, 162, 0.06) 50%,
      rgba(102, 126, 234, 0.08) 70%,
      transparent
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(102, 126, 234, 0.08) 100%);
    border-right-color: rgba(102, 126, 234, 0.3);
    border-bottom-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.2);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      left: 100%;
    }
  }
  
  &:nth-child(3n) {
    border-right: none;
  }
  
  &:nth-last-child(-n+3) {
    border-bottom: none;
  }
  
  @media (max-width: 1024px) {
    &:nth-child(3n) {
      border-right: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    &:nth-child(2n) {
      border-right: none;
    }
    
    &:nth-last-child(-n+3) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    &:nth-last-child(-n+2) {
      border-bottom: none;
    }
  }
  
  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding: 40px 30px;
    
    &:last-child {
      border-bottom: none;
    }
  }`;

const FeatureNumber = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 20px;
  letter-spacing: 0.1em;
`;

const FeatureTitle = styled.h3`
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 20px;
  color: #ffffff;
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

const FeatureDescription = styled.p`
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
  font-weight: 300;
  font-size: 16px;
`;

const features = [
  {
    number: '01',
    title: 'Pure Performance',
    description: 'Engineered for speed. Every process optimized. Every interaction instantaneous. Built on a custom kernel that delivers 40% faster boot times and 60% better memory efficiency than traditional operating systems.',
    link: null
  },
  {
    number: '02',
    title: 'Virtual Workspaces',
    description: 'Like Windows virtual desktops, but smarter. Create separate desktop environments for work, gaming, development, and personal use. Switch instantly with keyboard shortcuts and maintain your workflow context.',
    link: '/workspaces'
  },
  {
    number: '03',
    title: 'Advanced Security',
    description: 'Privacy by design. Security by default. Your data, truly yours. End-to-end encryption, zero-knowledge architecture, and military-grade protection without compromising usability.',
    link: '/security'
  },
  {
    number: '04',
    title: 'Developer Tools',
    description: 'Complete development environment with modern tools, frameworks, and debugging capabilities. Built-in IDE, package management, and deployment tools for seamless development experience.',
    link: '/dev-tools'
  },
  {
    number: '05',
    title: 'Cutting-Edge Hardware',
    description: 'Latest technology support including WiFi 7, Bluetooth 6.0 LE, USB4 v2.0, DDR5-6400 memory, PCIe 5.0, and native AV1 hardware decode for 8K video streaming.',
    link: '/cutting-edge'
  },
  {
    number: '06',
    title: 'Seamless Downloads',
    description: 'Access all editions and versions from our comprehensive download center. Pro, Lite, and specialized builds with detailed installation guides and system requirements.',
    link: '/downloads'
  }
];

const Features = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleFeatureClick = (link) => {
    if (link) {
      navigate(link);
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <FeaturesSection id="features" ref={ref}>
      <Container>
        <SectionHeader>
          <SectionTitle
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Pure Innovation
          </SectionTitle>
          <SectionSubtitle
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Every feature crafted with purpose. Every detail designed for perfection.
          </SectionSubtitle>
        </SectionHeader>
        
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.number}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleFeatureClick(feature.link)}
              whileHover={{ scale: feature.link ? 1.02 : 1 }}
              style={{ cursor: feature.link ? 'pointer' : 'default' }}
            >
              <FeatureNumber>{feature.number}</FeatureNumber>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              {feature.link && (
                <motion.div
                  style={{
                    marginTop: '16px',
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontWeight: '300'
                  }}
                  whileHover={{ color: 'rgba(255, 255, 255, 0.8)' }}
                >
                  Click to explore →
                </motion.div>
              )}
            </FeatureCard>
          ))}
        </FeatureGrid>
      </Container>
    </FeaturesSection>
  );
};

export default Features;