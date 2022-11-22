import React from 'react'
import { motion } from 'framer-motion';
import OneImage from '../images/nein.png';
import Image from 'next/image';
import styles from "../styles/Home.module.css";
import { PageInfo } from '../typings';


type Props = {
    pageInfo: PageInfo
}

function About({}: Props) {
  return (
    <motion.div
    initial={{opacity: 0,}}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className=" flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolutetop-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
            </h3>

            <motion.img
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true}}
            src="https://images.medicinenet.com/images/article/main_image/man-hungry-angery-plate-utensils-eating-diet-nutrition.jpg"
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-tg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
            />
    <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">Little</span>{" "}background
        </h4>
        <p className="text-base">
        The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly but gets faster each minute after you hear this signal bodeboop. A sing lap should be completed every time you hear this sound. ding Remember to run in a straight line and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark. Get ready!… Start. ding﻿


        </p>
    </div>
    </motion.div>
  )
}

export default About