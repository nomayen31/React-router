import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Spinner from '../Components/Spinner/Spinner';

const MainLayout = () => {
    // const navigation = useNavigation();
    // console.log(navigation.state === 'loading');
    // const isLoadingData = navigation.state === 'loading';
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
            {/* {
                isLoadingData ? <Spinner></Spinner> : <div className='min-h-screen'><Outlet></Outlet></div>
            } */}
            <div className='min-h-screen'><Outlet></Outlet></div>


            <Footer></Footer>





        </div>
    );
};

export default MainLayout;