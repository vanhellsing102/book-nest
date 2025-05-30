import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from '../components/Login';
import Register from "../components/Register";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Book from "../components/Book";
import PrivateRoute from "./PrivateRoute";
import Orders from "../pages/Dashboard/Orders";
import DashBoard from "../pages/Dashboard/Dashboard/DashBoard";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/Dashboard/Dashboard/DashboardLayout";
import ManageBook from "../pages/Dashboard/Dashboard/ManageBook";
import AddBook from "../pages/Dashboard/Dashboard/AddBook";
import EditBook from "../pages/Dashboard/Dashboard/EditBook";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
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
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: '/book/:id',
                element: <Book></Book>
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <AdminRoute><DashboardLayout></DashboardLayout></AdminRoute>,
        children: [
            {
                path: "",
                element: <AdminRoute><DashBoard></DashBoard></AdminRoute>
            },
            {
                path: "add-book",
                element: <AdminRoute><AddBook></AddBook></AdminRoute>
            },
            {
                path: "manage-book/edit-book/:id",
                element: <AdminRoute><EditBook></EditBook></AdminRoute>
            },
            {
                path: "manage-book",
                element: <AdminRoute><ManageBook></ManageBook></AdminRoute>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLogin></AdminLogin>
    }
])
export default Router;