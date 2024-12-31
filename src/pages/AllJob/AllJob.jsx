import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RecentJobsCard from '../Home/RecentJobsCard';
import { BiSearch } from 'react-icons/bi';

const AllJob = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState(false);
    const [search, setSearch] = useState("");
    const [searchJob, setSearchJob] = useState("");
    const [minSalary, setMinSalary] = useState("");
    const [maxSalary, setMaxSalary] = useState("");


    console.log(sort)
    useEffect(() =>{
        axios.get(`http://localhost:5000/jobs?sort=${sort}&search=${search}&searchByTitle=${searchJob}&min=${minSalary}&max=${maxSalary}`)
        .then(res => {
            setLoading(false)
            setJobs(res.data)
        })
    }, [sort, search, searchJob, minSalary, maxSalary])
    return (
        <div>
            <h2 className='py-5 text-4xl -font-bold text-center'>Jobs Length : {jobs.length}</h2>
            <div className="w-11/12 mx-auto bg-base-200 py-5 p-3 flex items-center justify-between">
                <button onClick={() => setSort(!sort)} 
                className={`btn btn-neutral ${sort && "btn-success"}`}>
                    {sort == true ? "sorted by Salary" : "Sort by Salary"}
                </button>
                <BiSearch></BiSearch>
                <input 
                onKeyUp={(e) => setSearch(e.target.value)}
                type="text" 
                name="" 
                placeholder='Search jobs by location' 
                className='input w-full max-w-xs' />
                <BiSearch></BiSearch>
                <input 
                onKeyUp={(e) => setSearchJob(e.target.value)}
                type="text" 
                name="" 
                placeholder='Search jobs by title' 
                className='input w-full max-w-xs' />
                <div className='space-y-3'>
                    <input 
                    onKeyUp={(e) => setMinSalary(e.target.value)}
                    type="text" 
                    name="" 
                    placeholder='min salary' 
                    className='input w-full max-w-xs' />
                    <input 
                    onKeyUp={(e) => setMaxSalary(e.target.value)}
                    type="text" 
                    name="" 
                    placeholder='max salary' 
                    className='input w-full max-w-xs' />
                </div>
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