import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { useState } from 'react';
export default function Contact() {
    const [ text , setText ] = useState("")
    const [ error , setError ] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        const body = { name , email , message };
        console.log(body)

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID, 
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          )
            .then((result) => {
              console.log(result.text);
              if(result.text === 'OK'){
                setText("Message sent Successfully")
                e.target.reset();
              }
            }, (error) => {
              console.error(error.text);
              if(error){
                setError("Can't Send Message")
              }
            });
    }
    setTimeout(() => {
        setText("");
    }, 4000);
    return (
        <div id='contact' className="md:px-16">
            <div className="text-center py-5">
                <h2 className="text-3xl font-bold">Contact <span className="text-[#4155d5] py-3">Me</span></h2>
                <hr className="border-4 border-dotted border-t-0 border-[#4155d5] mt-3 w-56 mx-auto" />
            </div>
            <div className="hero py-8">
                <div className="flex items-center gap-12 flex-col lg:flex-row-reverse">
                    {/* <div className="md:w-1/2 flex justify-center h-[491px] border rounded-tr-full rounded-br-full border-[#4155d5] border-l-0">
                                <img src={profile} className="" />
                            </div> */}
                    <div className='md:w-1/2'>
                        <h2 className='text-2xl font-bold mb-4'>Send a Message...</h2>
                        <form onSubmit={handleSubmit}>
                            <input className="w-full px-2 py-3 bg-white outline-none my-2" type="text" name="name" id="name" placeholder="Name" required/> <br />
                            <input className="w-full px-2 py-3 bg-white outline-none my-2" type="email" name="email" id="email" placeholder="Email" required/> <br />
                            <textarea className="w-full px-2 py-3 bg-white outline-none my-2" name="message" id="message" cols="30" rows="5" placeholder="Message" required></textarea>
                            <button type="submit" className="px-6 py-2 bg-gradient-to-r from-[#4155d5] to-[#6868C9] text-white">Send Message</button>
                            {text && <p className='mt-2 text-green-500'>{text}</p>}
                            {error && <p className='mt-2 text-red-500'>{error}</p>}
                        </form>
                    </div>
                    <div className="md:w-1/2 px-5 md:px-0">
                        <h1 className="text-4xl font-bold">Get in <span className="text-[#4155d5] py-3">touch</span></h1>
                        <p className="py-6 font-font-inter text-sm">
                            Get in touch for inquiries, collaborations, or any questions. I&apos;m available and ready to connect—reach out through the provided contact details below, and let&apos;s start a conversation.</p>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="pb-8">
                                <h3 className="font-bold">Location</h3>
                                <p>Dinajpur,Bangladesh</p>
                            </div>
                            <div className="pb-8">
                                <h3 className="font-bold">Phone/Whatsapp</h3>
                                <a href='tel:+8801746122445'>+880 1746-122445</a>
                            </div>
                            <div className="pb-8">
                                <h3 className='font-bold'>Social Links</h3>
                                <div className='flex gap-3 mt-4'>
                                    <a href="https://github.com/soyebsuvo" rel="noreferrer" target='_blank'><FaGithub className='inline text-2xl'></FaGithub></a>
                                    <a href="https://www.facebook.com/kned.suvo" rel="noreferrer" target='_blank'><FaFacebook className='inline text-2xl'></FaFacebook></a>
                                    <a href="https://www.instagram.com/soyeb.suvo" rel="noreferrer" target='_blank'><FaInstagram className='inline text-2xl'></FaInstagram></a>
                                    <a href="https://www.linkedin.com/in/soyeb-suvo-0537682a0" rel="noreferrer" target='_blank'><FaLinkedin className='inline text-2xl'></FaLinkedin></a>
                                </div>
                            </div>
                            <div className="pb-8">
                                <h3 className="font-bold">Email</h3>
                                <a href='mailto:soyebbeen@gmail.com'>soyebbeen@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
