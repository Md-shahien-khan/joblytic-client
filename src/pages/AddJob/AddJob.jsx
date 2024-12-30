import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {
    const {user} = useAuth();
    const navigate = useNavigate();
    const handleAddJob = e =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        // console.log(formData.entries())
        const initialData = Object.fromEntries(formData.entries());
        // console.log(initialData);
        const {min, max, currency, ...newJob} = initialData;
        // console.log(newJob);
        newJob.salaryRange = {min, max, currency};
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');
        console.log(newJob);


        fetch('http://localhost:5000/jobs',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Job has Been Added",
                    showConfirmButton: false,
                    timer: 1500
                    });
                    navigate('/myPostedJobs')
                    }
            })
    }
    return (
        <div>
            <form onSubmit={handleAddJob} className="card-body">
                {/* Job title */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Title</span>
                </label>
                <input type="text" name="title" placeholder="Job Title" className="input input-bordered" required />
                </div>
                {/* job location */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Location</span>
                </label>
                <input type="text" name="location" placeholder="Job location" className="input input-bordered" required />
                </div>
                {/* job type */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Type</span>
                </label>
                <select defaultValue='Pick your job' className="select select-ghost w-full max-w-xs">
                    <option disabled >Pick Your Job</option>
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Internship</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                </select>
                </div>
                {/* job field */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Job field</span>
                </label>
                <select defaultValue='Pick your job field' className="select select-ghost w-full max-w-xs">
                    <option disabled>Pick Your Job Field</option>
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>Teaching</option>
                    <option>Customer Service</option>
                    <option>Sales</option>
                    <option>Law</option>
                    <option>Nursing</option>
                </select>
                </div>
                {/* salary range */}
                <p>Salary Range</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* min salary */}
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Minimum Salary</span>
                    </label>
                    <input type="number" name="min" placeholder="Minimum Salary" className="input input-bordered" required />
                    </div>  
                    {/* max salary */}
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Maximum Salary</span>
                    </label>
                    <input type="number" name="max" placeholder="Maximum Salary" className="input input-bordered" required />
                    </div>  
                    {/* currency */}
                    <div className="form-control">
                    <label className="label">
                    <span className="label-text">Currency</span>
                    </label>
                    <select defaultValue='Choose Currency' name="currency" className="select select-ghost w-full max-w-xs">
                        <option disabled >Choose Currency</option>
                        <option>BDT</option>
                        <option>Dollar</option>
                        <option>Ringgit</option>
                        <option>GBP</option>
                        <option>Japanes Yen</option>
                        <option>EURO</option>
                        <option>AED</option>
                        <option>Australian Dollar</option>
                        <option>INR</option>
                        <option>OMR</option>
                        <option>LKR</option>
                        <option>PKR</option>
                        <option>GHS</option>
                        <option>UGX</option>
                        <option>NGN</option>
                        <option>TWD</option>
                        <option>COP</option>
                        <option>CLP</option>
                        <option>KZT</option>
                        <option>MNT</option>
                        <option>KYD</option>
                        <option>JOD</option>
                        <option>BAM</option>
                        <option>HNL</option>
                        <option>GEL</option>
                        <option>LBP</option>
                    </select>
                    </div>
                </div>
                {/* Job Description */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Description</span>
                </label>
                <textarea className="textarea" name="description" placeholder="Job Description" required></textarea>
                </div>
                {/* Company Name */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Company Name</span>
                </label>
                <input type="text" name="company" placeholder="Company Name" className="input input-bordered" required />
                </div>

                {/* Job Requirements */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Requirements</span>
                </label>
                <textarea className="textarea" name="requirements" placeholder="Job Requirements" required></textarea>
                </div>
                {/* Responsibilities */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Responsibilities</span>
                </label>
                <textarea className="textarea" name="responsibilities" placeholder="Job Responsibilities In New Line" required></textarea>
                </div>
                {/* HR Name */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">HR Name</span>
                </label>
                <input type="text" name="hr_name" placeholder="HR Name" className="input input-bordered" required />
                </div>
                {/* HR Email*/}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Hr Email</span>
                </label>
                <input readOnly type="email" defaultValue={user?.email} name="hr_email" placeholder="HR Email" className="input input-bordered" required />
                </div>
                {/* Company logo URL*/}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Company Logo URL</span>
                </label>
                <input type="url" name="company_logo" placeholder="Company Logo URL" className="input input-bordered" required />
                </div>
                {/* Status*/}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Status</span>
                </label>
                <select className="select select-ghost w-full max-w-xs">
                    <option disabled selected>Status</option>
                    <option>Active</option>
                    <option>Expired</option>
                </select>
                </div>
                {/* Application Deadline */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Application Deadline</span>
                </label>
                <input type="date" name="applicationDeadline" placeholder="Application Deadline" className="input input-bordered" required />
                </div>
                {/* Submit Button */}
                <div className="form-control mt-6 w-3/12">
                <button className="btn btn-primary">Submit</button>
                </div>
        </form>
        </div>
    );
};

export default AddJob;