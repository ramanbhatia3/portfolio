import { useParams, Link } from "react-router-dom";
import { FiGithub, FiExternalLink, FiArrowLeft, FiCheckCircle } from "react-icons/fi";

const projectData = {
  "stunnet": {
    title: "STUNNET",
    tagline: "The entire campus. In your pocket.",
    image: "/project_previews/stunnet.png",
    liveLink: "https://stunnet.vercel.app/",
    githubLink: "https://github.com/ramanbhatia3/stunnet",
    overview: "STUNNET is a centralized, authenticated full-stack campus networking platform built to eliminate chaotic messaging groups. It empowers students and administrators to seamlessly share verified academic notes, recover lost essentials, discover placements, and build a digital engineering legacy.",
    features: [
      { title: "Institutional Authentication", desc: "Strict Roll Number-based access. Includes an interactive request system for account creation and password resets, managed entirely by admins." },
      { title: "Resource Vault", desc: "A peer-reviewed hub to upload, upvote, and directly read study notes, previous year question papers, and lab manuals natively in the browser." },
      { title: "Placements Cell", desc: "An admin-curated board for verified internships, hackathons, and full-time roles to protect students from unverified listings." },
      { title: "Lost & Found Hub", desc: "Image-supported tracking threads to quickly recover misplaced items on campus." },
      { title: "Campus Network", desc: "Discover batchmates, view their tech stacks, explore their GitHub portfolios, and build connections via the Follow/Unfollow system." },
      { title: "Admin Command Center", desc: "A powerful, protected dashboard for administrators to approve/reject onboarding requests, manually register users, and override passwords." }
    ],
    techStack: ["React.js (Vite)", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Authentication", "Cloudinary (Images & PDFs)"]
  },
  "crickers": {
    title: "Crickers 🏏",
    tagline: "The Ultimate Cricket Brainstorm & Image Board",
    image: "/project_previews/crickers.png",
    liveLink: "https://crickers.vercel.app/",
    githubLink: "https://github.com/ramanbhatia3/cloudinary-playground",
    overview: "Crickers is a minimal, aesthetic, anonymous image-sharing platform built exclusively for cricket fans. Users can seamlessly upload their favorite cricket moments, wallpapers, and resources without needing to create an account. Built with a 'Soft Editorial' design philosophy.",
    features: [
      { title: "Anonymous Posting", desc: "No login, no data tracking. Just drop an image and post." },
      { title: "Instant Cloud Uploads", desc: "Direct-to-cloud image hosting via Cloudinary for lightning-fast delivery." },
      { title: "Masonry Feed Layout", desc: "A responsive, Pinterest-style grid that perfectly scales from mobile screens up to ultra-wide desktop monitors." },
      { title: "Modern UI", desc: "Built with a minimal slate-and-white color palette to reduce eye strain." }
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "Cloudinary", "Multer"]
  },
  "100xdevsclone": {
    title: "100xDevs Clone",
    tagline: "Modern landing page clone built using React and Tailwind",
    image: "/project_previews/100xdevsclone.png",
    liveLink: "https://100xdevsclone.vercel.app/",
    githubLink: "https://github.com/ramanbhatia3/100xDevs",
    overview: "A pixel-perfect, responsive frontend clone of the 100xDevs platform built with reusable React components, modern landing pages, and interactive UI elements for seamless cross-device compatibility.",
    features: [
      { title: "Hero & Stats Sections", desc: "Main heading, CTA buttons, student stats, GSoC achievements, and international packages." },
      { title: "Featured Cohorts", desc: "Bootcamp cards, pricing UI, and course highlights." },
      { title: "Podcast Section", desc: "Embedded YouTube videos and responsive podcast cards." },
      { title: "Interactive UI", desc: "Interactive FAQ accordion, smooth animations, styling inquiry forms, and modern gradient UI." },
      { title: "Component Architecture", desc: "Reusable UI design patterns, responsive grid systems, and clean code structure." }
    ],
    techStack: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Vite"]
  },
  "gameshipperz": {
    title: "GameShipperz",
    tagline: "Full-stack gaming e-commerce and article platform",
    image: "/project_previews/gameshipperz.png",
    liveLink: "https://gameshipperz.vercel.app/",
    githubLink: "https://github.com/ramanbhatia3/gameshipperz-mern",
    overview: "A comprehensive full-stack gaming e-commerce and article platform. Upgraded to the MERN stack with robust JWT authentication for secure user sessions and a fully responsive frontend design.",
    features: [
      { title: "Secure Authentication", desc: "Robust JWT (JSON Web Tokens) implementation for protected user routes and secure sessions." },
      { title: "E-Commerce Functionality", desc: "Product browsing, cart management, and secure checkout simulation." },
      { title: "Article Platform", desc: "Integrated content management for gaming articles and news." },
      { title: "Responsive Design", desc: "Mobile-first approach ensuring seamless experience across desktop, tablet, and mobile devices." }
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JWT"]
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link to="/projects" className="inline-flex items-center gap-2 m-auto px-4 py-2 rounded-md text-xs font-medium border border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] transition-colors shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col animate-in fade-in duration-500 mt-8 mx-auto">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight mb-3">
          {project.title}
        </h1>
        <p className="text-base font-medium text-neutral-500 dark:text-neutral-400">
          {project.tagline}
        </p>
      </div>

      <div className="w-full mb-8">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-wrap gap-3 mb-10 pb-10 border-b border-black/10 dark:border-white/10">
        {project.liveLink && project.liveLink !== "" && (
          <a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
            <FiExternalLink size={16} /> Live Demo
          </a>
        )}
        {project.githubLink && project.githubLink !== "" && (
          <a href={project.githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-bold border border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] transition-colors shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
            <FiGithub size={16} /> Source Code
          </a>
        )}
      </div>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">Overview</h2>
        <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400 mb-10">
          {project.overview}
        </p>

        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">Key Features</h2>
        <div className="flex flex-col gap-5 mb-10">
          {project.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <FiCheckCircle className="text-green-500 mt-1 shrink-0" size={16} />
              <div>
                <strong className="text-[15px] text-neutral-900 dark:text-neutral-100 block mb-0.5">{feature.title}</strong>
                <span className="text-[14px] text-neutral-600 dark:text-neutral-400 leading-relaxed">{feature.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="px-2 py-1 bg-neutral-100 dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 rounded-md text-[10px] font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
              {tech}
            </span>
          ))}
        </div>

        
      </article>

      <Link
          to="/projects"
          className="inline-flex items-center gap-2 mx-auto mt-16 px-4 py-2 rounded-md text-xs font-medium border border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] transition-colors shadow-sm hover:-translate-y-0.5 transition-transform duration-300"
        >
          ← Back to Projects
        </Link>

    </div>
  );
};

export default ProjectDetails;