import React from 'react'
import Image from 'next/image';
import DaImage from '../images/ok.png'
import { motion, AnimatePresence } from 'framer-motion';
import { Experience } from '../typings';


type Props = {
    experience: Experience;
}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity
    duration-200 overflow-hidden">
            <motion.img 
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPBF166wuR_qR6uXRcCxyHSG93_QA9rGYgpPpmnGOuA&s"
            alt=""
            />

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light"> 
                    CEO OF YOUR MOTHER
                </h4>
                <p className="font-bold text-2xl mt-1">
                    FUCK YOU
                </p>
                <div className="flex space-x-2 my-2">
                    {/* Tech used */}
                    {/* Tech used */}
                    {/* Tech used */}
                </div>
                <p className="uppercase py-5 text-gray-300">Things I can do whilst doing your mother:</p>

                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>I can do your mother</li>
                    <li>I can do it again</li>
                    <li>and again</li>
                    <li>I can do your mother whilst doing someone else's mother</li>
                    <li>I can do my job</li>
                </ul>
            </div>
        <Image className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-top' 
        src={DaImage} alt="/" /> 
    </article>
  )
}

export default ExperienceCard