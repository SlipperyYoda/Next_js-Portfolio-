import React from 'react'
import { motion } from 'framer-motion';
import { Project } from '../typings';

type Props = {
    projects: Project[]
}

function Projects({ projects }: Props) {
    const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
        </h3>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }} 
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
        snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            {projects.map((project, i) => (
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
                justify-center p-20 md:p-44 h-screen">
                    <motion.img 
                    initial={{
                        y: 300,
                        opacity: 0,
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once:true }}
                    src="https://stickerly.pstatic.net/sticker_pack/PQEbA06NLcQ7reKUeFtK0g/9I87N5/2/08cebe44-befc-4883-b0a8-913d0225db72.png"
                    alt=""
                    />

                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="underline decoration-[#F7AB0A]/50 ">
                            Class {i + 1} of {projects.length}:
                            </span>{" "}
                            of doing your mother
                        </h4>

                        <p className="text-lg text-center md:text-left">
                        I am not crazy! I know he swapped those numbers. I knew it was 1216. One after Magna Carta. As if I could ever make such a mistake. Never. Never! I just – I just couldn’t prove it. 
                        He covered his tracks, he got that idiot at the copy shop to lie for him. You think this is something? You think this is bad? This? This chicanery? 
                        He’s done worse. That billboard! Are you telling me that a man just happens to fall like that? No! He orchestrated it! Jimmy! He defecated through a sunroof! And I saved him! And I shouldn’t have. 
                        I took him into my own firm! What was I thinking? He’ll never change. He’ll never change! Ever since he was 9, always the same! Couldn’t keep his hands out of the cash drawer! But not our Jimmy! Couldn’t be precious Jimmy! 
                        Stealing them blind! And HE gets to be a lawyer? What a sick joke! I should’ve stopped him when I had the chance! …And you, you have to stop him! You-


                        </p>
                    </div>
        </div>
        ))}
        </motion.div>

        
        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 ">
        
        </div>
        </div>


  );
}

export default Projects
