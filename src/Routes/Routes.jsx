import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";

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
]);