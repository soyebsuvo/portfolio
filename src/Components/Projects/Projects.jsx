import './projects.css'
import project from '../../assets/project.jpg'
import project2 from '../../assets/project2.jpg'
import project3 from '../../assets/project3.jpg'
import project4 from '../../assets/project4.jpg'
import project5 from '../../assets/project5.jpg'
export default function Projects() {
    return (
        <div id='projects' className='md:px-16 py-5'>
            <div className="text-center">
                <h2 className="text-3xl font-bold">My <span className="text-[#4155d5] py-3">Projects</span></h2>
                <hr className="border-4 border-dotted border-t-0 border-[#4155d5] mt-3 w-56 mx-auto" />
            </div>
            <div className="grid grid-cols-3 gap-12 py-8">
                <div className='relative main border border-[#4155d5]'>
                    <img src={project} alt="" />
                    <h2 className='absolute top-0 left-1 text-white text-xl font-bold z-10 text-center w-full over'>Homez. A Real Estat Platform</h2>
                    <div className='absolute over duration-1000 delay-500 bg-[rgba(0,0,0,.7)] w-full h-full top-0 flex justify-center items-center'>
                        <div>
                            <div className='flex justify-center items-center'>
                            <a href='https://tall-ornament.surge.sh' rel="noreferrer" target='_blank' className="px-6 py-1 bg-gradient-to-r from-[#4155d5] to-[#6868C9] text-white mb-2">Live Site</a> 
                            </div>
                            <a href='https://github.com/soyebsuvo/a12-homez-website-server' rel="noreferrer" target='_blank' className="px-6 py-1 bg-gradient-to-r from-[#4155d5] to-[#6868C9] text-white mr-2">Github Server</a>
                            <a href='https://github.com/soyebsuvo/a12-homez-website-client' rel="noreferrer" target='_blank' className="px-6 py-1 bg-gradient-to-r from-[#4155d5] to-[#6868C9] text-white">Github Client</a>
                        </div>
                    </div>
                </div>
                <div className='relative main border border-[#4155d5]'>
                <img src={project2} alt="" />
                <h2 className='absolute top-0 left-1 text-white text-xl font-bold z-10 text-center w-full over'>Restaurant Management Website</h2>
                    <div className='absolute over bg-[rgba(0,0,0,.7)] w-full h-full top-0 flex justify-center items-center'>
                        <div>
                            <div className='flex justify-center items-center'>
                            <a href='https://assignment-11-35e68.web.app' rel="noreferrer" target='_blank' className="px-6 py-1 bg-gradient-to-r from-[#4155d5] to-[#6868C9] text-white mb-2">Live Site</a> 
                            </div>
                            <a href='https://github.com/soyebsuvo/a11-grillino-rastaurant-website-server' rel="noreferrer" target='_blank' className="px-6 py-1 bg-gradient-to-r from-[#4155d5] to-[#6868C9] text-white mr-2">Github Server</a>
                            <a href='https://github.com/soyebsuvo/a11-grillino-rastaurant-website-client' rel="noreferrer" target='_blank' className="px-6 py-1 bg-gradient-to-r from-[#4155d5] to-[#6868C9] text-white">Github Client</a>
                        </div>
                    </div>
                </div>
                <div className='relative main border border-[#4155d5]'>
                <img src={project3} alt="" />
                <h2 className='absolute top-0 left-1 text-white text-xl font-bold z-10 text-center w-full over'>Brand Shop Website</h2>
                    <div className='absolute over bg-[rgba(0,0,0,.7)] w-full h-full top-0 flex justify-center items-center'>
                        <div>
                            <div className='flex justify-center items-center'>
                            <a href='https://purring-deer.surge.sh' rel="noreferrer" target='_blank' className="px-6 py-1 bg-gradient-to-r from-[#4155d5] to-[#6868C9] text-white mb-2">Live Site</a> 
                            </div>
                            <a href='https://github.com/soyebsuvo/a10-brand-shop-server' rel="noreferrer" target='_blank' className="px-6 py-1 bg-gradient-to-r from-[#4155d5] to-[#6868C9] text-white mr-2">Github Server</a>
                            <a href='https://github.com/soyebsuvo/a10-brand-shop-client' rel="noreferrer" target='_blank' className="px-6 py-1 bg-gradient-to-r from-[#4155d5] to-[#6868C9] text-white">Github Client</a>
                        </div>
                    </div>
                </div>
                <div className='relative main border border-[#4155d5]'>
                <img src={project4} alt="" />
                <h2 className='absolute top-0 left-1 text-white text-xl font-bold z-10 text-center w-full over'>Event Management Website</h2>
                    <div className='absolute over bg-[rgba(0,0,0,.7)] w-full h-full top-0 flex justify-center items-center'>
                        <div>
                            <div className='flex justify-center items-center'>
                            <a href='https://event-management-assignm-e79f0.web.app' rel="noreferrer" target='_blank' className="px-6 py-1 bg-gradient-to-r from-[#4155d5] to-[#6868C9] text-white mb-2">Live Site</a> 
                            </div>
                            <a href='https://github.com/soyebsuvo/event-management-server' rel="noreferrer" target='_blank' className="px-6 py-1 bg-gradient-to-r from-[#4155d5] to-[#6868C9] text-white mr-2">Github Server</a>
                            <a href='https://github.com/soyebsuvo/a9-event-management-website' rel="noreferrer" target='_blank' className="px-6 py-1 bg-gradient-to-r from-[#4155d5] to-[#6868C9] text-white">Github Client</a>
                        </div>
                    </div>
                </div>
                <div className='relative main border border-[#4155d5]'>
                <img src={project5} alt="" />
                <h2 className='absolute top-0 left-1 text-white text-xl font-bold z-10 text-center w-full over'>Dhaka Univercity</h2>
                    <div className='absolute over bg-[rgba(0,0,0,.7)] w-full h-full top-0 flex justify-center items-center'>
                        <div>
                            <div className='flex justify-center items-center'>
                            <a href='https://soyebsuvo.github.io/du-project' rel="noreferrer" target='_blank' className="px-6 py-1 bg-gradient-to-r from-[#4155d5] to-[#6868C9] text-white mb-2">Live Site</a> 
                            </div>
                            <a href='https://github.com/soyebsuvo/du-project' rel="noreferrer" target='_blank' className="px-6 py-1 bg-gradient-to-r from-[#4155d5] to-[#6868C9] text-white">Github Client</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
