import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CuttingEdgeSection = styled.section`
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
      radial-gradient(circle at 35% 65%, rgba(102, 126, 234, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 65% 35%, rgba(118, 75, 162, 0.03) 0%, transparent 50%);
    animation: edgeAnimation 26s ease-in-out infinite;
    opacity: 0.7;
  }
  
  @keyframes edgeAnimation {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.7; }
    25% { transform: scale(1.1) rotate(1deg); opacity: 0.5; }
    75% { transform: scale(0.9) rotate(-1deg); opacity: 0.9; }
  }
`;

const CuttingEdgeContainer = styled.div`
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

const cuttingEdgeFeatures = [
  {
    id: 1,
    title: "WiFi 7 Support",
    description: "Next-generation wireless connectivity with Multi-Link Operation (MLO), 320MHz channels, and speeds up to 46 Gbps. Experience ultra-low latency and improved reliability.",
    icon: "📶",
    details: [
      "Multi-Link Operation (MLO)",
      "320MHz channel bandwidth",
      "Up to 46 Gbps speeds",
      "Ultra-low latency gaming"
    ]
  },
  {
    id: 2,
    title: "Bluetooth 6.0 LE",
    description: "Latest Bluetooth Low Energy with Channel Sounding for precise positioning, improved audio quality, and enhanced security features.",
    icon: "🔗",
    details: [
      "Channel Sounding technology",
      "Precise indoor positioning",
      "LE Audio with LC3 codec",
      "Enhanced security protocols"
    ]
  },
  {
    id: 3,
    title: "USB4 Version 2.0",
    description: "80 Gbps data transfer speeds, improved DisplayPort tunneling, and enhanced power delivery for next-generation peripherals.",
    icon: "⚡",
    details: [
      "80 Gbps data transfer",
      "240W power delivery",
      "DisplayPort 2.1 tunneling",
      "PCIe 4.0 compatibility"
    ]
  },
  {
    id: 4,
    title: "DDR5-6400 Memory",
    description: "High-performance DDR5 memory support with speeds up to 6400 MT/s, improved power efficiency, and enhanced reliability features.",
    icon: "🧠",
    details: [
      "Up to 6400 MT/s speeds",
      "50% power reduction",
      "On-die ECC support",
      "Dual 32-bit channels"
    ]
  },
  {
    id: 5,
    title: "PCIe 5.0 Support",
    description: "Latest PCIe standard with 32 GT/s bandwidth per lane, enabling next-generation GPUs and ultra-fast NVMe storage.",
    icon: "🚀",
    details: [
      "32 GT/s per lane bandwidth",
      "128 GB/s x16 slot speed",
      "Backward compatibility",
      "CXL 3.0 ready"
    ]
  },
  {
    id: 6,
    title: "AV1 Hardware Decode",
    description: "Native AV1 codec support for 8K video streaming with 50% better compression than H.265, reducing bandwidth usage.",
    icon: "🎥",
    details: [
      "8K AV1 decode support",
      "50% better compression",
      "Real-time streaming",
      "Power-efficient processing"
    ]
  }
];

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
`;

const FeatureCard = styled(motion.div)`
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
      animation: featureCardGlow 3s linear infinite;
    }
  }
  
  @keyframes featureCardGlow {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }
`;

const FeatureIcon = styled.div`
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

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
`;

const FeatureDescription = styled.p`
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

const CuttingEdgePage = () => {
  return (
    <CuttingEdgeSection>
      <BackToHome
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <BackButton>
          <Link to="/">← Back to Home</Link>
        </BackButton>
      </BackToHome>

      <CuttingEdgeContainer>
        <PageHeader>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cutting-Edge Innovation
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience tomorrow's technology today. Advanced features that push the boundaries of what's possible in computing.
          </PageSubtitle>
        </PageHeader>

        <FeaturesGrid>
          {cuttingEdgeFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <FeatureIcon>
                {feature.icon}
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <FeatureList>
                {feature.details.map((item, itemIndex) => (
                  <FeatureItem key={itemIndex}>{item}</FeatureItem>
                ))}
              </FeatureList>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </CuttingEdgeContainer>
    </CuttingEdgeSection>
  );
};

export default CuttingEdgePage;
