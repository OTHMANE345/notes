import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from './header';
import Home from './home';
import Recedencies from './projects/Recedencies';
import Footer from './Contact/footer';


export default function DefaultLayout() {
    
  return (
    <>
  
 <Navbar/>
<Home/> 
<Recedencies/>
<Footer/>


<Outlet/>
</>
  )
}
