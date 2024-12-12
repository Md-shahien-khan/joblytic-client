import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import registerAnimationData from '../../assets/Lottie/register.json'
import AuthContext from '../../context/AuthContext/AuthContext';
import { Link } from 'react-router-dom';

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userName = form.name.value;
        console.log(userName, email, password);

        setErrorMessage('');
        setSuccess(false);

        if (password.length < 6) {
            setErrorMessage('Password should be at least 6 characters');
            return;
        }
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordPattern.test(password)) {
            setErrorMessage('Password must contain at least one uppercase and one lowercase letter');
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-80">
                    <Lottie animationData={registerAnimationData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-center mt-4 text-5xl font-bold">Register now!</h1>
                <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                        <label className="label">
                        <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name"
                        className="input input-bordered" required
                        />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    </form>
                    {
                    errorMessage && <p className="text-red-600 p-4">{errorMessage}
                    </p>
                    }
                    {
                    success && <p className="text-green-600 p-4">Registration Successful</p>
                    }
                    <p className="p-4">
                        Already have an account? Please <Link to="/signin" className="text-green-800 font-bold">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;