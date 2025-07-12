import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CommunitySection = styled.section`
  padding: 120px 0;
  background: 
    radial-gradient(ellipse at top, rgba(118, 75, 162, 0.1) 0%, transparent 60%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.98) 0%, #000000 100%);
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
      radial-gradient(circle at 70% 30%, rgba(118, 75, 162, 0.05) 0%, transparent 50%);
    animation: drift 25s ease-in-out infinite;
  }
  
  @keyframes drift {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(20px, -15px); }
    50% { transform: translate(-10px, 10px); }
    75% { transform: translate(15px, 5px); }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const CommunityContent = styled.div`
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300;
  margin-bottom: 20px;
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
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #667eea, #764ba2, transparent);
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 18px;
  color: #888888;
  margin-bottom: 60px;
`;

const CommunityStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-bottom: 60px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 40px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Stat = styled(motion.div)`
  text-align: center;
`;

const StatNumber = styled(motion.div)`
  font-size: 48px;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff, #888888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  color: #888888;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const CommunityLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
`;

const CommunityLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 25px;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
`;

const LinkIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  flex-shrink: 0;
  background: ${props => {
    switch (props.type) {
      case 'instagram': return 'linear-gradient(135deg, #e4405f, #fd1d1d, #fcb045)';
      case 'github': return 'linear-gradient(135deg, #333333, #666666)';
      default: return 'linear-gradient(135deg, #ffffff, #888888)';
    }
  }};
  
  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    margin: 10px auto;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 2px;
  }
`;

const LinkContent = styled.div``;

const LinkTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const LinkDescription = styled.p`
  color: #888888;
  font-size: 14px;
`;

const TestimonialsSection = styled.div`
  margin: 80px 0;
`;

const TestimonialsTitle = styled(motion.h3)`
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 60px;
  color: #ffffff;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 30px;
  text-align: left;
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
    background: linear-gradient(
      var(--gradient-angle, 45deg),
      transparent,
      rgba(255, 255, 255, 0.05) 50%,
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(255, 255, 255, 0.2);
    
    &::before {
      opacity: 1;
      animation: testimonialGlow 2s linear infinite;
    }
  }
  
  @keyframes testimonialGlow {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }
`;

const TestimonialQuote = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 24px;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AuthorAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(45deg, #667eea, #764ba2);
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h5`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 4px;
`;

const AuthorTitle = styled.p`
  font-size: 12px;
  color: #888888;
`;

const stats = [
  { number: 8500, suffix: '+', label: 'Active Users' },
  { number: 340, suffix: '+', label: 'Contributors' },
  { number: 24, suffix: '/7', label: 'Support' }
];

const communityLinks = [
  {
    type: 'instagram',
    title: 'Instagram',
    description: 'Follow us for updates and news',
    href: '/support'
  },
  {
    type: 'github',
    title: 'GitHub',
    description: 'Contribute to development',
    href: '/support'
  }
];

const testimonials = [
  {
    quote: "Switched to PurixOS Pro for better privacy controls. The reduced telemetry and clean interface make a huge difference in my daily workflow.",
    name: "Alex Chen",
    title: "Software Developer",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23667eea'/%3E%3C/svg%3E"
  },
  {
    quote: "The Linux-based Core edition is perfect for my development setup. Lightweight, stable, and has everything I need out of the box.",
    name: "Maria Rodriguez",
    title: "DevOps Engineer",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23764ba2'/%3E%3C/svg%3E"
  },
  {
    quote: "Great alternative OS with modern hardware support. WiFi 7 and Bluetooth LE Audio work flawlessly on my new laptop.",
    name: "David Kim",
    title: "Tech Enthusiast",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%2350fa7b'/%3E%3C/svg%3E"
  }
];

const Community = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        let start = 0;
        const increment = stat.number / 100;
        const timer = setInterval(() => {
          start += increment;
          if (start >= stat.number) {
            setAnimatedStats(prev => {
              const newStats = [...prev];
              newStats[index] = stat.number;
              return newStats;
            });
            clearInterval(timer);
          } else {
            setAnimatedStats(prev => {
              const newStats = [...prev];
              newStats[index] = Math.floor(start);
              return newStats;
            });
          }
        }, 20);
      });
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    hover: {
      y: -3,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const formatStatNumber = (number, suffix) => {
    if (suffix === '+') {
      return Math.floor(number).toLocaleString() + '+';
    }
    return Math.floor(number) + suffix;
  };

  return (
    <CommunitySection id="community" ref={ref}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <CommunityContent>
            <SectionTitle variants={itemVariants}>
              Join the community.
            </SectionTitle>
            <SectionSubtitle variants={itemVariants}>
              Connect with developers, share ideas, and shape the future of PurixOS.
            </SectionSubtitle>
            
            <CommunityStats>
              {stats.map((stat, index) => (
                <Stat
                  key={stat.label}
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                >
                  <StatNumber>
                    {formatStatNumber(animatedStats[index], stat.suffix)}
                  </StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </Stat>
              ))}
            </CommunityStats>

            <TestimonialsSection>
              <TestimonialsTitle
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: 0.3 }}
              >
                What developers are saying
              </TestimonialsTitle>
              
              <TestimonialsGrid>
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <TestimonialQuote>"{testimonial.quote}"</TestimonialQuote>
                    <TestimonialAuthor>
                      <AuthorAvatar src={testimonial.avatar} alt={testimonial.name} />
                      <AuthorInfo>
                        <AuthorName>{testimonial.name}</AuthorName>
                        <AuthorTitle>{testimonial.title}</AuthorTitle>
                      </AuthorInfo>
                    </TestimonialAuthor>
                  </TestimonialCard>
                ))}
              </TestimonialsGrid>
            </TestimonialsSection>

            <CommunityLinks>
              {communityLinks.map((link, index) => (
                <CommunityLink
                  key={link.type}
                  as={Link}
                  to={link.href}
                  variants={linkVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                >
                  <LinkIcon type={link.type} />
                  <LinkContent>
                    <LinkTitle>{link.title}</LinkTitle>
                    <LinkDescription>{link.description}</LinkDescription>
                  </LinkContent>
                </CommunityLink>
              ))}
            </CommunityLinks>
          </CommunityContent>
        </motion.div>
      </Container>
    </CommunitySection>
  );
};

export default Community;