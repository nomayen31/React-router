import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';

 const myCreateRoute = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/products',
                element:<Products/>
            },
            {
                path:'/dashboard',
                element:<h1 className="text-center">dashboard</h1>
            }
        ]
    }
 ])
export default myCreateRoute;