import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if(loading){
        return <span className="loading loading-bars loading-xs"></span>
    }
    if(user){
        return children
    }

    return <Navigate to='/signin' state={location?.pathname }></Navigate>

    // return (
    //     <div>
            
    //     </div>
    // );
};

export default PrivateRouter;