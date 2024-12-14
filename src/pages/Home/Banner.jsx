import React from 'react';
import { easeInOut, motion } from "framer-motion";
import team1 from '../../assets/team/p-teamr.jpg'
import team2 from '../../assets/team/office.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className='flex-1'>
                <motion.img 
                animate={{ y : [50, 100, 50]}}
                transition={{duration : 10, repeat : Infinity}}
                className='max-w-sm w-72 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-400'
                src={team1} />
                <motion.img 
                animate={{ x : [100, 150, 100]}}
                transition={{duration : 10, repeat : Infinity}}
                className='max-w-sm w-72 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-400'
                src={team2} />
            </div>
            <div className='flex-1'>
            <motion.h1
                animate={{ x: 50 }}
                transition={{duration : 2, delay : 4, ease : easeInOut, repeat : Infinity}}
                className="text-5xl  font-bold">Latest <motion.span
                animate = {{color : ['#339fff', '#335bff']}}
                transition={{duration : 1.5, repeat : Infinity}}
                >Jobs</motion.span> For You!</motion.h1>
            <p className="py-6 text-blue-500">
            Joblytic is more than just a job board; it’s your partner in career advancement. We’re dedicated to connecting talented individuals with exciting opportunities. With our easy-to-use platform, you can search thousands of jobs, upload your resume, and apply with just a few clicks. Whether you’re a recent graduate or a seasoned professional, we’re here to help you find your dream job.
            </p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;