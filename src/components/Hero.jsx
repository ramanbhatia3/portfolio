import { FiFileText, FiGithub, FiLinkedin } from 'react-icons/fi';
import { GitHubCalendar } from 'react-github-calendar';

const SkillItem = ({ color, name }) => (
    <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: color }}></div>
        <span className="text-sm font-semibold text-[13px] text-neutral-700 dark:text-neutral-300">{name}</span>
    </div>
);

const Hero = () => {
    const skills = [
        { name: "React.js", color: "#61DAFB" },
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "HTML5", color: "#E34F26" },
        { name: "CSS3", color: "#1572B6" },
        { name: "Tailwind CSS", color: "#38B2AC" },
        { name: "Node.js", color: "#339933" },
        { name: "Express.js", color: "#d4d4d8" },
        { name: "MongoDB", color: "#47A248" },
        { name: "REST APIs", color: "#ec4899" },
        { name: "Git", color: "#F05032" },
        { name: "GitHub", color: "#e5e5e5" },
        { name: "SQL", color: "#3b82f6" },
        { name: "Python", color: "#eab308" },
        { name: "C++", color: "#2563eb" },
        { name: "C", color: "#f97316" }
    ];

    return (
        <header className='flex flex-col gap-5 mt-3 sm:mt-6'>

            <div className='flex items-center gap-5'>
                <img src="/logo.png" alt="Raman" className="w-24 h-24 rounded-full overflow-hidden border border-black/10 dark:border-white/10 shrink-0 bg-[#fde047] dark:bg-blue-300 object-cover" />

                <div className='flex flex-col gap-1'>
                    <h1 className='text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight'>
                        Ramandeep Bhatia
                    </h1>
                    <p className='text-sm font-semibold sm:text-base text-neutral-500 dark:text-neutral-400 flex items-center'>
                        Full Stack Developer · Engineer
                    </p>
                </div>
            </div>


            <p className='text-[14px] font-medium text-neutral-600 dark:text-neutral-400 leading-relaxed mt-2 max-w-[600px]'>
                Hey there. I'm a final year Computer Science student and I love building interactive web apps using MERN Stack alongwith Tailwind CSS. Always eager to learn more.
            </p>


            <div className='flex flex-col sm:flex-row gap-3 mt-2'>
                <a href="#" className='inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-semibold border border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'>
                    <FiFileText size={14} />
                    Resume / CV
                </a>
                <a href="mailto:bhatia3r@gmail.com" className='inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-75 transition-opacity shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'>
                    Get in touch
                </a>
            </div>

            <div className='flex gap-4 mt-2 text-neutral-500 dark:text-neutral-400'>
                <a href="https://www.github.com/ramanbhatia3" target='_blank' rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-all hover:-translate-y-1">
                    <FiGithub size={18} />
                </a>
                <a href="https://www.linkedin.com/in/ramandeep-bhatia-78b792287/" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-all hover:-translate-y-1">
                    <FiLinkedin size={18} />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-all hover:-translate-y-1">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.076H5.022z"/>
                    </svg>
                </a>
            </div>

            <div className='mt-8 pt-8 border-t border-black/10 dark:border-white/10'>
                <p className='text-xs font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-widest mb-6'>
                    Skills
                </p> 
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {skills.map((skill, index) => (
                        <SkillItem key={index} color={skill.color} name={skill.name} />
                    ))}
                </div>
            </div>


            <div className='mt-8 pt-8 border-t border-black/10 dark:border-white/10'>
                <p className='text-xs font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-widest mb-6'>
                    GitHub Contributions
                </p> 

                <div className='w-full flex justify-center sm:hidden'>
                    <GitHubCalendar 
                        username="ramanbhatia3" 
                        colorScheme="light" 
                        blockSize={8} 
                        blockMargin={5} 
                        fontSize={10} 
                        transformData={(data) => data.slice(-150)}
                    />
                </div>

                <div className='w-full hidden sm:flex justify-center'>
                    <GitHubCalendar 
                        username="ramanbhatia3" 
                        colorScheme="dark" 
                        blockSize={10} 
                        blockMargin={5} 
                        fontSize={10} 
                        transformData={(data) => data.slice(-300)}
                    />
                </div>
            </div>

        </header>
    )
}

export default Hero;