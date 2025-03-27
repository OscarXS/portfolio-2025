import { assets, serviceData } from '@/public/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

import { motion } from "motion/react"

const Services = ({ isDarkMode }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id='services' 
        className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>What I can do</h4>
        <h2 className='text-center text-5xl font-Ovo'>My Skills</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I offer web development and design services, creating responsive, user-friendly websites and applications tailored to bring your ideas to life.
        </p>

        <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, description, link, title }, index) => {
        const isExpanded = expandedIndex === index;

            return (
                <motion.div
                    initial={{ y: -20, scale: 0.8 }}
                    whileInView={{ y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    key={index}
                    className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
                >
                    <Image src={icon} alt={title} className="w-10" />
                    <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
                    
                    <p className={`text-sm text-gray-600 leading-5 dark:text-white/80 whitespace-pre-line overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-40" : "max-h-12"}`} style={{ scrollbarWidth: "thin" }}>
                    {description}
                    </p>

                    <button 
                    className="flex items-center gap-2 text-sm mt-5 text-blue-500 underline"
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    >
                    {isExpanded ? "Show Less" : "Read More"}
                    <Image src={assets.right_arrow} alt="" className="w-4" />
                    </button>
                </motion.div>
            );
        })}
        </div>
    </motion.section>
  )
}

export default Services