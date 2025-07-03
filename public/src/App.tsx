import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    // Check if font is loaded, or set a timeout to show content anyway
    const checkFont = () => {
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          setFontLoaded(true);
        });
      } else {
        // Fallback for browsers that don't support document.fonts
        setTimeout(() => {
          setFontLoaded(true);
        }, 1000);
      }
    };

    checkFont();

    // Always show content after 2 seconds regardless of font status
    const fallbackTimer = setTimeout(() => {
      setFontLoaded(true);
    }, 2000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-green-950 to-black ${fontLoaded ? 'font-loaded' : 'font-loading'}`}>
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