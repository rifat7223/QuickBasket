import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png'
const AuthLayout = () => {
    return (
        <div className=' bg-white max-w-10/12 mx-auto'>
            <div>
                <Logo></Logo>
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
