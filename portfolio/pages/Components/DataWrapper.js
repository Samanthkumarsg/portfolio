import React from 'react'
const { motion } = require("framer-motion");

function DataWrapper({ title, children }) {

    const id = React.useId();
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <motion.div
            className='w-full flex flex-col items-start px-4  sm:px-1'
        >
            <h1 className='font-bold text-xl md:text-3xl leading-10 mt-5 text-teal-500 ease-in-out duration-300 hover:tracking-[.25em] cursor-pointer' onClick={toggle}>{title}</h1>

            {isOpen ? (

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 w-full gap-4 py-8">
                    {children}
                </div>

            ) : ""
            }

        </motion.div >
    )
}

export default DataWrapper