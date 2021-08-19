import React from 'react';
//Components
import Header from './components/Header';
import HeroImage from './components/HeroImage';
import Home from './components/Home'

// Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;