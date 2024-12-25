import React, { useContext } from 'react'

import { useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { AuthContext } from '../../Context/AuthContext';
import { useParams } from 'react-router-dom';



// egyptian phone number Yup.matches(/^01 [0125] [0-9] {8}$/, 'Phone must be valid Egyptian number')
// password validation /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%!*?&])[A-Za-z\d@!#$%*&?]{8,}$/
export default function ShippingAddress() {
    const { cartId } =  useParams()
    

  let {setuserToken} = useContext(AuthContext);
  
  
  

   let validationSchema = Yup.object().shape({
    city: Yup.string().required('City is required'),
    details: Yup.string().required('Details is required'),
    phone: Yup.string().required('Phone is required')
  })


   const [loading, setLoading] = useState(false);


  function handleRegister(formValues){
  setLoading(true);

     axios.post("https://ecommerce.routemisr.com/api/v1/orders/checkout-session/" + cartId, { ShippingAddress: formValues },{
        headers:{
            token: localStorage.getItem("token")
        }, 
        params: {
            url: 'http://localhost:5173'
        }
     })

     .then(({ data })=>{
      
      setLoading(false)
      console.log(data.session.url);
      
      location.href = data.session.url
      
     })
     .catch((err)=>{
      setLoading(false)
      
     });


    
  }
  let formik = useFormik({
    initialValues:{
     
     
      city:'',
      details:'',
      phone:''
    },
    validationSchema,
    onSubmit:handleRegister
  });


   

  return <>

     <div className='py-11 mx-auto max-w-xl'>

      <h2 className='text-3xl text-blue-600 font-bold mb-6 mt-6'>Add your shipping address</h2>

     <form onSubmit={formik.handleSubmit}>
 


  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.city} type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > Your City:</label>
        {formik.touched.city && formik.errors.city && <p className='text-red-500'>{formik.errors.city}</p>} 
   </div>


  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.details} type="text" name="details" id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > Details:</label>
        {formik.touched.details && formik.errors.details && <p className='text-red-500'>{formik.errors.details}</p>} 
   </div>



  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > phone:</label>
        {formik.touched.phone && formik.errors.phone && <p className='text-red-500'>{formik.errors.phone}</p>} 
   </div>


 

  

   <div className="flex items-center" >


   <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {loading? <i className='fas fa-spinner fa-spin'></i>:'Check out'}
    
    </button>
   
   </div>
  
 
  </form>
     </div>
  
  </>
}

