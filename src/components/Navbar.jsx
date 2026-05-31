import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => setIsOpen(false)

    return (
        <nav className='flex items-center justify-between py-3'>

            <div className='flex items-center gap-6'>
                <a href="/" className='flex items-center'>
                    <img src="/logo.png" alt="Raman" className='w-10 h-10 rounded-full object-cover border border-black/10 dark:border-white/10 transition-transform hover:scale-95' />
                </a>

                <div className='flex gap-4'>
                    <a href="#about" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">About Me</a>
                    <a href="#projects" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">Projects</a>
                    <a href="#blogs" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">Blogs</a>
                </div>
            </div>

            <div>
                <ThemeToggle />
            </div>

        </nav>
    )
}

export default Navbar