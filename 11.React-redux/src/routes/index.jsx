import Home from "../pages/User/Home";
import Categories from "../pages/User/Categories";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import Basket from "../pages/User/Basket";
import UserPage from "../pages/User/UserPage";
import UserRoot from "../pages/User/UserRoot";
import AdminCategories from "../pages/Admin/AdminCategories";
import Dashboard from "../pages/Admin/Dashboard";
import AddCategory from "../pages/Admin/AddCategory";
import AdminLogin from "../pages/Admin/AdminLogin";
import Users from "../pages/Admin/Users";
import AdminRoot from "../pages/Admin/AdminRoot";

export const ROUTES = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "userPage",
        element: <UserPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
        {
            index: true,
            element: <Dashboard/>
        },
        {
            path: 'add-category',
            element: <AddCategory/>
        },
        {
            path: 'login',
            element: <AdminLogin/>
        },
        {
          path: 'categories',
          element: <AdminCategories/>
        }
        ,
        {
          path: 'users',
          element: <Users/>
        }
    ]
  },
];
