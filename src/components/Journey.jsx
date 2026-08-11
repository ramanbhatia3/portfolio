import { FiGithub, FiExternalLink, FiAward, FiCode } from 'react-icons/fi';

const EducationCard = ({ data }) => {
    return (
        <div className="flex items-center gap-4 sm:gap-6 py-4">
            
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-[#111] flex items-center justify-center shrink-0">
                <img src={data.image} alt={data.title} className="w-7 h-7 object-cover" />
            </div>

            <div className="flex-grow flex flex-col justify-center">
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0">
                    <h3 className="text-[15px] font-bold text-neutral-900 dark:text-neutral-100">
                        {data.title}
                    </h3>
                    <span className="text-[13px] font-semibold text-neutral-500">
                        {data.location}
                    </span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center sm:gap-0 mt-0.5">
                    <p className="text-[13px] font-medium text-neutral-500 dark:text-neutral-400">
                        {data.subtitle}
                    </p>
                    <span className="text-[13px] font-semibold text-neutral-500">
                        {data.year}
                    </span>
                </div>

            </div>
        </div>
    );
};

const HackathonCard = ({ data }) => {
    return (
        <div className="flex items-start gap-4 sm:gap-6 py-4">
            
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-[#111] flex items-center justify-center shrink-0">
                {data.icon}
            </div>

            <div className="flex-grow flex flex-col justify-center">
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0">
                    <h3 className="text-[15px] font-bold text-neutral-900 dark:text-neutral-100">
                        {data.title}
                    </h3>
                    <span className="text-[13px] font-semibold text-neutral-500">
                        {data.date}
                    </span>
                </div>

                <div className="mt-0.5 mb-2">
                    <p className="text-[13px] font-medium text-neutral-500 dark:text-neutral-400">
                        {data.location}
                    </p>
                </div>
                
                <p className="text-[13px] font-medium text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3 max-w-[650px]">
                    {data.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                    {data.liveLink && data.liveLink !== "#" && (
                        <a href={data.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium border bg-neutral-900 dark:border-black/10 border-white/10 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
                            <FiExternalLink size={12} />
                            Live
                        </a>
                    )}
                    {data.githubLink && data.githubLink !== "#" && (
                        <a href={data.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-md text-xs font-medium border border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] transition-colors shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
                            <FiGithub size={12} />
                            GitHub
                        </a>
                    )}
                </div>

            </div>
        </div>
    );
};

const Journey = () => {
    
    const educationList = [
        {
            title: "Rayat Bahra Professional University",
            subtitle: "B.Tech — Computer Science & Engineering",
            year: "2023 – Present",
            location: "Hoshiarpur, Punjab",
            image: "/rbpu.png"
        },
        {
            title: "Baba Manjh Convent Sr. Sec. School",
            subtitle: "Class XII — CBSE",
            year: "2023",
            location: "Kang Mai, Punjab",
            image: "/bmcs.png"
        },
        {
            title: "Baba Manjh Convent Sr. Sec. School",
            subtitle: "Class X — CBSE",
            year: "2021",
            location: "Kang Mai, Punjab",
            image: "/bmcs.png"
        }
    ];

    const hackathonList = [
        {
            title: "Snap Syntax",
            date: "March 2026",
            location: "IIT Roorkee — Cognizance 2026",
            description: "Secured 2nd position in the Snap Syntax hackathon at IIT Roorkee during Cognizance 2026 and won prizes worth ₹60,000 by building a portfolio clone.",
            icon: <FiAward size={20} className="text-yellow-500" />,
            liveLink: "https://ramanbhatia3.github.io/iitr-snap-syntax/",
            githubLink: "https://github.com/ramanbhatia3/iitr-snap-syntax"
        },
        {
            title: "Snap Syntax Zonals",
            date: "February 2026",
            location: "Rayat Bahra Professional University",
            description: "Secured 2nd position in the Snap Syntax zonals among various colleges from Hoshiarpur in 50+ teams organized by IIT Roorkee representatives on our campus. Won fully-sponsored invite to the IIT Roorkee Cognizance 2026 event by building a Phenomenon clone.",
            icon: <FiCode size={20} className="text-yellow-500" />,
            liveLink: "https://suman0703.github.io/SNAP_COGNIID/",
            githubLink: "https://github.com/Suman0703/SNAP_COGNIID"
        },
        {
            title: "Full Stack Development Hackathon",
            date: "October 2025",
            location: "Rayat Bahra Professional University",
            description: "Runner ups out of multiple teams by building and pitching 'CityCare' — a civic issue reporting platform.",
            icon: <FiAward size={20} className="text-purple-400" />,
            liveLink: "https://citycarepseudocoders.vercel.app/",
            githubLink: "https://github.com/ramanbhatia3/CityCare"
        }
    ];

    return (
        <section id="journey" className="mt-16 pt-8 border-t border-black/10 dark:border-white/10">
            
            <div className="mb-6">
                <p className="text-xs font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-widest mb-1">
                    Education Path
                </p>
            </div>
            <div className="flex flex-col mb-10">
                {educationList.map((edu, index) => (
                    <EducationCard key={index} data={edu} />
                ))}
            </div>

            <div className="mb-6 pt-8 border-t border-black/10 dark:border-white/10">
                <p className="text-xs font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-widest mb-1">
                    Hackathon Participations
                </p>
            </div>
            <div className="flex flex-col gap-2">
                {hackathonList.map((hackathon, index) => (
                    <HackathonCard key={index} data={hackathon} />
                ))}
            </div>

        </section>
    );
};

export default Journey;