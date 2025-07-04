import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const getImagePath = (imageName: string) => {
    return import.meta.env.DEV ? `/${imageName}` : `/AJ1199.github.io/${imageName}`;
  };

  const projects = [
    {
      id: 1,
      title: "Dungeon Escape",
      description: "This game has an atari like artstyle with gameplay similar to beserk.",
      image: getImagePath("screenshot-2.png"),
      technologies: ["Lua", "Love2d"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Duck Hunt PC",
      description: "A recreation of the game Duck hunt for the nes. This game uses the mouse to aim and shoot.",
      image: getImagePath("screenshot-1.png"),
      technologies: ["c++", "Sdl"],
  
    },
  ];

  const spriteArt = [
    {
      id: 1,
      title: "Super Mushroom",
      image: getImagePath("mushroom.png"),
    },
    {
      id: 2,
      title: "My Cat",
      image: getImagePath("jb.png"),
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        {/* Projects Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            A collection of games and interactive experiences I've created using various technologies and game engines.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {projects.map((project) => (
            <div key={project.id} className="bg-green-950/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-green-900/50">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-200 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-green-900/70 text-green-100 text-sm rounded-full font-medium border border-green-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Sprite Art Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Sprite Art</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Pixel art I created in Aseprite for various projects and personal artwork.
          </p>
        </div>

        {/* Sprite Art Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {spriteArt.map((sprite) => (
            <div key={sprite.id} className="bg-green-950/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-green-900/50 hover:scale-105">
              {/* Sprite Image */}
              <div className="relative overflow-hidden bg-white/10 p-8 flex items-center justify-center min-h-[200px]">
                <img 
                  src={sprite.image} 
                  alt={sprite.title}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>

              {/* Sprite Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{sprite.title}</h3>
                <p className="text-gray-200 text-sm">{sprite.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;