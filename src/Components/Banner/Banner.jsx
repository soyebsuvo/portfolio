import profile from "../../assets/pro.png"
export default function Banner() {
    return (
        <div>
            <div className="hero md:h-[491px]" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content py-3 md:py-0 text-neutral-content">
                    <div className="hero md:px-16">
                        <div className="flex items-center gap-5 flex-col lg:flex-row-reverse">
                            <div className="md:w-1/2 flex justify-center h-[491px]"
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="900"
                            data-aos-anchor-placement="top-bottom"
                            >
                                <img src={profile} className="h-full" />
                            </div>
                            <div className="md:w-1/2"
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="900"
                            data-aos-anchor-placement="top-bottom"
                            >
                                <h1 className="text-5xl font-bold">Hi, I am Soyeb Suvo</h1>
                                <h2 className="text-3xl mt-5">Web Developer | MERN </h2>
                                <p className="py-6 text-xs font-font-inter">MERN Stack Developer with a year of expertise in React, Node.js, MongoDB. Committed to excellence and ongoing learning.</p>
                                <button className="px-6 py-2 bg-gradient-to-r from-[#4155d5] to-[#6868C9] text-white">Download CV</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
