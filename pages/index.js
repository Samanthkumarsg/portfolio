import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import DataWrapper from './Components/DataWrapper'
import DetailsBox from './Components/DetailsBox'
const { motion } = require("framer-motion");
import Link from 'next/link';

export default function Home() {

  const data = {
    employementHistory: {
      workDescription:
        [
          "Implemented new responsive website approach which increased mobile traffic by 20%.",
          " Followed agile methodologies and SDLC best practices to division to enhance product development.",
          "Reviewed code, debugged problems and corrected issues.",
          "Worked with back-end developers to design APIs.",
          "Built highly functional web applications using technologies like React, Next, Node, MongoDB, SQL, JavaScript, HTML/CSS.",
          "Used wireframes, mock-ups and prototypes to establishuser interface design and architecture.",
          "Standardized all output with a new, responsive, mobile-first approach and strategy.",
          "Assessed UX and UI designs for technical feasibility.",
          "Integrated third-party APIs from external applications into web platforms.",
          "Liaised between marketing and IT on web development projects integrating front-end assets to back-end systems.",
          "Worked cooperatively with client services, sales and design team in deadline-driven environment.",
          "Made recommendations for new technology integration based on suitability and alignment to business goals.",
        ],
      enableExplore: true

    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Samanth Kumar</title>
        <meta name="description" content="Samanth Kumar Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>

      <div className='container mx-auto  '>
        <motion.div className='flex flex-col sm:flex-col md:flex-row pt-16'
          animate={{ opacity: [0, 1], }} transition={{ type: 'tween', delay: 0.1 }}
        >
          <motion.div className='w-3/4 h-full flex flex-col items-start border-0 border-l-8 border-slate-900 pl-4'>
            <motion.div className='text-4xl font-bold'
              animate={{ x: [0, 0], y: [100, 0], opacity: 1 }} transition={{ type: 'tween', delay: 0.3 }}
              drag
              whileDrag={{ scale: 2 }}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.5}
              dragTransition={{ bounceStiffness: 900, bounceDamping: 10 }}
            >
              Samanth <br />Kumar
            </motion.div>
            <motion.div className='mt-2'
              animate={{ x: [0, 0], y: [100, 0], opacity: 1 }} transition={{ type: 'tween', delay: 0.5 }}
            >
              Software Developer || Student
            </motion.div>
          </motion.div>

          <div className='w-full flex items-start flex-row mt-8 px-4 md:mt-0 sm:mt-8 sm:px-1'>
            <motion.div className='font-500 text-xl md:text-3xl leading-10 '
              animate={{ x: [200, 0], y: 0, opacity: [0, 1] }} transition={{ type: 'spring', delay: 0.8 }}
            >
              Bringing forth the ability to work well with others and
              utilize my skills to enhance projects.
            </motion.div>
          </div>
        </motion.div>

        <motion.div className='my-8 sm:my-8 md:my-12' animate={{ opacity: [0, 1], x: [-100, 0] }} transition={{ type: 'tween', delay: 1, }}>

          <DataWrapper title="Education" >
            <DetailsBox description='Berlin School of Business and Innovation, Berlin , Germany' title='MSc Data Analytics' date='June 2022 – Present' />
            <DetailsBox description='N.M.A.M. Institute of Technology, Karkala , India' title='MCA' date='September 2017 – March 2020' />
            <DetailsBox description='SDM College of Business Management, Mangalore, India' title='BCA' date='June 2022 – Present' />
            <DetailsBox description='Canara Pre university college, Mangalore, India' title='PUC' date='March 2012 – March 2014' />
          </DataWrapper>

          <DataWrapper title="Employment History">
            <DetailsBox description='MindStack Technologies, Mangalore, India' title='Software Developer' date='March 2020 – April-2022' data={data} />

          </DataWrapper>

          <DataWrapper title="Internships">
            <DetailsBox description='Full stack web development using MERN ' title='MicroDegree' date='March 2020' />

          </DataWrapper>

          <DataWrapper title="Certifications">
            <DetailsBox description='MicroDegree' title='Full stack web development using MERN' date='issued on july 2020' />

          </DataWrapper>

          <Link href="https://samanth.bio.link">
            <a className=''> <DataWrapper title="Links"></DataWrapper></a>
          </Link>
        </motion.div>






        {/* <div className='w-full flex flex-col items-start border mt-8 px-4 md:mt-0 sm:mt-8 sm:px-1'>
          <h1 className='font-bold text-xl md:text-3xl leading-10 py-4 text-teal-500'>Skills</h1>
          <div className='w-full grid grid-cols-3 gap-4'>
            <div className='rounded-full bg-white border-2 border-slate-900 p-2 font-500 flex items-center justify-center text-xs' >JavaScript</div>
            <div className='rounded-full bg-white border-2 border-slate-900 p-2 font-500 flex items-center justify-center text-xs' >Python</div>
            <div className='rounded-full bg-white border-2 border-slate-900 p-2 font-500 flex items-center justify-center text-xs' >Ed.</div>
            <div className='rounded-full bg-white border-2 border-slate-900 p-2 font-500 flex items-center justify-center text-xs' >Ed.</div>
            <div className='rounded-full bg-white border-2 border-slate-900 p-2 font-500 flex items-center justify-center text-xs' >Ed.</div>
            <div className='rounded-full bg-white border-2 border-slate-900 p-2 font-500 flex items-center justify-center text-xs' >Ed.</div>

          </div>
        </div> */}


      </div>

    </div >

  )
}
