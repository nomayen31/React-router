import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='flex mt-8'>
            <div className='w-[20%] bg-red-200 p-10'>
                <ul>
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/editprofile'>Edite Profile</Link>
                    </li>
                </ul>
            </div>
            <div className='w-[80%]  bg-purple-300 text-2xl text-center'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;