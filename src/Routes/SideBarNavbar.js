import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';


import Paper1 from '../components/Paper1';

function SidebarNavbar() {
    return (
        <div className='flex justify-center'>
            <div>
                <Navbar />
                <div className=' flex justify-center'>
                    <div className='w-[20%]'><Paper1 /></div>
                    <div className='w-[80%]'><Outlet /></div>
                </div>
            </div>
 
        </div>
    );
}

export default SidebarNavbar;