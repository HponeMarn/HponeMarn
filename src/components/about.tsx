import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

type Stat = {
  number: string;
  label: string;
  color: string;
};

const STATS: Stat[] = [
  { number: "1+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
  { number: "4+", label: "Projects Delivered", color: "from-purple-500 to-pink-500" },
  { number: "3", label: "Certifications", color: "from-orange-500 to-red-500" },
  { number: "100%", label: "Commitment", color: "from-green-500 to-teal-500" },
];

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <p
              data-aos="fade-right"
              className="text-purple-600 font-semibold mb-2 tracking-wider"
            >
              ABOUT ME
            </p>

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight"
            >
              Turning Complex Ideas into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Simple, Scalable Solutions
              </span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-600 mb-4 leading-relaxed"
            >
              I build real-world business systems using
              <span className="font-medium text-gray-800"> Java Spring Boot</span> and
              <span className="font-medium text-gray-800"> React</span>, focusing on clean architecture and maintainable code.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-gray-600 mb-4 leading-relaxed"
            >
              At MIT Company, I developed a full-featured Gold Shop ERP system handling 
              inventory, sales, purchase, gold saving, pawn, and audit workflows.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-gray-600 mb-6 leading-relaxed"
            >
              I also built a clinic management system using VB.NET + SQL Server, and now 
              specialize in modern full-stack development with React + Spring Boot.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex gap-4"
            >
              <a
                href="#projects"
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow hover:shadow-lg transition-all"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-2 border-2 border-purple-500 text-purple-600 rounded-lg hover:bg-purple-500 hover:text-white transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 150}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center hover:scale-105 hover:shadow-md transition-all duration-300"
              >
                <div
                  className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.number}
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;