import { Link } from 'react-router-dom'
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'

const Footer = () => {
    return (
        <footer className='mt-15 pb-8'>

            <div className="flex flex-col sm:flex-row justify-between gap-12 sm:gap-6 mb-16">
                <div>
                    <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-widest mb-6">
                        Navigate
                    </h4>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-4">
                        <Link to="/" className="text-[14px] text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">Home</Link>
                        <Link to="/about" className="text-[14px] text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">About Me</Link>
                        <a href="#projects" className="text-[14px] text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">Projects</a>
                        <a href="#resume" className="text-[14px] text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">Resume</a>
                        <a href="#blogs" className="text-[14px] text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">Blogs</a>
                        <a href="#influences" className="text-[14px] text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">Influences</a>
                    </div>
                </div>

                <div>
                    <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-widest mb-6">
                        Connect
                    </h4>

                    <div className='flex gap-3'>
                        <a href="https://www.github.com/ramanbhatia3" target="_blank" rel="noreferrer" className="flex items-center justify-center w-11 h-11 border border-black/10 dark:border-white/10 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" aria-label="GitHub">
                            <FiGithub size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/ramandeep-bhatia-78b792287/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-11 h-11 border border-black/10 dark:border-white/10 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" aria-label="LinkedIn">
                            <FiLinkedin size={18} />
                        </a>
                        <a href="#" className="flex items-center justify-center w-11 h-11 border border-black/10 dark:border-white/10 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" aria-label="X (Twitter)">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.076H5.022z"/>
                        </svg>
                        </a>
                        <a href="#" className="flex items-center justify-center w-11 h-11 border border-black/10 dark:border-white/10 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" aria-label="Instagram">
                            <FiInstagram size={18} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-black/10 dark:border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-neutral-500 dark:text-neutral-400">
                <p>© 2026 Ramandeep Bhatia. All rights reserved.</p>
                <p>Thanks for visiting!</p>
            </div>

        </footer>
    )
}

export default Footer