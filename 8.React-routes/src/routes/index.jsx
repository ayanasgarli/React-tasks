import About from "../pages/User/About";
import Contact from "../pages/User/Contact";
import Home from "../pages/User/Home";
import NotFound from "../pages/User/NotFound";
import UserRoot from "../pages/User/UserRoot";
import AdminRoot from "../pages/Admin/AdminRoot";
import Site from "../pages/Admin/Site";
import Dashboard from "../pages/Admin/Dashboard";
import Categories from "../pages/Admin/Categories";
import AddCategory from "../pages/Admin/AddCategory";
import CategoryDetail from "../pages/Admin/CategoryDetail";
import Suppliers from "../pages/Admin/Suppliers";

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
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "home",
        element: <Site />,
      },
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "",
        element: <AddCategory />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "",
        element: <CategoryDetail />,
      },
      {
        path: "suppliers",
        element: <Suppliers />,
      },
    ],
  },
];
