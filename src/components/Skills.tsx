import React from 'react';

const Skills = () => {
  const technologyLogos = [
    {
      name: "C++",
      image: "/src/assets/C++.png"
    },
    {
      name: "Love2D",
      image: "/src/assets/Love2d.png"
    },
    {
      name: "Unreal",
      image: "/src/assets/Unreal_Engine_Logo.svg copy.png"
    },
    {
      name: "Unity",
      image: "/src/assets/unity-69-logo-black-and-white.png"
    },
    {
      name: "Godot",
      image: "/src/assets/godot.png"
    },
    {
      name: "Visual Studio",
      image: "/src/assets/Visual_Studio_Icon_2022.svg.png"
    },
    {
      name: "Photoshop",
      image: "/src/assets/Photoshop-Logo-2015.jpg"
    },
    {
      name: "Aseprite",
      image: "/src/assets/Logo_Aseprite.svg.png"
    },
    {
      name: "Blender",
      image: "/src/assets/Blender_logo_no_text.svg.png"
    },
    {
      name: "Paint Tool SAI",
      image: "/src/assets/Paint-Tool-SAI-logo.png"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        {/* Skills Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Here are the programming languages and tools I have experience with.
          </p>
        </div>

        {/* Technology Logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {technologyLogos.map((tech, index) => (
            <div key={index} className="bg-green-950/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-green-900/50 flex flex-col items-center justify-center">
              <img 
                src={tech.image} 
                alt={tech.name}
                className={`object-contain mb-4 ${tech.name === 'Paint Tool SAI' ? 'w-20 h-20' : 'w-16 h-16'}`}
              />
              <p className="text-white font-medium text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;