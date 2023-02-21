import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ErrorPage from "./pages/Error"
import RootLayout from "./pages/Root";
import Product from "./components/Product";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home content='My Home Pagez' /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:id', element: <Product /> }
    ]
  }

]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
