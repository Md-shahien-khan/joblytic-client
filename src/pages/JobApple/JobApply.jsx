import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const {id} = useParams()
    // console.log(id);
    const {user} = useAuth();
    // console.log(id, user);


    const submitJobApplication = e =>{
        e.preventDefault();

        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        const nationality = form.nationality.value;
        const gender = form.gender.value;
        const dob = form.dob.value;
        const whyHire = form.whyHire.value;

        // console.log(linkedIn, github, resume, nationality, gender, dob, whyHire);

        const jobApplication = {
            job_id : id,
            applicant_email : user.email,
            linkedIn,
            github, 
            resume
        };

        fetch('http://localhost:5000/job-applications', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Application Submitted Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
     <div className="card bg-base-100 w-2/5 mx-auto shadow-2xl">
            <form onSubmit={submitJobApplication} className="card-body">
            <h2 className='text-2xl text-blue-600 font-bold text-center'>Apply Form</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn URL</span>
                    </label>
                    <input type="url" name="linkedIn" placeholder="LinkedIn URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Github URL</span>
                    </label>
                    <input type="url" name="github" placeholder="Github URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume URL</span>
                    </label>
                    <input type="url" name="resume" placeholder="Resume URL" className="input input-bordered" required />
                </div>

                {/* New fields */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Nationality</span>
                    </label>
                    <input type="text" name="nationality" placeholder="Your Nationality" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Gender</span>
                    </label>
                    <select name="gender" className="select select-bordered" required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date of Birth</span>
                    </label>
                    <input type="date" name="dob" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Why should we hire you?</span>
                    </label>
                    <textarea name="whyHire" placeholder="Tell us why you are the best candidate for this role" className="textarea textarea-bordered" required></textarea>
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Apply</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;
