import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "Stunnet",
      date: "May 2026",
      tech: "MERN, Tailwind CSS",
      description:
        "A full-stack campus management platform featuring a centralized news feed, academic resource vault, and Cloudinary integration for secure uploads.",
      liveLink: "https://stunnet.vercel.app/",
      githubLink: "https://github.com/ramanbhatia3/stunnet",
    },
    {
      title: "CityCare",
      date: "October 2025",
      tech: "MERN, Tailwind CSS",
      description:
        "A hackathon-winning civic issue reporting platform. Bridges citizens and authorities with real-time tracking and secure JWT/OTP authentication.",
      liveLink: "https://citycarepseudocoders.vercel.app/",
      githubLink: "https://github.com/ramanbhatia3/CityCare",
    },
    {
      title: "100xDevs Clone",
      date: "April 2026",
      tech: "React.js, Tailwind",
      description:
        "A pixel-perfect, responsive frontend clone of the 100xDevs platform built with reusable React components and modern UI elements.",
      liveLink: "https://100xdevsclone.vercel.app/",
      githubLink: "https://github.com/ramanbhatia3/100xDevs",
    },
  ];

  return (
    <section
      id="projects"
      className="mt-16 pt-8 border-t border-black/10 dark:border-white/10"
    >
      <div className="mb-6 flex items-baseline justify-between">
        <div>
          <p className="text-xs font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-widest mb-6">
            Projects
          </p>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col p-4 border border-black/10 dark:border-white/10 rounded-xl bg-neutral-50 dark:bg-[#161616] hover:border-black/20 dark:hover:border-white/20 transition-colors group"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-[15px] font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                {project.title}
              </h3>
              <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                {project.date}
              </span>
            </div>

            <p className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 mb-2">
              {project.tech}
            </p>

            <p className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
              {project.description}
            </p>


            <div className="flex gap-3 mt-auto pt-4 border-t border-black/5 dark:border-white/5">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <FiGithub size={16} />
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  aria-label="Live Demo"
                >
                  <FiExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
