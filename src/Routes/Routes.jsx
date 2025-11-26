import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";

import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {path:'/',Component:Home},
        {path:'/Coverage',
          loader:()=>fetch('/Service.json'),
          Component:Coverage}
    ]
    
  },
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {path:'/login', Component:Login},
      {path:'/register',Component:Register}
    ]
  }
]);