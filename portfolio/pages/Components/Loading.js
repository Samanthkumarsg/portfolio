import React from 'react'
const { motion } = require("framer-motion");

function Loading() {
    return (
        <motion.div className='h-screen w-screen bg-slate-900  flex items-center justify-center'>
            <motion.div className='bg-teal-500 h-96 w-96 rounded-full flex items-center justify-center' animate={{ scale: [1, 0.2, 1, 1.5, 0.6, 1] }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    type: "spring",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                    bounce: 0.25
                }}>
                <motion.div className='text-5xl text-slate-900 font-bold' animate={{ scale: [0.2, 1, 1.2, 1.4, 0.6, 0.8, 1] }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        type: "spring",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1,
                        bounce: 0.25
                    }}>. crafting <br /> samanth's <br /> portfolio .</motion.div>
            </motion.div>


        </motion.div>
    )
}

export default Loading