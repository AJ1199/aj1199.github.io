import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="mb-4 flex justify-center">
            <img 
              src="/name-copy.png" 
              alt="Andrew James Hollett" 
              className="h-48 md:h-64 lg:h-80 xl:h-96 object-contain"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
          <p className="text-xl text-white max-w-2xl mx-auto">
            
          </p>
        </div>

        {/* About Me Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
            <p className="text-gray-200 leading-relaxed text-lg">
              I'm a passionate game developer and digital artist with experience in C++, Lua, and various game engines. 
              I love creating pixel art and bringing interactive experiences to life through code and creativity.
            </p>
     
            <div className="flex justify-center pt-4">
              <a href="#contact" className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                <Mail size={20} />
                <span>Contacts</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;