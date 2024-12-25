import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Helmet} from "react-helmet";

import Style from './Category.module.css';


export default function Category() {

    const [counter, setCounter] = useState()

    useEffect(()=> {


    }, [])  

  return <>
  <Helmet>
    <title>Category</title>
  </Helmet>
  <h1>Category</h1>
  <p>Lorem ipsum dolor sit amet.</p>
  
  </>
}
