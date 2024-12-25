import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import logo from '../../assets/images/logo1.jpeg'
import Style from './NavBar.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';


export default function NavBar() {
       let {userToken, setuserToken} = useContext(AuthContext)
 console.log(userToken);
 
 const navigate = useNavigate();

 function signOut(){
  setuserToken("");
  localStorage.removeItem("token");
  navigate('/login')
 }
 


    

    useEffect(()=> {


    }, [])  

  return <>
  
  <nav className='bg-gray-300 static lg:fixed top-0 left-0 right-0 z-99'>

    <div className="container mx-auto  flex flex-col lg:flex-row justify-between items-center">
    <div className='flex flex-col lg:flex-row'>
      <img className='ms-20' src={logo} width={40} alt="logo" />
      {userToken &&
       <ul className='justify-around pl-10 flex flex-col lg:flex-row items-center'>
     
       <li className='text-md mx-4 text-slate-900 font-light py-2'>  <NavLink to={''}>Home</NavLink>             </li>
       <li className='text-md mx-4 text-slate-900 font-light py-2'>  <NavLink to={'cart'}>Cart</NavLink>          </li>
       <li className='text-md mx-4 text-slate-900 font-light py-2'>  <NavLink to={'category'}>Category</NavLink>  </li>
       <li className='text-md mx-4 text-slate-900 font-light py-2'>  <NavLink to={'brands'}>Brands</NavLink>  </li>
       <li className='text-md mx-4 text-slate-900 font-light py-2'>  <NavLink to={'products'}>Products</NavLink>  </li>
      
     </ul>
      
      }
     

    </div>


    <div>
    <ul className='flex flex-col lg:flex-row justify-around pl-10'>
  { !userToken && <>
    <li className='py-2 text-lg mx-4 text-slate-900 font-normal'>  <NavLink to={'login'}>Login</NavLink>             </li>
    <li className='py-2 text-lg mx-4 text-slate-900 font-normal'>  <NavLink to={'register'}>Register</NavLink>        </li>
    </> }
    
{  userToken &&   <li >  <button onClick={signOut} className='py-2 text-lg mx-4 text-slate-900 font-normal'>Signout</button>          </li>}

     <li className='py-2 text-lg mx-4 text-slate-900 font-normal flex justify-between items-center'>  
      <i className='py-2 fab fa-facebook mx-2 fa-md'></i>
      <i className='py-2 fab fa-twitter mx-2 fa-md'></i>
      <i className='py-2 fab fa-instagram mx-2 fa-md'></i>
      <i className='py-2 fab fa-tiktok mx-2 fa-md'></i>
      <i className='py-2 fab fa-youtube mx-2 fa-md'></i>
     </li>
    
    
   </ul>

    </div>

    </div>

  </nav>
  
  </>
}
