import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
    const applications = useLoaderData();

    const handleStatusUpdate = (e, id) =>{
        console.log(e.target.value, id);

        const data = {
            status : e.target.value
        }
        fetch(`http://localhost:5000/job-applications/${id}`, {
            method : 'PATCH',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Application status updated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                    });
                    // navigate('/myApplications')
                    }
            })
    };


    return (
        <div>
            <h2>Applications for this job {applications.length}</h2>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>LinkedIn</th>
                </tr>
                </thead>
                <tbody>
                    {
                        applications.map((app, index) => <tr key={app._id}>
                            <th>{index + 1}</th>
                            <td>{app.applicant_email}</td>
                            <td>{app.resume}</td>
                            <td>
                            <select
                            onChange={(e) => handleStatusUpdate(e, app._id)}
                            defaultValue={app.status || 'change status'}
                            className="select select-bordered select-xs w-full max-w-xs">
                                <option disabled >Change Staus</option>
                                <option>Under Review</option>
                                <option>Set Interview</option>
                                <option>Hired</option>
                                <option>Rejected</option>
                            </select>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ViewApplications;