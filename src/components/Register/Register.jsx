import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import Style from './Register.module.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';
import { AuthContext } from '../../Context/AuthContext';




// egyptian phone number Yup.matches(/^01 [0125] [0-9] {8}$/, 'Phone must be valid Egyptian number')
// password validation /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%!*?&])[A-Za-z\d@!#$%*&?]{8,}$/
export default function Register() {

  


   let validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'minimum length is 3 characters').max(55, 'maximum length is 55 characters').required('Name is required'),
    email: Yup.string().email('Invaild Email').required('Email is required'),
    phone: Yup.string().matches(/^01[0125][0-9]{8}$/, 'Enter Egyptian number').required('Mobile Number is required'),
    password: Yup.string().matches( ).required('Password is required'),
    rePassword  : Yup.string().oneOf([Yup.ref('password')], 'password and rePasswrod must be same').required('rePassword is required')
   })



  let navigate = useNavigate();

  const [apiError, setapiError] = useState('');

   const [loading, setLoading] = useState(false);


  function handleRegister(formValues){
  setLoading(true);

     axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, formValues)

     .then((response)=>{
      navigate('/login')
      setLoading(false)
      
      console.log(response);
      
     })
     .catch((response)=>{
      setLoading(false)
      // console.log(response.response.data.message);
      setapiError(response?.response?.data?.message)
      
     });

    // console.log(data);
    
    // if(data.message === 'success'){
    //   navigate('/')

    // }
    // else{
    //   // error
    // }
    // console.log(formValues);
    
  }
  let formik = useFormik({
    initialValues:{
      name:'',
      phone:'',
      email:'',
      password:'',
      rePassword:''
    },
    validationSchema,
    onSubmit:handleRegister
  });


   

  return <>

     <div className='py-11 mx-auto max-w-xl'>
     {apiError?   <div className=' mx-auto text-center bg-red-500 text-white font-bold rounded-lg p-3'>{apiError}</div> :null}

      <h2 className='text-3xl text-green-600 font-bold mb-6 mt-6'>Register Now</h2>

     <form onSubmit={formik.handleSubmit}>
  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-slate-900 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Name :</label>
      {formik.touched.name && formik.errors.name && <p className='text-red-500'>{formik.errors.name}</p>} 
 
  </div>


  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > Enter Email address :</label>
        {formik.touched.email && formik.errors.email && <p className='text-red-500'>{formik.errors.email}</p>} 
   </div>

  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Phone Number :</label>
      {formik.touched.phone && formik.errors.phone && <p className='text-red-500'>{formik.errors.phone}</p>} 
 
  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="pasword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password :</label>
      {formik.touched.password && formik.errors.password && <p className='text-red-500'>{formik.errors.password}</p>} 
  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} type="password" name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password again:</label>
      {formik.touched.rePassword && formik.errors.rePassword && <p className='text-red-500'>{formik.errors.rePassword}</p>} 
  
  </div>


  
  <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
    {loading? <i className='fas fa-spinner fa-spin'></i>:'Submit'}
    
    </button>

  </form>
     </div>
  
  </>
}
