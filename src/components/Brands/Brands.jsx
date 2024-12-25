import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import Style from './Brands.module.css';
import {Helmet} from "react-helmet";


export default function Brands() {

    const [counter, setCounter] = useState()

    useEffect(()=> {


    }, [])  

  return <>
  <Helmet>
    <title>Brands</title>
  </Helmet>
  <h1>Brands</h1>
  <p>Lorem ipsum dolor sit amet.</p>
  
  </>
}
