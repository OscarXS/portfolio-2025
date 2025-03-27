import { assets, infoList, toolsData } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'

import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
  return (
    <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id='about' 
        className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
        <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-center text-5xl font-Ovo'>About me</motion.h2>

        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="w-64 sm:w-80 rounded-3xl max-w-none">
                <Image 
                    src={assets.user_image}
                    alt='user'
                    className='w-full rounded-3xl'
                />
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex-1">
                <p className='font-Ovo mb-10 max-w-2xl'>
                    I'm a web developer based in Johannesburg with senior design experience, blending creativity with technical skills to build unique and responsive websites. I enjoy crafting digital experiences that are both visually appealing and easy to navigate. My goal is to create designs that not only stand out but feel intuitive and seamless for users.
                </p>

                <motion.ul 
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {infoList.map(({icon, iconDark, description, title,}, index) => (
                        <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                            <Image 
                                src={isDarkMode ? iconDark : icon}
                                alt={title}
                                className='w-7 mt-3'
                            />
                            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                        </li>
                    ))}
                </motion.ul>
                    
                <motion.h4 
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className='mt-6 mb-2 text-gray-700 font-Ovo dark:text-white'>Tools I use</motion.h4>
                <motion.ul 
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className='flex items-center gap-3 md:gap-5 flex-wrap justify-center md:justify-start'>
                    {toolsData.map((tool, index) => (
                        <li key={index} className='flex p-2 justify-center items-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <Image 
                                src={tool}
                                alt='Tool'
                                className='w-5 sm:w-7'
                            />
                        </li>
                    ))}
                </motion.ul>
            </motion.div>
        </div>
    </motion.section>
  )
}

export default About