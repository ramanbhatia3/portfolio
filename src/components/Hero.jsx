import { FiFileText, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import { GitHubCalendar } from 'react-github-calendar'

const Hero = () => {
    return (
        <header className='flex flex-col gap-5 mt-3 sm:mt-6'>

            <div className='flex items-center gap-5'>
                <img src="/logo.png" alt="Raman" className="w-24 h-24 rounded-full overflow-hidden border border-black/10 dark:border-white/10 shrink-0 bg-[#fde047] dark:bg-blue-300" />

                <div className='flex flex-col gap-1'>
                    <h1 className='text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight'>
                        Ramandeep Bhatia
                    </h1>
                    <p className='text-sm font-semibold sm:text-base text-neutral-500 dark:text-neutral-400 flex items-center'>
                        Full Stack Developer · Engineer
                    </p>
                </div>
            </div>

            <p className='text-[14px] font-medium text-neutral-600 dark:text-neutral-400 leading-relaxed mt-2'>
                I build interactive web apps using React, Node.js and MongoDB. Always eager to learn more.
            </p>


            <div className='flex flex-col sm:flex-row gap-4 mt-2'>
                <a href="#" className='inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium border border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'>
                    <FiFileText size={16} />
                    Resume / CV
                </a>
                <a href="mailto:bhatia3r@gmail.com" className='inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'>
                    <FiMail size={16} />
                    Get in touch
                </a>
            </div>

            <div className='flex gap-4 mt-2 text-neutral-500 dark:text-neutral-400'>
                <a href="https://www.github.com/ramanbhatia3" target='_blank' className=" hover:text-neutral-900 dark:hover:text-neutral-100 transition-all hover:-translate-y-1">
                    <FiGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ramandeep-bhatia-78b792287/" target="_blank" className=" hover:text-neutral-900 dark:hover:text-neutral-100 transition-all hover:-translate-y-1">
                    <FiLinkedin size={20} />
                </a>
                <a href="mailto:bhatia3r@gmail.com" target="_blank" className=" hover:text-neutral-900 dark:hover:text-neutral-100 transition-all hover:-translate-y-1">
                    <FiMail size={20} />
                </a>
            </div>

            <div className='mt-8 pt-8 border-t border-black/10 dark:border-white/10'>
                <p className='text-xs font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-widest mb-6'>
                    Contributions
                </p> 

                <div className='w-full flex justify-start sm:hidden'>
                    <GitHubCalendar 
                        username="ramanbhatia3" 
                        colorScheme="dark" 
                        blockSize={12}
                        blockMargin={4}
                        fontSize={12}
                        transformData={(data) => data.slice(-120)}
                    />
                </div>

                <div className='w-full hidden sm:flex sm:justify-end'>
                    <GitHubCalendar 
                        username="ramanbhatia3" 
                        colorScheme="dark" 
                        blockSize={12}
                        blockMargin={4}
                        fontSize={12}
                        transformData={(data) => data.slice(-280)}
                    />
                </div>
            </div>

        </header>
    )
}

export default Hero