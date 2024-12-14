import { useLoaderData } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobDetails = () => {
    const {_id, title, company, company_logo, requirements, description, location, salaryRange} = useLoaderData();
    return (
        <div>
            <div className="card bg-base-100 shadow-2xl">
        <div className='flex gap-2 m-2 items-center'>
            <figure>
                <img
                className='w-12'
                src={company_logo} />
            </figure>
            <div>
                <h4 className='text-2xl'>{company}</h4>
                <p className="flex gap-2 items-center"><FaMapMarkerAlt />{location}</p>
            </div>
        </div>
        <div className="card-body">
            <h2 className="card-title">{title}
                <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{description}</p>
            <div className="flex gap-2 ">
                {
                    requirements.map((skill, index) => <p key={index} className="border rounded-lg text-center px-2 hover:text-blue-600 hover:bg-gray-100">{skill}</p>)
                }
            </div>
            <div className="card-actions justify-between items-center mt-4">
                <p>Salary : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                <Link to={`/jobApply/${_id}`}>
                    <button className="btn btn-primary">Apply Now</button>
                </Link>
            </div>
        </div>
        </div>
        </div>
    );
};

export default JobDetails;