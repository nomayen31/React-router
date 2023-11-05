import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <section className='flex justify-between px-10 mx-auto container shadow-md py-7 rounded-2xl mt-2 bg-slate-500'>
                <div>
                    <h1 className='text-xl font-bold '>Nomayen</h1>
                </div>
                <nav>
                    <ul className='flex gap-5'>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/products">Products</a>
                        </li>
                        <li>
                            <a href="/dashboard">DashBoard</a>
                        </li>

                    </ul>
                </nav>
            </section>
            <Outlet></Outlet>

            <Footer></Footer>





        </div>
    );
};

export default MainLayout;