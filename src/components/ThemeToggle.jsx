import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        const htmlElement = document.documentElement

        if (isDark){
            htmlElement.classList.add("dark")
        }
        else {
            htmlElement.classList.remove("dark")
        }
    }, [isDark])

    return (
        <button onClick={() => setIsDark(!isDark)} className='p-2 font-medium text-neutral-500 bg-neutral-100 dark:bg-[#1a1a1a] rounded-lg hover:bg-neutral-200 dark:hover:bg-[#222] transition-colors border border-[#111]/10 dark:border-white/10' >{isDark ? <FiSun size={15} /> : <FiMoon size={15} />}</button>
    )
}

export default ThemeToggle