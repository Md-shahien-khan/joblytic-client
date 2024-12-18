import Lottie from "lottie-react";
import loginAnimationData from '../../assets/Lottie/login.json'
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import axios from "axios";
const SignIn = () => {
    
    const {signInUser, loading} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';
    const provider = new GoogleAuthProvider();


    const handleSignIn = e =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);

        signInUser(email, password)
            .then(result =>{
                console.log('Sign In', result.user.email);
                const user = {email : result.user.email}
                // jwt
                axios.post('http://localhost:5000/jwt', user, {
                withCredentials : true })
                    .then(res => {
                        console.log(res.data);
                    })
                // navigate(from);
                
            })
            .catch(error => {
                console.log(error);
        });

  
    };
    // Handle Google login
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            navigate(from);
        })
        .catch(error => {
        console.log("Google login error:", error);
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
                        <button className="btn btn-neutral mt-2" onClick={handleGoogleSignIn} disabled={loading}>
                        <FaGoogle /> Login with Google
                        </button>
                    </div>
                    <Link to='/register'>new? then Register</Link>
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