import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'

import { motion } from "motion/react"

const Footer = ({ isDarkMode }) => {
    const d = new Date();
    d.getFullYear();
  return (
    <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='mt-20'>
        <motion.div 
            initial={{ y: 20 }}
            whileInView={{  y: 0 }}
            transition={{ duration: 1 }}
            className='text-center'>
            <Image 
                src={isDarkMode ? assets.logo_w : assets.logo}
                alt='logo'
                className='w-36 mx-auto mb-2'
            />
            <div className='w-max flex gap-2 items-center mx-auto justify-center'>
                <Image 
                    src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
                    alt=''
                    className='w-6'
                />
                xosebeloane@gmail.com
            </div>
        </motion.div>

        <motion.div 
            initial={{ y: 20 }}
            whileInView={{  y: 0 }}
            transition={{ duration: 1 }}
            className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p className='text-sm'>&copy; {d.getFullYear()} Oscar Sebeloane. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li className='text-sm transition duration-50 hover:underline hover:-translate-y-[1px] hover:ease-in hover:underline-offset-2 hover:text-[#ec1552]'><a href="https://www.instagram.com/oscar_iamart">Instagram</a></li>
                <li className='text-sm transition duration-50 hover:underline hover:-translate-y-[1px] hover:ease-in hover:underline-offset-2 hover:text-[#ec1552]'><a href="https://www.linkedin.com/in/oscar-sebeloane-6873583">linkedIn</a></li>
                <li className='text-sm transition duration-50 hover:underline hover:-translate-y-[1px] hover:ease-in hover:underline-offset-2 hover:text-[#ec1552]'><a href="https://www.facebook.com/osebeloane/">Facebook</a></li>
            </ul>
        </motion.div>
    </motion.footer>
  )
}

export default Footer