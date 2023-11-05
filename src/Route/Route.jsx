import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';
import DashBoard from '../Layouts/DashBoard';
import Dashboard from '../Pages/Dashboard/Dashboard';

const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products />,
                loader: () => fetch('https://dummyjson.com/products')
            },
            {
                path: '/products/:id',
                loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.id}`),
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>,
                children: [
                    {
                        path: '/dashboard',
                        element: <Dashboard></Dashboard>
                    }
                ]
            }
        ]
    }
])
export default myCreateRoute;

// 2.5