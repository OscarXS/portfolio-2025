import { assets, workData } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'

import { motion } from "motion/react"

const Work = ({ isDarkMode }) => {
  return (
    <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id='work' 
        className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>My portfolio</h4>
        <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            A collection of my web development and design projects, showcasing responsive, creative, and user-focused work.
        </p>

        <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
                <div className="hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                    <Image className="h-auto max-w-full rounded-lg" src={assets.happime} alt="" width={400} height={300} />
                </div>
                <div className="hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                    <Image className="h-auto max-w-full rounded-lg" src={assets.consoletech} alt="" width={400} height={300} />
                </div>
                <div className="hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                    <Image className="h-auto max-w-full rounded-lg" src={assets.signature1} alt="" width={400} height={300} />
                </div>
            </div>
            <div className="grid gap-4">
                <div className="hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                    <Image className="h-auto max-w-full rounded-lg" src={assets.magazine1} alt="" width={400} height={100} />
                </div>
                <div className="hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                    <Image className="h-auto max-w-full rounded-lg" src={assets.signature2} alt="" width={400} height={100} />
                </div>
                <div className="hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                    <Image className="h-auto max-w-full rounded-lg" src={assets.milestone} alt="" width={400} height={300} />
                </div>
                <div className="hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                    <Image className="h-auto max-w-full rounded-lg" src={assets.treefelling} alt="" width={400} height={300} />
                </div>
            </div>
            <div className="grid gap-4">
            <div className="hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                    <Image className="h-auto max-w-full rounded-lg" src={assets.signature3} alt="" width={400} height={300} />
                </div>
                <div className="hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                    <Image className="h-auto max-w-full rounded-lg" src={assets.immigration} alt="" width={400} height={300} />
                </div>
                <div className="hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                    <Image className="h-auto max-w-full rounded-lg" src={assets.magazine2} alt="" width={400} height={300} />
                </div>
                <div className="hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                    <Image className="h-auto max-w-full rounded-lg" src={assets.signature3} alt="" width={400} height={300} />
                </div>
            </div>
            <div className="grid gap-4">
            <div className="hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                    <Image className="h-auto max-w-full rounded-lg" src={assets.bcc} alt="" width={400} height={300} />
                </div>
                <div className="hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                    <Image className="h-auto max-w-full rounded-lg" src={assets.signature4} alt="" width={400} height={50} />
                </div>
                <div className="hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                    <Image className="h-auto max-w-full rounded-lg" src={assets.cat1} alt="" width={400} height={400} />
                </div>
                <div className="hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                    <Image className="h-auto max-w-full rounded-lg" src={assets.bbbautobody} alt="" width={400} height={300} />
                </div>
                
            </div>
        </motion.div>

        {/* <div className='grid grid-cols-auto gap-5 my-10 dark:text-black'>
            {workData.map(({bgImage, description, title}, index) => (
                <motion.div 
                    initial={{ y: -10, scale: 0.8 }}
                    whileInView={{ y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease:'easeIn' }}
                    key={index} 
                    style={{ backgroundImage: `url(${bgImage})` }} 
                    className='aspect-square bg-no-repeat bg-cover bg-center relative group rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold '>{title}</h2>
                            <p className='text-sm text-gray-700 '>{description}</p>
                        </div>
                        <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                            <Image 
                                src={assets.send_icon}
                                alt=''
                                className='w-5 mt-[3px] mr-[3px]'
                            />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div> */}
        {/* <a href='' className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover dark:hover:shadow-white'>
            Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='' className='w-4'/>
        </a> */}
    </motion.section>
  )
}

export default Work