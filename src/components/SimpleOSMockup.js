import React from 'react';
import styled from 'styled-components';

const TestMockup = styled.div`
  width: 500px;
  height: 300px;
  background: linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 20px;
  border: 2px solid rgba(102, 126, 234, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    height: 250px;
  }
`;

const SimpleOSMockup = () => {
  return (
    <TestMockup>
      PURIXOS Preview
    </TestMockup>
  );
};

export default SimpleOSMockup;
