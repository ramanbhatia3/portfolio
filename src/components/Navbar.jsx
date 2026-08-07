import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    return (
        <nav className='sticky top-0 z-50 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-lg py-2 border-b border-transparent dark:border-white/5 transition-colors duration-300'>
            
            <div className="max-w-[750px] mx-auto w-[92%] flex items-center justify-between">
                
                <div className='flex items-center gap-6'>
                    <Link to="/" className='flex items-center'>
                        <img src="/logo.png" alt="Raman" className='w-10 h-10 rounded-full object-cover border border-black/10 dark:border-white/10 transition-transform hover:scale-95' />
                    </Link>

                    <div className='flex gap-5'>
                        <Link to="/projects" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">Projects</Link>
                        <Link to="/blogs" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">Blogs</Link>
                    </div>
                </div>

                <div>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;