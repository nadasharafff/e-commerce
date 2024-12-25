import React from 'react'
import {Helmet} from "react-helmet";
import Style from './Products.module.css';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Product from '../Product/Product';


export default function Products() {

   function getProducts() {
     return axios.get("https://ecommerce.routemisr.com/api/v1/products")
  }


    let { data } =  useQuery({
      queryKey: ['products'],
      queryFn: getProducts
    })

    
  return <>

    <Helmet>
      <title> Products</title>
    </Helmet>

    <div className='grid grid-cols-4 gap-3'>
      {data?.data.data.map((product, i) => {
        <Product product={product} key={i}/>
      })}
    </div>
  </>
}
