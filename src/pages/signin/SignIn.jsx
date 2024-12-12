import Lottie from "lottie-react";
import loginAnimationData from '../../assets/Lottie/login.json'
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
const SignIn = () => {
    
    const {signInUser} = useContext(AuthContext)
    const handleSignIn = e =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);

        signInUser(email, password)
            .then(result =>{
                console.log('Sign In', result.data)
            })
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-80">
                    <Lottie animationData={loginAnimationData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-center mt-4 text-5xl font-bold">Sign In now!</h1>
                <form onSubmit={handleSignIn} className="card-body">
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign In</button>
                    </div>
                    </form>
                    {/* {
                    errorMessage && <p className="text-red-600 p-4">{errorMessage}
                    </p>
                    }
                    {
                    success && <p className="text-green-600 p-4">Registration Successful</p>
                    }
                    <p className="p-4">
                        New User? Please <Link to="/register" className="text-green-800 font-bold">Sign in</Link>
                    </p> */}
                </div>
            </div>
        </div>
    );
};

export default SignIn;