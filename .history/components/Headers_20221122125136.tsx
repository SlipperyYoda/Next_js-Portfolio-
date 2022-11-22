import Link from 'next/link';
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Social } from '../typings';

type Props = {
    socials: Social[];
}

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between 
    max-w-7xl mx-auto z-20
    ">
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }} 
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }} className="flex flex-row items-enter">
            {/* Social Icons */}
            {socials.map((socials) => {
            <SocialIcon 
            key={social._id}
                url={socials.url}
                fgColor="gray"
                bgColor="transparent"
        })}
        <SocialIcon url="https://www.youtube.com/channel/UCr0kvKmv5NptqiKD0rTeGsQ" fgColor='gray'
        bgColor='transparent'/>
        <SocialIcon url="https://twitter.com/SlipperyYoda" fgColor='gray'
        bgColor='transparent'/>
        <SocialIcon url="https://www.instagram.com/slipperyYoda" 
        fgColor='gray'
        bgColor='transparent'/>
        </motion.div>
        <Link href='#contactme'> {/*Delete to remove Hydration Error*/}
        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }} 
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{ duration: 1.5 }} 
        className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
         <SocialIcon
         className='cursor-pointer'
         network='email'
         fgColor='gray'
         bgColor='transparent'/>
         <p className="uppercase md:incline-flex text-sm text-gray-400"
         >Get In Touch
         </p>
        </motion.div>
    </Link> {/*Delete to remove Hydration Error*/}
    </header>
  )
}