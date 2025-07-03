import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-950 to-black">
      <Header />
      <div className="bg-gradient-to-br from-gray-900 via-green-950 to-black">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-green-950 to-black text-white py-8 border-t border-green-900/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-300">
            © 2025 Andrew Hollett. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;