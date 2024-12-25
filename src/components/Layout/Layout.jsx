import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import Style from './Layout.module.css';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';


export default function Layout() {

    const [counter, setCounter] = useState()

    useEffect(()=> {


    }, [])  

  return <>

  <NavBar/> 

 <div className="container py-20 mx-auto px-20">
 <Outlet></Outlet>
 </div>

  <Footer/>
  
  
  </>
}
