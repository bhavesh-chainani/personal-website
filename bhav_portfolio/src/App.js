import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import Proficiencies from './components/Proficiencies';
import Projects from './components/Projects';
import OtherPlatforms from './components/OtherPlatforms';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/style.css';
import './styles/mediaqueries.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Profile />
        <About />
        <Proficiencies />
        <Projects />
        <OtherPlatforms />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
