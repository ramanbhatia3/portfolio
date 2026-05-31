const TechPill = ({ children }) => (
    <span className="inline-flex items-center gap-1 text-sm font-semibold px-2.5 py-1 rounded-md bg-transparent border border-dashed border-black/20 dark:border-white/20 text-neutral-900 dark:text-neutral-100">
        {children}
    </span>
)

const About = () => {
    return (
        <div className="animate-in fade-in duration-500">
            
            <div className="mt-4 mb-8">
                <p className="text-[12px] font-medium text-neutral-500 dark:text-neutral-400">About</p>
                <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 -mt-1">Me</h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                <img src="/logo.png" alt="Raman" className="w-24 h-24 sm:w-50 sm:h-50 rounded-lg overflow-hidden border border-black/10 dark:border-white/10 shrink-0 bg-[#fde047] dark:bg-blue-300 object-cover" />

                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                        Ramandeep Bhatia
                    </h2>
                    <p className="flex text-[14px] text-semibold text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        I'm a 6th-semester B.Tech CSE student at Rayat Bahra Professional University with a passion for full-stack web development. I enjoy building interactive applications from scratch and turning ideas into real-world projects. Currently, I'm focused on improving my skills while exploring new technologies and frameworks.
                    </p>

                    <div className="mt-2">
                        <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                            Skills
                        </h3>
                        <div className="flex flex-wrap gap-2.5">
                            <TechPill>HTML</TechPill>
                            <TechPill>CSS</TechPill>
                            <TechPill>JavaScript</TechPill>
                            <TechPill>React</TechPill>
                            <TechPill>Node.js</TechPill>
                            <TechPill>Express.js</TechPill>
                            <TechPill>MongoDB</TechPill>
                            <TechPill>Tailwind CSS</TechPill>
                            <TechPill>C / C++</TechPill>
                            <TechPill>Python</TechPill>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <div className="mb-6">
                    <p className="text-[12px] font-medium text-neutral-500 dark:text-neutral-400">Education & Path</p>
                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 -mt-1">My Journey</h1>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 sm:gap-4 group">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[15px] sm:text-base font-bold text-neutral-900 dark:text-neutral-100">
                                Rayat Bahra Professional University
                            </h3>
                            <p className="text-[14px] text-neutral-600 dark:text-neutral-400">B.Tech — Computer Science & Engineering</p>
                            <p className="text-[13px] text-neutral-500 dark:text-neutral-500 mt-1">CGPA: 8.77 / 10 • No Backlogs</p>
                        </div>
                        <div className="flex flex-col sm:text-right text-[13px] text-neutral-500 dark:text-neutral-500">
                            <span>Aug 2023 – Present</span>
                            <span>Hoshiarpur, PB</span>
                        </div>
                    </div>


                    <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 sm:gap-4 group">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[15px] sm:text-base font-bold text-neutral-900 dark:text-neutral-100">
                                Baba Manjh Convent Sr. Sec. School
                            </h3>
                            <p className="text-[14px] text-neutral-600 dark:text-neutral-400">Class XII (CBSE)</p>
                            <p className="text-[13px] text-neutral-500 dark:text-neutral-500 mt-1">Percentage: 80.4%</p>
                        </div>
                        <div className="flex flex-col sm:text-right text-[13px] text-neutral-500 dark:text-neutral-500">
                            <span>2023</span>
                            <span>Kang Mai, PB</span>
                        </div>
                    </div>


                    <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 sm:gap-4 group">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[15px] sm:text-base font-bold text-neutral-900 dark:text-neutral-100">
                                Baba Manjh Convent Sr. Sec. School
                            </h3>
                            <p className="text-[14px] text-neutral-600 dark:text-neutral-400">Class X (CBSE)</p>
                            <p className="text-[13px] text-neutral-500 dark:text-neutral-500 mt-1">Percentage: 86.6%</p>
                        </div>
                        <div className="flex flex-col sm:text-right text-[13px] text-neutral-500 dark:text-neutral-500">
                            <span>2021</span>
                            <span>Kang Mai, PB</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About