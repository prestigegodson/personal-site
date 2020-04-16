import React from 'react';
import Header from '../Header/Header'
import Profile from '../Profile/Profile'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Experiences from '../Experiences/Experiences'

function App() {
  return (
    <div>
      <Header />
      <div className="page-content">
        <div>
          <Profile />
          <About />
          <Skills />
          <Experiences />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
