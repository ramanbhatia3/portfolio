import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const SkillItem = ({ color, name }) => (
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 rounded-xs" style={{ backgroundColor: color }}></div>
    <span className="font-mono text-[13px] text-neutral-700 dark:text-neutral-300">{name}</span>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "STUNNET",
      description: "A full-stack campus management platform featuring a centralized news feed, academic resource vault, placement board, and student directory. Integrated Cloudinary for secure file uploads and optimized database cleanup.",
      image: "/project_previews/stunnet.png", 
      skills: [
        { name: "React.js", color: "#61DAFB" },
        { name: "Node.js", color: "#339933" },
        { name: "Express.js", color: "#d4d4d8" },
        { name: "MongoDB", color: "#47A248" },
        { name: "Tailwind CSS", color: "#38B2AC" }
      ],
      liveLink: "https://stunnet.vercel.app/",
      githubLink: "https://github.com/ramanbhatia3/stunnet",
    },

    {
      title: "100xDevs Clone",
      description: "A pixel-perfect, responsive frontend clone of the 100xDevs platform built with reusable React components, modern landing pages, and interactive UI elements for seamless cross-device compatibility.",
      image: "/project_previews/100xdevsclone.png",
      skills: [
        { name: "React.js", color: "#61DAFB" },
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "HTML5", color: "#E34F26" },
        { name: "Tailwind CSS", color: "#38B2AC" }
      ],
      liveLink: "https://100xdevsclone.vercel.app/",
      githubLink: "https://github.com/ramanbhatia3/100xDevs",
    },
  ];

  return (
    <section
      id="projects"
      className="mt-16 pt-8 border-t border-black/10 dark:border-white/10"
    >
      <div className="mb-10">
        <p className="text-xs font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-widest mb-1">
          FEATURED PROJECTS
        </p>
      </div>

      <div className="flex flex-col gap-12 sm:gap-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 sm:gap-10 items-start group"
          >
            <div className="w-full md:w-1/2 lg:w-[50%] m-auto bg-neutral-200 dark:bg-[#111] shadow-sm transition-transform duration-300 hover:-translate-y-1 shrink-0 aspect-video">
              <img
                src={project.image}
                alt={`${project.title} Preview`}
                className="w-full opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>

            <div className="w-full md:w-1/2 lg:w-[45%] flex flex-col h-full py-1">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                {project.title}
              </h3>

              <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <p className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">
                  Technologies Used
                </p>
                <div className="flex flex-wrap text-xs font-semibold gap-x-5 gap-y-3">
                  {project.skills.map((skill, idx) => (
                    <SkillItem key={idx} color={skill.color} name={skill.name} />
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-2 flex gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity shadow-sm hover:-translate-y-0.5 transition-transform duration-300"
                  >
                    <FiExternalLink size={14} />
                    Live
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium border border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] transition-colors shadow-sm hover:-translate-y-0.5 transition-transform duration-300"
                  >
                    <FiGithub size={14} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-start">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 m-auto px-4 py-2 rounded-md text-xs font-medium border border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] transition-colors shadow-sm hover:-translate-y-0.5 transition-transform duration-300"
        >
          View All Projects →
        </Link>
      </div>

    </section>
  );
};

export default Projects;