'use client';

export default function Home() {
  const projects = [
    {
      title: "AI Election Sentiment",
      description:
        "An intelligent full-stack web application that performs natural language processing on text inputs to analyze and visualize election-related public sentiment trends.",
      tech: ["Python", "FastAPI", "Machine Learning", "HTML", "JavaScript"],
      github:"https://github.com/samraddhichoudhary/ai-election-sentiment.git",
      live: "#",
    },
    {
      title: "Library Management System",
      description:
        "A full-stack Learning Management System featuring a relational database to dynamically create, store, and navigate educational course syllabi and modular text lessons.",
      tech:["Python", "FastAPI", "SQLite", "SQLAlchemy", "JavaScript"],
      github:"https://github.com/samraddhichoudhary/ai-lms-portal.git",
      live: "#",
    },
    {
      title: "Nova AI Assistant",
      description: "An advanced portfolio dashboard with animations, dark mode, contact form, and GitHub integration.",
      tech: ["Next.js", "Framer Motion", "MongoDB"],
      github: "https://github.com/samraddhichoudhary/Nova-AI-Assistant.git",
      live: "#",
    },
  ];

  const skills = [
    "Python",
    "C++",
    "Tailwind CSS",
    "Git & GitHub",
    "Frontend Development",
    "Problem Solving",
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider">
            SAMRADDHI CHOUDHARY<span className="text-purple-400">.</span>
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-sm text-purple-400 mb-5">
              Software Developer & Tech Enthusiast
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Samraddhi
              </span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-8">
              Passionate engineering student focused on building modern, impactful, and visually stunning digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 rounded-2xl bg-purple-500 hover:bg-purple-600 transition font-semibold">View Projects</a>
              <a href="/resume.pdf" target="_blank" className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition font-semibold">Download Resume</a>
            </div>
          </div>

          {/* PROFILE CARD */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur opacity-30" />
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
               <img 
               src="/profile.jpg" 
               alt="Samraddhi" 
                className="w-16 h-16 rounded-2xl object-cover border border-white/10" 
                />
                <div>
                  <h2 className="text-2xl font-bold">Samraddhi Choudhary</h2>
                  <p className="text-gray-400">Engineering Student</p>
                </div>
              </div>
              <div className="space-y-5 text-gray-300 text-sm">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>Email</span>
                  <span className="text-xs">samraddhichoudhary22mail@gmail.com</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>LinkedIn</span>
                  <span>www.linkedin.com/in/samraddhi-choudhary-5235302a8</span>
                </div>
                <div className="flex justify-between">
                  <span>Location</span>
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-white/5 border border-white/10 rounded-3xl p-7 hover:-translate-y-2 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-xs">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} className="flex-1 text-center py-2 rounded-lg bg-white/10 text-sm">GitHub</a>
                <a href={project.live} className="flex-1 text-center py-2 rounded-lg bg-purple-500 text-sm">Live</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-28 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-16">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-xs">
        © 2026 Samraddhi Choudhary. Built with Next.js.
      </footer>
    </div>
  );
}