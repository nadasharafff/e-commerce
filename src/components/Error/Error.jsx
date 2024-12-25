import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import Style from './Error.module.css';


export default function Error() {

    const [counter, setCounter] = useState()

    useEffect(()=> {


    }, [])  

  return <>
  <h1>Error</h1>
  <p>Lorem ipsum dolor sit amet.</p>
  
  </>
}
