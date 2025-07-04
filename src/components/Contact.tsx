import React from 'react';

const Contact = () => {
  const getImagePath = (imageName: string) => {
    // For GitHub Pages, we need to include the repository name in the path
    const basePath = import.meta.env.BASE_URL || '/';
    return `${basePath}${imageName}`;
  };

  const contactLinks = [
    {
      icon: <img src={getImagePath("gmail.png")} alt="Gmail" className="w-6 h-6 object-contain" />,
      label: "Email",
      value: "andrewhollett1199@gmail.com",
      href: "mailto:andrewhollett1199@gmail.com"
    },
    {
      icon: <img src={getImagePath("github.png")} alt="GitHub" className="w-6 h-6 object-contain" />,
      label: "GitHub",
      value: "github.com/AJ1199",
      href: "https://github.com/AJ1199"
    },
    {
      icon: <img src={getImagePath("linkedin.png")} alt="LinkedIn" className="w-6 h-6 object-contain" />,
      label: "LinkedIn",
      value: "linkedin.com/in/andrew-hollett",
      href: "https://www.linkedin.com/in/andrew-hollett-291384333/"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        {/* Contact Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
 
        </div>

        {/* Contact Links - Centered */}
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center space-x-6 p-6 border border-green-900/50 rounded-lg hover:bg-green-950/30 hover:border-green-800 transition-colors group bg-green-950/30"
              >
                <div className="text-gray-200 group-hover:text-green-300 transition-colors">
                  {link.icon}
                </div>
                <div>
                  <p className="font-medium text-white text-lg">{link.label}</p>
                  <p className="text-gray-200">{link.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;