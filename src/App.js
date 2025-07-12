import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Download from './components/Download';
import Community from './components/Community';
import Footer from './components/Footer';
import CursorTrail from './components/CursorTrail';
import DownloadsPage from './components/DownloadsPage';
import ProChangelog from './components/ProChangelog';
import CoreChangelog from './components/CoreChangelog';
import WorkspacesPage from './components/WorkspacesPage';
import SecurityPage from './components/SecurityPage';
import DevToolsPage from './components/DevToolsPage';
import CuttingEdgePage from './components/CuttingEdgePage';
import SupportPage from './components/SupportPage';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
    font-size: 16px;
    
    @media (max-width: 768px) {
      scroll-padding-top: 80px;
      font-size: 14px;
    }
    
    @media (max-width: 480px) {
      scroll-padding-top: 70px;
      font-size: 13px;
    }
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 400;
    line-height: 1.4;
    color: #ffffff;
    background: #000000;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    
    @media (max-width: 768px) {
      line-height: 1.5;
    }
  }
  
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 10% 10%, rgba(102, 126, 234, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 90% 90%, rgba(118, 75, 162, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.002) 0%, transparent 70%);
    pointer-events: none;
    z-index: -1;
    animation: backgroundShift 30s ease-in-out infinite;
  }
  
  @keyframes backgroundShift {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 4px;
    
    &:hover {
      background: linear-gradient(135deg, #7c8ef0, #8b5cb8);
    }
  }
  
  ::selection {
    background: rgba(102, 126, 234, 0.3);
    color: #ffffff;
  }
  
  ::-moz-selection {
    background: rgba(102, 126, 234, 0.3);
    color: #ffffff;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  background: #000000;
`;

const HomePage = () => (
  <>
    <Hero />
    <Features />
    <Showcase />
    <Download />
    <Community />
  </>
);

function App() {
  return (
    <>
      <CursorTrail />
      <Router>
        <ScrollToTop />
        <GlobalStyle />
        <AppContainer>
          <Navbar />
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/downloads" element={<DownloadsPage />} />
              <Route path="/pro-changelog" element={<ProChangelog />} />
              <Route path="/core-changelog" element={<CoreChangelog />} />
              <Route path="/workspaces" element={<WorkspacesPage />} />
              <Route path="/security" element={<SecurityPage />} />
              <Route path="/devtools" element={<DevToolsPage />} />
              <Route path="/cutting-edge" element={<CuttingEdgePage />} />
              <Route path="/support" element={<SupportPage />} />
            </Routes>
          </PageTransition>
          <Footer />
        </AppContainer>
      </Router>
    </>
  );
}

export default App;
