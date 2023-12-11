import UserRoot from "../pages/User/UserRoot";
import Basket from "../pages/User/Basket";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import Products from "../pages/User/Products";
import User from "../pages/User/UserPage";
import Details from "../pages/User/Details";
import AdminRoot from "../pages/Admin/AdminRoot";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminProducts from "../pages/Admin/AdminProducts";
import AddProduct from "../pages/Admin/AddProduct";
import AdminUsers from "../pages/Admin/AdminUsers";
import AdminAddUser from "../pages/Admin/AddUser";
import EditProduct from "../pages/Admin/EditProduct";
import EditUser from "../pages/Admin/EditUser";

export const ROUTES =[
    {
        path:"/",
        element: <UserRoot />,
        children:[
            {
                path:"/login",
                element: <Login />,
            },
            {
                path:"/register",
                element: <Register />,
            },
            {
                index:true,
                element: <Products />,
            },
            {
                path:"/user",
                element: <User />,
            },
            {
                path:"/basket",
                element: <Basket />,
            },
            {
                path:"/detail/:id",
                element: <Details />,
            }
        ]
        
    },{
        path:"/admin",
        element:<AdminRoot />,
        children:[
            {
                index:true,
                element: <AdminProducts />,
            },
            {
                path:"login",
                element: <AdminLogin />,
            },
            {
                path:"add",
                element: <AddProduct />,
            },
            {
                path:"useradd",
                element: <AdminAddUser />,
            },
            {
                path:"editproduct/:id",
                element: <EditProduct />,
            },
            {
                path:"edituser/:id",
                element: <EditUser />,
            },
            {
                path:"users",
                element: <AdminUsers />,
            },
            {
                path:"detail/:id",
                element: <Details />,
            }
        ]

    }
]