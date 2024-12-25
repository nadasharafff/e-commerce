import axios from "axios";
import { Bounce, toast } from "react-toastify";

   
 export async function addProductToCart(productId) {

    let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/cart", {
      productId: productId
    }, {
      headers: {
         token: localStorage.getItem("token")
      }
    })
    console.log(data);
    

    toast.success('Product added successfully to Cart', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
        theme: "colored",
      transition: Bounce,
      
      });
    
  }