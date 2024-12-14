import React, { useEffect, useState } from 'react';
import RecentJobsCard from './RecentJobsCard';

const RecentJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/jobs`)
        .then(res => res.json())
        .then(data => {
            setJobs(data)
        })
    }, [])
    return (
        <div>
            <h2 className='text-center text-4xl'>Jobs of the day</h2>
            <p className='text-center text-xl mt- mb-5'>Search and connect with the right candidates faster</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job =><RecentJobsCard key={job._id}
                    job={job}></RecentJobsCard>)
                }
            </div>
        </div>
    );
};

export default RecentJobs;