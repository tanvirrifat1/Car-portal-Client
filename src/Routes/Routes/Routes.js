import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AllCar from "../../Pages/Home/AllCar/AllCar";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            // {
            //     path: '/allcar',
            //     element: <AllCar></AllCar>
            // },
            {
                path: '/car/:id',
                element: <PrivateRoute><AllCar></AllCar></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allcar/${params.id}`)
            }
        ]
    }
])

export default router