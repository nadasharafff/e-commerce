import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import Style from './Cart.module.css';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import CartProduct from '../CartProduct/CartProduct';
import { Link } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import {Helmet} from "react-helmet";

export default function Cart() {

 
    const [isLoading, setIsLoading] = useState(true)

    const [cart, setCart] = useState({products: []})

    useEffect(()=> {
      getUserCart()

    }, [])  


    async function getUserCart() {
      setIsLoading(true)
      let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/cart", {
        headers: {
          token: localStorage.getItem("token")
        }
      }).finally(() => {
          setIsLoading(false)
      })
      console.log(data)
      setCart(data.data);
      
    }


    function clearCart() {
       axios.delete("https://ecommerce.routemisr.com/api/v1/cart", {
        headers: {
          token: localStorage.getItem("token")
        }
      }).finally(() => {
      setCart({products: []});
          
      })
    }


    if(isLoading){
      return <LoadingScreen/>
    }

   
  return <>
     <Helmet>
      <title>Cart</title>
     </Helmet>
      { cart.products.length !== 0 ? <div className=" bg-gray-100 pt-20">
    <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div className="rounded-lg md:w-2/3">
            {cart?.products.map((product, index)=> {
              return <CartProduct key={index} product={product} setCart={setCart} cart={cart} />
            })}
        
      </div>
    
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">{cart?.totalCartPrice}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$0</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">{cart?.totalCartPrice}</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <Link to={"/shippingAddress/" + cart?._id} className="mt-6 w-full block text-center rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</Link>
      </div>
    </div>
    <button onClick={clearCart} className='px-4 py-2 borde-5 border-red-500 bg-red-500 text-white hover:bg-red-800 mx-auto rounded-md block'>Clear Cart</button>
  </div>
            : <h1 className='text-5xl text-center text-red-800'>Your Cart is empty</h1> }
  </>
}
