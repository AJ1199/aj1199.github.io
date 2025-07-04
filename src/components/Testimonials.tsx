import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Chen",
      image: "./testimonial-avatar.jpg",
      text: "Andrew's pixel art skills are exceptional. His attention to detail and creative vision brought our game characters to life in ways we never imagined. The retro aesthetic he created perfectly captured the nostalgic feel we were aiming for."
    },
    {
      id: 2,
      name: "Sarah Martinez",
      image: "./testimonial-avatar.jpg",
      text: "Working with Andrew on our indie game project was fantastic. His C++ programming skills and game development expertise helped us overcome complex technical challenges. He's reliable, creative, and delivers quality work on time."
    },
    {
      id: 3,
      name: "Mike Johnson",
      image: "./testimonial-avatar.jpg",
      text: "Andrew's combination of programming and artistic skills is rare in the industry. He not only coded our game mechanics flawlessly but also created stunning sprite animations that elevated the entire gaming experience."
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        {/* Testimonials Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What People Say</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Feedback from clients and collaborators I've worked with on various projects.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-green-950/50 backdrop-blur-sm rounded-2xl p-8 border border-green-900/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              {/* Name at top */}
              <h3 className="text-xl font-bold text-white mb-6 text-center">{testimonial.name}</h3>
              
              {/* Image in center */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-green-800/50">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Text at bottom */}
              <p className="text-gray-200 leading-relaxed text-center">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;