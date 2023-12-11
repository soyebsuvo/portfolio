// import profile from '../../assets/Profile.png'
import './about.css'
const About = () => {
    return (
        <div id="about" className="py-8 md:px-16">
            <div className="text-center">
                <h2 className="text-3xl font-bold">About <span className="text-[#4155d5] py-3">Me</span></h2>
                <hr className="border-4 border-dotted border-t-0 border-[#4155d5] mt-3 w-56 mx-auto" />
            </div>
            <div>
                <div className="hero py-8">
                    <div className="flex gap-12 flex-col lg:flex-row-reverse">
                        {/* <div className="md:w-1/2 flex justify-center h-[491px] border rounded-tr-full rounded-br-full border-[#4155d5] border-l-0">
                                <img src={profile} className="" />
                            </div> */}
                        <div className='md:w-1/2'>
                            <div role="tablist" className="tabs tabs-lifted">
                                <input type="radio" name="my_tabs_3" role="tab" className="tab bg-[#EEE]" aria-label="Personel" checked/>
                                <div role="tabpanel" className="tab-content rounded-box p-6">
                                    <div className="py-1">
                                        <h2><span className="font-bold font-font-inter text-sm">Name</span> : Soyeb Suvo</h2>
                                    </div>
                                    <div className="py-1">
                                        <h2><span className="font-bold font-font-inter text-sm">Profession</span> : Web Developer</h2>
                                    </div>
                                    <div className="py-1">
                                        <h2><span className="font-bold font-font-inter text-sm">Technology Stack</span> : MERN (MongoDB, Express.js, React, Node.js)</h2>
                                    </div>
                                    <div className="py-1">
                                        <h2><span className="font-bold font-font-inter text-sm">Experience</span> : Half Year</h2>
                                    </div>
                                    <div className="py-1">
                                        <h2><span className="font-bold font-font-inter text-sm">Skills</span> : React, Node.js, Express.js, MongoDB</h2>
                                    </div>
                                    <div className="py-1">
                                        <h2><span className="font-bold font-font-inter text-sm">Projects</span> : Diverse portfolio showcasing MERN stack proficiency</h2>
                                    </div>
                                    <div className="py-1">
                                        <h2><span className="font-bold font-font-inter text-sm">Learning</span> : Actively staying updated on industry trends</h2>
                                    </div>
                                    <div className="py-1">
                                        <h2><span className="font-bold font-font-inter text-sm">Statement</span> : Committed to excellence and continuous learning.</h2>
                                    </div>
                                </div>

                                <input type="radio" name="my_tabs_3" role="tab" className="tab" aria-label="Education"  />
                                <div role="tabpanel" className="tab-content rounded-box p-6">Tab content 2</div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="text-4xl font-bold">I&apos;m Soyeb Suvo</h1>
                            <p className="py-6 font-font-inter text-sm">I am a highly skilled web developer specializing in the MERN stack, with a year of professional experience. My proficiency extends across MongoDB, Express.js, React, and Node.js, showcasing a comprehensive understanding of full-stack web development. I am deeply committed to maintaining excellence in my work and is dedicated to continuous learning, ensuring that i stay abreast of the latest developments in the dynamic field of web development. My passion for creating robust and innovative solutions, combined with my proactive approach to staying updated on emerging technologies, sets me apart as a dedicated and forward-thinking MERN stack developer.</p>
                            <div className="flex justify-start items-center gap-4">
                                <button className="px-6 py-2 bg-gradient-to-r from-[#4155d5] to-[#6868C9] text-white">Download CV</button>
                                <button className="px-6 py-2 bg-gradient-to-r from-[#4155d5] to-[#6868C9] text-white">Resume</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;