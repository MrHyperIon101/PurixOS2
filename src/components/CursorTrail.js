import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const trailFade = keyframes`
  0% {
    opacity: 0.8;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
    transform: scale(0.3);
  }
`;

const TrailDot = styled.div`
  position: fixed;
  width: 6px;
  height: 6px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.6) 0%, rgba(118, 75, 162, 0.4) 100%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  animation: ${trailFade} 0.8s ease-out forwards;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
  filter: blur(0.5px);
`;

const CursorTrail = () => {
  const [trails, setTrails] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTrail = {
        id: Date.now() + Math.random(),
        x: mousePos.x,
        y: mousePos.y
      };

      setTrails(prev => [...prev, newTrail]);

      // Remove trail after animation completes
      setTimeout(() => {
        setTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
      }, 800);
    }, 30);

    return () => clearInterval(interval);
  }, [mousePos]);

  return (
    <>
      {trails.map(trail => (
        <TrailDot
          key={trail.id}
          style={{
            left: trail.x + 'px',
            top: trail.y + 'px'
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;