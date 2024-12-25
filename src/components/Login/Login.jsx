import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import Style from './Login.module.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { data, Link, useNavigate } from 'react-router-dom';

import * as Yup from 'yup';
import { AuthContext } from '../../Context/AuthContext';



// egyptian phone number Yup.matches(/^01 [0125] [0-9] {8}$/, 'Phone must be valid Egyptian number')
// password validation /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%!*?&])[A-Za-z\d@!#$%*&?]{8,}$/
export default function Login() {

  let {setuserToken} = useContext(AuthContext);
  
  
  

   let validationSchema = Yup.object().shape({
    email: Yup.string().email('Invaild Email').required('Email is required'),
  
    password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Minimum eight characters, at least one letter and one number').required('Password is required' ),
  
  })



  let navigate = useNavigate();

  const [apiError, setapiError] = useState('');

   const [loading, setLoading] = useState(false);


  function handleRegister(formValues){
  setLoading(true);

     axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, formValues)

     .then((response)=>{
      
      setLoading(false)

      setuserToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      
      
      navigate('/')
      
      
      // console.log(response);
      
     })
     .catch((response)=>{
      setLoading(false)
      setapiError(response?.response?.data?.message)
      
     });


    
  }
  let formik = useFormik({
    initialValues:{
     
     
      email:'',
      password:''
    },
    validationSchema,
    onSubmit:handleRegister
  });


   

  return <>

     <div className='py-11 mx-auto max-w-xl'>
     {apiError?   <div className=' mx-auto text-center bg-red-500 text-white font-bold rounded-lg p-3'>{apiError}</div> :null}

      <h2 className='text-3xl text-green-600 font-bold mb-6 mt-6'>Login Now</h2>

     <form onSubmit={formik.handleSubmit}>
 


  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > Enter Email address :</label>
        {formik.touched.email && formik.errors.email && <p className='text-red-500'>{formik.errors.email}</p>} 
   </div>


  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="pasword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password :</label>
      {formik.touched.password && formik.errors.password && <p className='text-red-500'>{formik.errors.password}</p>} 
  </div>

  

   <div className="flex items-center" >


   <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
    {loading? <i className='fas fa-spinner fa-spin'></i>:'Login'}
    
    </button>
    <p className='font-semibold text-blue-700 pl-5'> <Link to={'/register'}>Register Now</Link> </p>

   </div>
  
 
  </form>
     </div>
  
  </>
}
