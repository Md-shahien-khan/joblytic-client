import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/signin/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRouter from "./PrivateRouter";
import JobApply from "../pages/JobApple/JobApply";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement : <h2>Route not found</h2>,
      children : [
        {
          path : '/',
          element : <Home></Home>
        },
        {
          path : '/register',
          element : <Register></Register>
        },
        {
          path : '/signin',
          element : <SignIn></SignIn>
        },
        {
          path : '/jobs/:id',
          element : <PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
          loader : ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path : '/jobApply/:id',
          element : <PrivateRouter><JobApply></JobApply></PrivateRouter>
        }
      ]
    },
]);

export default router;