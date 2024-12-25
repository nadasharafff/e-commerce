import React, { useContext } from 'react'
import RatingStars from '../Ratings/RatingsStars'
import { Link } from 'react-router-dom'
import ProductDetails from '../ProductDetails/ProductDetails'
import axios from 'axios'
import { AuthContext } from '../../Context/AuthContext'
import { Bounce, toast } from 'react-toastify'
import { addProductToCart } from '../../CartService'

export default function Product({ product }) {


      

    
      
  // async function addProductToCart(productId) {

  //   let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/cart", {
  //     productId: productId
  //   }, {
  //     headers: {
  //       token: userToken
  //     }
  //   })
  //   console.log(data);
    

  //   toast.success("Product added successfully to your cart", {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //     transition: Bounce,
  //     });
    
  // }
  return  <div className="max-w-2xl mx-auto">
      
      
  <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
    <Link to={"/productDetails/" + product._id}>
      <img className="rounded-t-lg p-8" src={product.imageCover} alt="product image"/>
        </Link>
      <div className="px-5 pb-5">
        <Link to={"/productDetails/" + product._id}>
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white line-clamp-1">{product.title}</h3>
          <p className='text-gray-900 tracking-tight dark:text-gray-400 line-clamp-1'>{product.description}</p>
        </Link>
        

 
        <RatingStars rating={product.ratingsAverage}/>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
          <button onClick={()=> addProductToCart(product._id)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
            to cart</button>
        </div>
      </div>
  </div>
</div>
}
