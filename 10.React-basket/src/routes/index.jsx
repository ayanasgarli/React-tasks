import Categories from "../pages/Categories";
import Basket from "../pages/Basket";
import UserRoot from "../pages/UserRoot";

export const ROUTES = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Categories />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
];
