import { useState } from 'react';
import { FiAward, FiCode, FiChevronDown, FiBookOpen } from 'react-icons/fi';

const TimelineCard = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    const getGlowStyles = (color) => {
        if (color === 'yellow') return "text-yellow-500 border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.15)]";
        if (color === 'purple') return "text-purple-500 border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]";
        if (color === 'blue') return "text-blue-400 border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]";
        return "text-neutral-500 border-neutral-500/30 shadow-none";
    };

    const getBadgeStyles = (type) => {
        if (type === 'WINNER') return "text-yellow-500 border-yellow-500/30 bg-yellow-500/10";
        if (type === 'RUNNER UP') return "text-purple-400 border-purple-500/30 bg-purple-500/10";
        if (type === 'PRESENT') return "text-green-600 dark:text-green-400 border-green-500/30 bg-green-500/10";
        if (type === 'COMPLETED') return "text-neutral-500 border-neutral-500/30 bg-neutral-500/10";
        return "";
    };

    return (
        <div className="flex gap-4 sm:gap-6 py-6 border-b border-dashed border-black/10 dark:border-white/10 last:border-0">
            
            <div className={`w-12 h-12 rounded-xl border bg-[#111] flex items-center justify-center shrink-0 ${getGlowStyles(data.glow)}`}>
                {data.icon}
            </div>

            <div className="flex-grow w-full">
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 cursor-pointer select-none" onClick={() => setIsOpen(!isOpen)}>
                    <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-[14px] sm:text-[16px] font-bold text-neutral-900 dark:text-neutral-100">
                            {data.title}
                        </h3>
                        <span className={`text-[10px] px-2 py-0.5 rounded border ${getBadgeStyles(data.badge)} uppercase tracking-widest font-mono`}>
                            {data.badge === 'PRESENT' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>}
                            {data.badge}
                        </span>
                    </div>
                    
                    <div className="flex items-center font-semibold gap-3 sm:gap-4 text-neutral-500 text-[13px]">
                        <span>{data.year}</span>
                        <button className="w-6 h-6 rounded-full bg-neutral-200 dark:bg-[#222] flex items-center justify-center hover:bg-neutral-300 dark:hover:bg-[#333] transition-colors duration-300">
                            <FiChevronDown size={14} className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
                        </button>
                    </div>
                </div>

                <p className="text-[13px] font-semibold text-neutral-500 dark:text-neutral-400 mt-1.5 mb-2">
                    {data.subtitle}
                </p>

                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                        <div className="pl-4 border-l border-neutral-300 dark:border-[#333] ml-1 mt-2 mb-2">
                            <p className="text-[14px] font-medium text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-[600px]">
                                {data.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Journey = () => {
    
    const educationList = [
        {
            title: "Rayat Bahra Professional University",
            badge: "PRESENT",
            subtitle: "B.Tech — Computer Science & Engineering",
            year: "Aug 2023 – Present",
            description: "Currently in my final year. Focusing on full-stack development, data structures, and building real-world projects. CGPA: 8.77 / 10 • No Backlogs.",
            icon: <FiBookOpen size={20} />,
            glow: "blue"
        },
        {
            title: "Baba Manjh Convent Sr. Sec. School",
            badge: "COMPLETED",
            subtitle: "Class XII — CBSE",
            year: "2023",
            description: "Completed higher secondary education with a focus on core science subjects. Percentage: 80.4%",
            icon: <FiBookOpen size={20} />,
            glow: "neutral"
        },
        {
            title: "Baba Manjh Convent Sr. Sec. School",
            badge: "COMPLETED",
            subtitle: "Class X — CBSE",
            year: "2021",
            description: "Completed secondary education. Percentage: 86.6%",
            icon: <FiBookOpen size={20} />,
            glow: "neutral"
        }
    ];

    const achievementsList = [
        {
            title: "2nd Position — Snap Syntax",
            badge: "WINNER",
            subtitle: "IIT Roorkee  — Cognizance 2026",
            year: "2026",
            description: "Secured 2nd position in this premier competitive coding competition and won prizes worth ₹60,000.",
            icon: <FiAward size={20} />,
            glow: "yellow"
        },
        {
            title: "2nd Position — Rayat Bahra Zonals Snap Syntax",
            badge: "WINNER",
            subtitle: "Rayat Bahra Professional University",
            year: "2026",
            description: "Secured 2nd position in the Snap Syntax competition organized by IIT Roorkee representatives on our campus. Won fully-sponsored invite to the IIT Roorkee Cognizance 2026 event.",
            icon: <FiCode size={20} />,
            glow: "yellow"
        },
        {
            title: "2nd Position — Full Stack Web Dev Hackathon",
            badge: "RUNNER UP",
            subtitle: "Rayat Bahra Professional University",
            year: "2025",
            description: "Secured 2nd position out of multiple teams by building and pitching 'CityCare' — a civic issue reporting platform.",
            icon: <FiAward size={20} />,
            glow: "purple"
        }
    ];

    return (
        <section id="journey" className="mt-16 pt-8 border-t border-black/10 dark:border-white/10">
            
            <div className="mb-6">
                <p className="text-xs font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-widest mb-1">
                    Education Path
                </p>
            </div>
            <div className="flex flex-col mb-16">
                {educationList.map((edu, index) => (
                    <TimelineCard key={index} data={edu} />
                ))}
            </div>

            <div className="mb-6">
                <p className="text-xs font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-widest mb-1">
                    Achievements
                </p>
            </div>
            <div className="flex flex-col">
                {achievementsList.map((achievement, index) => (
                    <TimelineCard key={index} data={achievement} />
                ))}
            </div>

        </section>
    );
};

export default Journey;