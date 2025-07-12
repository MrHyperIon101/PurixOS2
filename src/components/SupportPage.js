import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background: 
    radial-gradient(ellipse 120% 120% at 50% 120%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse 80% 80% at 80% 20%, rgba(118, 75, 162, 0.06) 0%, transparent 50%),
    linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(10, 10, 30, 0.95) 100%);
  color: #fff;
  padding: 100px 2rem 4rem;
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
      radial-gradient(circle at 25% 75%, rgba(102, 126, 234, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 75% 25%, rgba(118, 75, 162, 0.03) 0%, transparent 50%);
    animation: supportFloat 24s ease-in-out infinite;
    opacity: 0.8;
  }
  
  @keyframes supportFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
    50% { transform: translateY(-8px) rotate(0.5deg); opacity: 0.6; }
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 100;
  background: linear-gradient(135deg, #ffffff 0%, rgba(102, 126, 234, 0.9) 50%, rgba(118, 75, 162, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
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
`;

const Subtitle = styled(motion.p)`
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

const SupportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
`;

const SupportCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(102, 126, 234, 0.03) 100%);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(102, 126, 234, 0.05), 
      rgba(118, 75, 162, 0.03), 
      rgba(102, 126, 234, 0.05)
    );
    opacity: 0;
    transition: opacity 0.4s ease;
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
    border-color: rgba(102, 126, 234, 0.4);
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(102, 126, 234, 0.2);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      left: 100%;
    }
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #fff;
`;

const CardDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CardButton = styled(motion.button)`
  background: linear-gradient(90deg, #667eea, #764ba2);
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ContactForm = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 3rem;
  margin-bottom: 4rem;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: center;
`;

const FormSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: grid;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: #fff;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px 16px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Select = styled.select`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px 16px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
  }
  
  option {
    background: #1a1a1a;
    color: #fff;
  }
`;

const TextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 16px;
  color: #fff;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(90deg, #667eea, #764ba2);
  color: #fff;
  border: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  justify-self: center;
  
  &:hover {
    transform: scale(1.02);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const FAQ = styled.div`
  margin-bottom: 4rem;
`;

const FAQTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 3rem;
`;

const FAQGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const FAQItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
`;

const FAQQuestion = styled.button`
  width: 100%;
  background: none;
  border: none;
  color: #fff;
  text-align: left;
  padding: 1.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const FAQAnswer = styled.div`
  padding: ${props => props.isOpen ? '0 1.5rem 1.5rem' : '0'};
  max-height: ${props => props.isOpen ? '200px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const StatusMessage = styled(motion.div)`
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
  background: ${props => props.type === 'success' 
    ? 'rgba(34, 197, 94, 0.1)' 
    : 'rgba(239, 68, 68, 0.1)'
  };
  border: 1px solid ${props => props.type === 'success' 
    ? 'rgba(34, 197, 94, 0.3)' 
    : 'rgba(239, 68, 68, 0.3)'
  };
  color: ${props => props.type === 'success' ? '#22c55e' : '#ef4444'};
`;

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link
      const subject = encodeURIComponent(`[${formData.category}] ${formData.subject}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Category: ${formData.category}\n\n` +
        `Message:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:support@purixos.studio?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      setSubmitStatus({ type: 'success', message: 'Email client opened! Please send the email to complete your support request.' });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: '',
        message: ''
      });
      
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to open email client. Please email us directly at support@purixos.studio' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I install PurixOS?",
      answer: "Download the ISO file from our downloads page, create a bootable USB drive using tools like Rufus or Etcher, and follow our installation guide for step-by-step instructions."
    },
    {
      question: "What are the system requirements?",
      answer: "Minimum: 2GHz dual-core processor, 4GB RAM (Pro) / 2GB RAM (Core), 15-40GB storage. Recommended: Modern multi-core processor, 8GB+ RAM, SSD storage."
    },
    {
      question: "Is PurixOS free to use?",
      answer: "Yes! Both PurixOS Professional and Core editions are completely free to download and use. We believe in open access to quality operating systems."
    },
    {
      question: "Can I dual boot with Windows?",
      answer: "Yes, PurixOS supports dual boot configurations. Our installation guide includes detailed instructions for setting up dual boot with Windows or other operating systems."
    },
    {
      question: "How do I get support for technical issues?",
      answer: "You can reach out to us via email at support@purixos.studio, check our documentation, or contact us through GitHub for peer support and troubleshooting."
    },
    {
      question: "What's the difference between Pro and Core editions?",
      answer: "PurixOS Professional is Windows-based with enhanced privacy controls and reduced telemetry. PurixOS Core is Linux-based, lightweight, and developer-focused."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
          animate="visible"
        >
          <Header>
            <Title variants={itemVariants}>
              Support Center
            </Title>
            <Subtitle variants={itemVariants}>
              Get help, ask questions, and find solutions for PurixOS.
              Our team is here to assist you with any technical issues or questions.
            </Subtitle>
          </Header>

          <SupportGrid>
            <SupportCard
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <CardIcon>📧</CardIcon>
              <CardTitle>Email Support</CardTitle>
              <CardDescription>
                Get personalized help via email. We typically respond within 24 hours.
              </CardDescription>
              <CardButton
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </CardButton>
            </SupportCard>

            <SupportCard
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <CardIcon>📚</CardIcon>
              <CardTitle>Documentation</CardTitle>
              <CardDescription>
                Comprehensive guides, tutorials, and technical documentation.
              </CardDescription>
              <CardButton
                onClick={() => window.open('#', '_blank')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Docs
              </CardButton>
            </SupportCard>
          </SupportGrid>

          <ContactForm
            id="contact-form"
            variants={itemVariants}
          >
            <FormTitle>Contact Support</FormTitle>
            <FormSubtitle>
              Fill out the form below and we'll get back to you as soon as possible.
              All fields are required.
            </FormSubtitle>

            {submitStatus && (
              <StatusMessage
                type={submitStatus.type}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {submitStatus.message}
              </StatusMessage>
            )}

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <FormField>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </FormField>
                
                <FormField>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                  />
                </FormField>
              </FormGroup>

              <FormGroup>
                <FormField>
                  <Label htmlFor="category">Category</Label>
                  <Select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="Installation">Installation Help</option>
                    <option value="Technical">Technical Issue</option>
                    <option value="Bug Report">Bug Report</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="General">General Question</option>
                    <option value="Other">Other</option>
                  </Select>
                </FormField>
                
                <FormField>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief description of your issue"
                    required
                  />
                </FormField>
              </FormGroup>

              <FormField>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please provide detailed information about your issue or question..."
                  required
                />
              </FormField>

              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Opening Email...' : 'Send Message'}
              </SubmitButton>
            </Form>
          </ContactForm>

          <FAQ>
            <FAQTitle>Frequently Asked Questions</FAQTitle>
            <FAQGrid>
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FAQQuestion onClick={() => toggleFAQ(index)}>
                    {faq.question}
                    <span>{openFAQ === index ? '−' : '+'}</span>
                  </FAQQuestion>
                  <FAQAnswer isOpen={openFAQ === index}>
                    {faq.answer}
                  </FAQAnswer>
                </FAQItem>
              ))}
            </FAQGrid>
          </FAQ>
        </motion.div>
      </Content>
    </Container>
  );
};

export default SupportPage;
