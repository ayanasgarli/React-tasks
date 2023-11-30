import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes";
import { BasketProvider } from "./services/context/BasketContext";

const routes = createBrowserRouter(ROUTES);

function App() {
  return (
    <>
      <BasketProvider>
        <RouterProvider router={routes} />
      </BasketProvider>
    </>
  );
}

export default App;
