import React from 'react';
import { NavLink } from 'react-router';
import Logo from '../../Components/Logo/Logo';

const Navbar = () => {
  const links=<>
   <li><NavLink>Services</NavLink></li>
   <li><NavLink to='/Coverage'>Coverage</NavLink></li>
   <li><NavLink>About Us</NavLink></li>
   <li><NavLink>Pricing</NavLink></li>
   <li><NavLink>Blog</NavLink></li>
   <li><NavLink>Contact</NavLink></li>
  </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm max-w-11/12 mx-auto rounded-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
          links
        }
        
      </ul>
    </div>
   <div className='flex items-end  '>
     <Logo></Logo>
     <h3 className='-ms-5 font-bold'>QuickBasket</h3>
   </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {
      links
    }
     
    </ul>
  </div>
  <div className="flex gap-4 navbar-end">
    
    <button className="btn"><NavLink to='/login'>Sing In</NavLink></button>
    <button className="btn"><NavLink to='/register'>Sing Up</NavLink></button>
  </div>
</div>
        </div>
    );
};

export default Navbar;