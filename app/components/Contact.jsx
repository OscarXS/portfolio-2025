import Image from 'next/image'
import { assets, workData } from '@/public/assets/assets'
import React, { useState } from 'react'

import { motion } from "motion/react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  
  const onSubmit = async (event) => {
    const notifySuccess = () => toast.success("Message sent");
    const notifyError = () => toast.error("Message failed to send");

    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEBFORM_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      notifySuccess()
      event.target.reset();
    } else {
      console.log("Error", data);
      notifyError()
      setResult(data.message);
    }
  };
  
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id='contact' 
      className={`w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto] ${isDarkMode ? '' : 'footer-bg'}`}>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Contact me</h4>
        <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Let’s connect – reach out for collaborations, projects, or just to say hello!
        </p>

        <form className='max-w-2xl mx-auto' onSubmit={onSubmit}>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <input name='name' type="text" placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:border-white/90 dark:bg-darkHover/30' />
                <input name='email' type="email" placeholder='Enter your email address' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:border-white/90 dark:bg-darkHover/30' />
            </div>
            <textarea name='message' rows='6' placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:border-white/90 dark:bg-darkHover/30' />

            <button type='submit' className='py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black hover:-translate-y-1 duration-500 dark:bg-transparent dark:hover:bg-darkHover/30 dark:border dark:border-white/90 dark:hover:shadow-white'>
                Submit now 
                <Image src={assets.right_arrow_white} alt='' className='w-4' />
            </button>
            <ToastContainer position='bottom-right' closeOnClick className='cursor-s-resize' />
            <p className='hidden'>{result}</p>
        </form>
    </motion.section>
  )
}

export default Contact