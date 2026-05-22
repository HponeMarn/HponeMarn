import React from 'react';

const Hero: React.FC = () => {
  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-[#0B111E] py-12 md:py-0"
    >
      {/* MATHEMATICAL MATRIX ANIMATIONS */}
      <style>{`
        @keyframes crazy-orbit-left {
          0% { transform: translate(0px, 0px) rotate(-10deg) scale(1); opacity: 0.7; }
          33% { transform: translate(-15px, -20px) rotate(-4deg) scale(1.08); opacity: 1; }
          66% { transform: translate(10px, -10px) rotate(-15deg) scale(0.92); opacity: 0.6; }
          100% { transform: translate(0px, 0px) rotate(-10deg) scale(1); opacity: 0.7; }
        }
        @keyframes crazy-orbit-right {
          0% { transform: translate(0px, 0px) rotate(8deg) scale(1); opacity: 0.7; }
          50% { transform: translate(20px, 15px) rotate(15deg) scale(1.1); opacity: 1; }
          100% { transform: translate(0px, 0px) rotate(8deg) scale(1); opacity: 0.7; }
        }
        @keyframes glitch-glow {
          0%, 100% { border-color: rgba(6, 182, 212, 0.3); box-shadow: 0 0 15px rgba(6, 182, 212, 0.15); }
          50% { border-color: rgba(59, 130, 246, 0.7); box-shadow: 0 0 30px rgba(59, 130, 246, 0.4); }
        }
        @keyframes soft-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes border-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .animate-tech-left { animation: crazy-orbit-left 8s ease-in-out infinite; }
        .animate-tech-right { animation: crazy-orbit-right 10s ease-in-out infinite; }
        .glitch-box { animation: glitch-glow 4s ease-in-out infinite; }
        .float-slow { animation: soft-float 6s ease-in-out infinite; }
        .border-pulse { animation: border-pulse 3s ease-in-out infinite; }
      `}</style>

      {/* BACKGROUND GLOWS - Enhanced */}
      <div className="absolute top-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 text-white space-y-6 z-30 text-center lg:text-left">
            <div data-aos="fade-up" className="flex items-center gap-2 justify-center lg:justify-start">
              <span className="text-xl animate-bounce">👋</span>
              <p className="text-slate-300 tracking-wide text-base md:text-lg">
                Hi, I'm <span className="text-white font-bold text-xl md:text-2xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">Hpone Marn</span>
              </p>
            </div>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] tracking-tight"
            >
              Building Real-World <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                Business Systems
              </span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-slate-400 max-w-xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed font-light"
            >
              Full Stack Developer specializing in{" "}
              <span className="text-white font-medium underline decoration-cyan-400/40 underline-offset-4">Spring Boot</span>{" "}
              and{" "}
              <span className="text-white font-medium underline decoration-blue-400/40 underline-offset-4">React</span>
              , building scalable ERP systems and enterprise business workflows.
            </p>

            <div data-aos="fade-up" data-aos-delay="300" className="flex gap-4 pt-2 flex-wrap justify-center lg:justify-start">
              <a
                href="RESUME_HPONE_MARN.pdf"
                target="_blank"
                className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-[0_4px_20px_rgba(6,182,212,0.25)] hover:shadow-[0_4px_30px_rgba(6,182,212,0.45)] hover:-translate-y-0.5"
              >
                Download CV →
              </a>
              <button
                onClick={handleContact}
                className="px-8 py-3.5 bg-slate-900/80 border border-slate-700/80 text-slate-200 rounded-xl font-semibold hover:text-white hover:bg-slate-800/80 hover:border-slate-500 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* RIGHT HERO IMAGE AREA - Refined Design */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="lg:col-span-5 relative flex flex-col justify-center items-center min-h-[500px] sm:min-h-[580px] mt-6 lg:mt-0"
          >
            {/* Outer Container */}
            <div className="relative w-72 sm:w-88 md:w-96 h-[420px] sm:h-[480px] perspective-1000 group">

              {/* 1. CODE TECH CARD - Improved position & design */}
              <div className="absolute -top-8 -left-8 sm:-top-10 sm:-left-14 lg:-left-20 w-40 sm:w-52 h-40 sm:h-48 bg-gradient-to-br from-slate-900 to-slate-950 backdrop-blur-xl rounded-2xl p-3 sm:p-4 shadow-2xl z-30 animate-tech-left border border-cyan-500/30 glitch-box hover:scale-105 transition-transform duration-300">
                <div className="flex justify-between items-center mb-2 border-b border-slate-800 pb-1.5">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-[8px] font-mono text-cyan-400 tracking-wider bg-cyan-500/10 px-2 py-0.5 rounded">SPRING.IO</span>
                </div>
                <div className="font-mono text-[9px] sm:text-[10px] space-y-1 text-slate-300">
                  <p className="text-purple-400">@RestController</p>
                  <p className="text-cyan-400">class <span className="text-yellow-400">ERPAPI</span> &#123;</p>
                  <p className="pl-3 text-slate-500 italic">// Safe Enterprise Workflow</p>
                  <p className="text-cyan-400">&#125;</p>
                </div>
              </div>

              {/* 2. METRICS TECH CARD - Enhanced with more metrics */}
              <div className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-14 lg:-right-20 w-44 sm:w-56 h-44 sm:h-52 bg-gradient-to-tl from-slate-900 to-slate-950 backdrop-blur-xl rounded-2xl p-3 sm:p-4 shadow-2xl z-30 animate-tech-right border border-blue-500/30 glitch-box hover:scale-105 transition-transform duration-300">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 tracking-wider bg-blue-500/10 px-2 py-0.5 rounded">PERFORMANCE</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-[9px] mb-1 font-mono text-slate-400">
                      <span>Server Load</span>
                      <span className="text-cyan-400 font-bold">12%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 w-[12%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[9px] mb-1 font-mono text-slate-400">
                      <span>Uptime</span>
                      <span className="text-emerald-400 font-bold">99.99%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 w-[99%] rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  {/* New Metric */}
                  <div>
                    <div className="flex justify-between text-[9px] mb-1 font-mono text-slate-400">
                      <span>Response Time</span>
                      <span className="text-purple-400 font-bold">&lt;50ms</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[98%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. MAIN PORTRAIT - Enhanced with better visual effects */}
              <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_50px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_80px_rgba(6,182,212,0.5)] transition-all duration-700 z-20 float-slow">
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 blur-xl opacity-40 border-pulse"></div>
                
                <div className="relative w-full h-full rounded-[21px] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950">
                  <img
                    src="photo_2026-05-22_20-20-44.jpg"
                    alt="Hpone Marn"
                    className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  
                  {/* Gradient overlays for better blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/0 to-blue-500/5"></div>

                  {/* Enhanced Location Badge */}
                  {/* <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-xl border border-slate-700/80 px-4 py-3 rounded-xl flex justify-between items-center shadow-2xl hover:border-cyan-500/50 transition-all duration-300">
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">📍 Location</p>
                      <p className="text-xs sm:text-sm font-black text-white tracking-wide">Yangon, Myanmar</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center h-6 w-6 rounded-lg bg-cyan-500/15 border border-cyan-500/40">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                      </div>
                      <span className="text-[10px] text-cyan-400 font-mono hidden sm:inline">ACTIVE</span>
                    </div>
                  </div> */}

                  {/* Status badge on top */}
                  {/* <div className="absolute top-4 right-4 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 px-2 py-1 rounded-lg">
                    <span className="text-[8px] text-emerald-300 font-mono tracking-wider">● AVAILABLE</span>
                  </div> */}
                </div>
              </div>

              {/* Decorative ring behind image */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;