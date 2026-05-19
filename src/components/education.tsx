import React from 'react';

type EducationItem = {
  institution: string;
  degree: string;
  period: string;
};

const EDUCATIONS: EducationItem[] = [
  {
    institution: "Taungoo University",
    degree: "Bachelor of Science (Physics)",
    period: "2018 - 2025",
  },
  {
    institution: "Youth Resource College",
    degree: "Diploma in Computing",
    period: "2025",
  },
   {
    institution: "Youth Resource College",
    degree: "Diploma in Business IT",
    period: "2025",
  },
  {
    institution: "One Stop Bootcamp",
    degree: "Java Developer Certificate (JDC)",
    period: "2025",
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-center text-gray-800 mb-16"
        >
          🎓 Education & Certifications
        </h2>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-3 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>

          <div className="space-y-12">
            {EDUCATIONS.map((edu, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-0 top-2 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white shadow-md"></div>

                {/* Card */}
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-xl font-bold text-gray-800">
                    {edu.institution}
                  </h3>

                  <p className="text-gray-700 font-medium mt-1">
                    {edu.degree}
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    {edu.period}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;