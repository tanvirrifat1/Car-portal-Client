import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProducts from "../../Pages/DasBoard/AddProducts/AddProducts";
import AllUsers from "../../Pages/DasBoard/AllUser/AllUsers";
import ManageProducts from "../../Pages/DasBoard/ManageProduct/ManageProducts";
import MyOrders from "../../Pages/DasBoard/MyOrders/MyOrders";
import Payment from "../../Pages/DasBoard/Payment/Payment";
import Error from "../../Pages/Error/Error";
// import MyAppointment from "../../Pages/DasBoard/MyOrders/MyOrders";
import AllCar from "../../Pages/Home/AllCar/AllCar";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoutes from "./AdminRoutes";
import SellerRoutes from "./SellerRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <Error></Error>,
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
            },
        ]
    },
    {
        path: '/dasboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
        // errorElement: <Error></Error>,
        children: [
            {
                path: '/dasboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dasboard/allusers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: '/dasboard/payment/:id',
                element: <AdminRoutes><Payment></Payment></AdminRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/orders/${params.id}`)
            },
            {
                path: '/dasboard/allproducts',
                element: <SellerRoutes><AddProducts></AddProducts></SellerRoutes>
            },
            {
                path: '/dasboard/manageProduct',
                element: <SellerRoutes><ManageProducts></ManageProducts></SellerRoutes>
            },
        ]
    }
])

export default router