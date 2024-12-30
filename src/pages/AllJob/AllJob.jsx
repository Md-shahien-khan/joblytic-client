import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RecentJobsCard from '../Home/RecentJobsCard';

const AllJob = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        axios.get('http://localhost:5000/jobs')
        .then(res => {
            setLoading(false)
            setJobs(res.data)
        })
    }, [])
    return (
        <div>
            <h2 className='py-5 text-4xl -font-bold text-center'>Jobs Length : {jobs.length}</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job =><RecentJobsCard key={job._id}
                    job={job}></RecentJobsCard>)
                }
            </div>
        </div>
    );
};

export default AllJob;