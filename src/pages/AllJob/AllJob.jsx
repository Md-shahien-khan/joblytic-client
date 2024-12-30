import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RecentJobsCard from '../Home/RecentJobsCard';

const AllJob = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState(false);


    console.log(sort)
    useEffect(() =>{
        axios.get(`http://localhost:5000/jobs?sort=${sort}`)
        .then(res => {
            setLoading(false)
            setJobs(res.data)
        })
    }, [sort])
    return (
        <div>
            <h2 className='py-5 text-4xl -font-bold text-center'>Jobs Length : {jobs.length}</h2>
            <div className="w-11/12 mx-auto bg-base-200 py-5 p-3 flex items-center">
                <button onClick={() => setSort(!sort)} 
                className={`btn btn-neutral ${sort && "btn-success"}`}>
                    {sort == true ? "sorted by Salary" : "Sort by Salary"}
                </button>
            </div>
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