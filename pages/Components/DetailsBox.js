import React from "react";

const { motion } = require("framer-motion");

function DetailsBox({ description, title, date, data }) {

    const [showExplore, setShowExplore] = React.useState(true);
    const toggleExplore = () => {
        setShowExplore(!showExplore);
    }

    const variants = {
        open: { opacity: [1, 0], x: [0, 0] },
        closed: { x: [0, 0], opacity: [0, 1] },
    }

    return (
        <React.Fragment>
            {showExplore ? (
                <motion.div
                    animate={{
                        opacity: [0, 1],
                    }}
                    transition={{
                        delay: 0,
                        x: { type: "spring", stiffness: 100 },
                        default: { duration: 0.6 },
                    }}
                    className='p-6 w-full sm:w-full md:w-auto flex flex-col items-start justify-start border-2 rounded-md bg-teal-500 group  border-teal-500  cursor-pointer'
                >
                    <motion.div
                        animate={{
                            opacity: [0, 1],
                            translateX: [100, 0],
                        }}
                        className='font-bold text-md sm:text-md md:text-lg group-hover: text-white'>{title}</motion.div>
                    <motion.div
                        animate={{
                            opacity: [0, 1],
                            translateX: [100, 0],

                        }}
                        transition={{ delay: 0.2 }}
                        className='font-600 text-sm sm:text-sm md:text-md my-1 group-hover: text-white'>{description}</motion.div>
                    <motion.div
                        animate={{
                            opacity: [0, 1],
                            translateX: [100, 0],
                        }}
                        transition={{ delay: 0.3 }}

                        className='font-500 text-sm sm:text-sm md:text-sm  group-hover: text-white mt-2'>{date}</motion.div>
                    {data?.employementHistory?.enableExplore == true ? (
                        <motion.button
                            animate={{
                                opacity: [0, 1],
                                translateX: [100, 0],
                            }}
                            transition={{ delay: 0.4 }}

                            className='bg-white shadow-lg hover:shadow-sm font-medium text-sm sm:text-sm md:text-sm text-teal-500 mt-4 px-4 py-2 rounded-md' onClick={toggleExplore}>Explore</motion.button>
                    ) : " "}
                </motion.div >) : (
                <motion.div className="bg-white grid col-span-3 items-start justify-start " animate={showExplore == true ? { opacity: [0, 1], translate: [100, 0] } : { opacity: [0, 1] }} transition={{ delay: 1 }}>

                    <motion.div className="w-full" animate={{ opacity: [0, 1], translateX: [0, 0], }}>
                        {data?.employementHistory.workDescription.map((dataList, id) => {
                            return <li className="text-sm w-full my-3" key={id}>{dataList}</li>
                        })}
                    </motion.div>
                    <motion.div className="w-full flex flex-row items-center justify-between mt-4" animate={{ opacity: [0, 1], translateX: [0, 0], }}>
                        <motion.button className="shadow-lg font-medium text-sm text-white px-6 py-2 rounded-md border bg-slate-900 hover:bg-teal-500 " onClick={toggleExplore}>go back</motion.button>
                    </motion.div>
                </motion.div>
            )}

        </React.Fragment>
    )
}

export default DetailsBox