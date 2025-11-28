import React from 'react';

import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png'
import Navbar from '../Shared/Navbar/Navbar';
const AuthLayout = () => {
    return (
        <div className=' bg-white max-w-10/12 mx-auto'>
            <div>
              <Navbar></Navbar>
            </div>
           <div className='flex'>
             <div className='flex-1 mt-15'>
                <Outlet></Outlet>
            </div>
            <div className='flex-1SSs'>
                <img src={authImage} alt="" />
            </div>
           </div>
        </div>
    );
};

export default AuthLayout;
