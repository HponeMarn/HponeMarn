import React from 'react';

type SkillCategory = {
  title: string;
  icon: string;
  color: string;
  skills: string[];
};

const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "from-blue-500 to-cyan-500",
    skills: ["React", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "from-purple-500 to-pink-500",
    skills: ["Java", "Spring Boot", "Spring MVC","Spring Security", "JPA", "REST API"],
  },
  {
    title: "Database",
    icon: "🗄️",
    color: "from-green-500 to-teal-500",
    skills: ["MySQL", "SQL Server", "MongoDB"],
  },
  {
    title: "Tools",
    icon: "🛠️",
    color: "from-orange-500 to-red-500",
    skills: ["Git", "Postman", "VS Code", "IntelliJ", "Maven"],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            data-aos="fade-up"
            className="text-purple-600 font-semibold mb-2 tracking-wider"
          >
            MY EXPERTISE
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-bold text-gray-800"
          >
            Technical Skills
          </h2>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mt-4 rounded-full"
          ></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((category, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`text-3xl mb-4 bg-gradient-to-r ${category.color} text-white w-12 h-12 flex items-center justify-center rounded-xl`}
              >
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-purple-100 hover:text-purple-600 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;