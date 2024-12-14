import { FaMapMarkerAlt } from "react-icons/fa";


const RecentJobsCard = ({job}) => {
    const {title, company, company_logo, requirements, description, location, salaryRange} = job;
    return (
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
            <div className="flex gap-2 flex-wrap">
                {
                    requirements.map(skill => <p className="border rounded-lg text-center px-2 hover:text-blue-600 hover:bg-gray-100">{skill}</p>)
                }
            </div>
            <div className="card-actions justify-between items-center mt-4">
                <p>Salary : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                <button className="btn btn-primary">Apply</button>
            </div>
        </div>
        </div>
    );
};

export default RecentJobsCard;