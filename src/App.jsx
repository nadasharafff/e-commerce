import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import Brands from './components/Brands/Brands'
import Category from './components/Category/Category'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Products from './components/Products/Products'
import Error from './components/Error/Error'
import AuthContextProvider from './Context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ProtectAuthRoutes from './components/ProtectAuthRoutes/ProtectAuthRoutes'
import ProductDetails from './components/ProductDetails/ProductDetails'
import { ToastContainer } from 'react-toastify'
import ShippingAddress from './components/ShippingAddress/ShippingAddress'
import Orders from './components/Orders/Orders'
import { Offline, Online } from 'react-detect-offline'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'





function App() {

  const queryClient = new QueryClient();


  let router = createBrowserRouter([  
    {path: '' , element: <Layout/>, children: [
      {index: true , element: <ProtectedRoute><Home/></ProtectedRoute> },
      {path:'products', element: <ProtectedRoute><Products/></ProtectedRoute> },
      {path:'cart', element: <ProtectedRoute><Cart/></ProtectedRoute> },
      {path:'brands', element: <ProtectedRoute><Brands/></ProtectedRoute> },
      {path: 'category', element: <ProtectedRoute><Category/></ProtectedRoute>},
      {path: 'productDetails/:id', element: <ProtectedRoute> <ProductDetails/> </ProtectedRoute>},
      {path: 'shippingAddress/:cartId', element: <ProtectedRoute> <ShippingAddress/> </ProtectedRoute>},
      {path: 'allorders', element: <ProtectedRoute> <Orders/> </ProtectedRoute>},
      {path: 'login', element: <ProtectAuthRoutes><Login/></ProtectAuthRoutes>},
      {path:'register', element:<ProtectAuthRoutes> <Register/></ProtectAuthRoutes>},
      {path:'*', element: <Error/>}
  
    ]}
  
  
  ])
  




  return (
    <>
    
    <QueryClientProvider client={queryClient}>
           <AuthContextProvider>
              <RouterProvider router={router}></RouterProvider>
              <ToastContainer />
              {/* <Online>Only shown when you're online</Online> */}
                   {/* <div className=" absolute start-5 p-5 rounded-md bg-yellow-200">
                         <Offline>Only shown offline (surprise!)</Offline>
                   
                   </div> */}
           </AuthContextProvider>
    </QueryClientProvider>
     
    </>
  )
}

export default App
