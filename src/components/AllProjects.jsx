import { Link } from "react-router-dom";
import { FiGithub, FiExternalLink, FiFileText } from "react-icons/fi";

const SkillItem = ({ color, name }) => (
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 rounded-xs" style={{ backgroundColor: color }}></div>
    <span className="text-[9px] text-neutral-700 dark:text-neutral-300">{name}</span>
  </div>
);

const AllProjects = () => {
  const projects = [
    {
      id: "stunnet",
      title: "STUNNET",
      description: "A full-stack campus management platform featuring a centralized news feed, academic resource vault, placement board, and student directory. Integrated Cloudinary for secure file uploads.",
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
      id: "crickers",
      title: "Crickers",
      description: "A minimal, aesthetic, anonymous image-sharing platform built exclusively for cricket fans. Features a responsive, Pinterest-style masonry feed for uploading cricket moments.",
      image: "/project_previews/crickers.png", 
      skills: [
        { name: "React.js", color: "#61DAFB" },
        { name: "Node.js", color: "#339933" },
        { name: "Express.js", color: "#d4d4d8" },
        { name: "MongoDB", color: "#47A248" },
        { name: "Tailwind CSS", color: "#38B2AC" }
      ],
      liveLink: "https://crickers.vercel.app/",
      githubLink: "https://github.com/ramanbhatia3/cloudinary-playground",
    },

    {
      id: "100xdevsclone",
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

    {
      id: "gameshipperz",
      title: "GameShipperz",
      description: "A full-stack gaming e-commerce and article platform. Built completely on the MERN stack, featuring robust JWT authentication for secure user sessions and a fully responsive frontend design.",
      image: "/project_previews/gameshipperz.png", 
      skills: [
        { name: "React.js", color: "#61DAFB" },
        { name: "Node.js", color: "#339933" },
        { name: "Express.js", color: "#d4d4d8" },
        { name: "MongoDB", color: "#47A248" },
        { name: "Tailwind CSS", color: "#38B2AC" }
      ],
      liveLink: "https://gameshipperz.vercel.app/",
      githubLink: "https://github.com/ramanbhatia3/gameshipperz-mern",
    },
  ];

  return (
    <section
      id="projects"
      className="mt-12 border-black/10 dark:border-white/10"
    >
      <div className="mb-10">
        <p className="text-sm font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-widest mb-1">
          FEATURED PROJECTS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 mt-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col group"
          >
            <div className="w-full transition-transform duration-300 hover:-translate-y-1 aspect-video mb-4">
              <img
                src={project.image}
                alt={`${project.title} Preview`}
                className="w-full opacity-90 hover:opacity-100 transition-opacity rounded-sm"
              />
            </div>

            <div className="flex flex-col flex-grow">
              
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-neutral-400 dark:text-neutral-500">
                  <Link 
                    to={`/projects/${project.id}`} 
                    aria-label="Read Article"
                    className="hover:text-neutral-900 dark:hover:text-neutral-100 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <FiFileText size={18} />
                  </Link>
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label="Live Demo"
                      className="hover:text-neutral-900 dark:hover:text-neutral-100 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label="GitHub Repository"
                      className="hover:text-neutral-900 dark:hover:text-neutral-100 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <FiGithub size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-[13px] font-medium text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 line-clamp-5">
                {project.description}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap font-bold gap-x-4 gap-y-2 uppercase tracking-widest">
                  {project.skills.map((skill, idx) => (
                    <SkillItem key={idx} color={skill.color} name={skill.name} />
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-start">
        <Link
          to="/"
          className="inline-flex items-center gap-2 m-auto px-4 py-2 rounded-md text-xs font-medium border border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] transition-colors shadow-sm hover:-translate-y-0.5 transition-transform duration-300"
        >
          ← Back to Home
        </Link>
      </div>

    </section>
  );
};

export default AllProjects;