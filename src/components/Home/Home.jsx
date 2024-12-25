import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import Style from './Home.module.css';
import axios from 'axios';
import Product from '../Product/Product';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import {Helmet} from "react-helmet";


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([])

    useEffect(()=> {
      getProducts();

    }, [])  
    async function getProducts() {
      setIsLoading(true)
      let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products")
      setProducts(data.data);
      setIsLoading(false)


      
    }

  return <>
  <Helmet>
    <title>Home</title>
  </Helmet>
      { isLoading ? <LoadingScreen/>
    :
          <div className="grid grid-cols-4 gap-3">
          {products.map((product, index)=> {
           return  <Product product={product} key={index} />
     
     
     
          })}
       </div>
      }
  
  </>
}
