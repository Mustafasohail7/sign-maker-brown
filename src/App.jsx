import './App.css'

import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState,useEffect } from 'react'

import Home from './pages/HomePage'
import Error from './pages/ErrorPage'
import Letters from './pages/LettersPage'
import AcrylicLetters from './pages/AcrylicLettersPage'
import LightBox from './pages/LightBoxPage'
import Quote from './pages/QuotePage'

import CartOverlay from './components/CartOverlay/CartOverlay'
import Footer from './components/Footer/Footer'

function App() {

  const [isMobile, setIsMobile] = useState(false);
  const [order,setOrder] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 785); // Adjust the breakpoint as needed
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const router = createBrowserRouter([
    {
      name: 'Home', path: '/', exact: true, 
      element: <Home order={order} setCartOpen={setCartOpen} isMobile={isMobile} />,
      errorElement: <Error/>,
    },
    {
      name: '3D Letters', path: '/3d-letters', exact: true,
      element: <Letters order={order} setCartOpen={setCartOpen} isMobile={isMobile} setOrder={setOrder} />,
    },
    {
      name: 'Acrylic Letters', path: '/acrylic-letters', exact: true,
      element: <AcrylicLetters order={order} setCartOpen={setCartOpen} isMobile={isMobile} />,
    },
    {
      name: 'LED Lightbox', path: '/led-lightbox', exact: true,
      element: <LightBox order={order} setCartOpen={setCartOpen} isMobile={isMobile} />,
    },
    {
      name: 'Free Quote', path: '/quote', exact: true,
      element: <Quote order={order} setCartOpen={setCartOpen} isMobile={isMobile} />,
    }
  ])

  return (
    <>
      <CartOverlay order={order} setOrder={setOrder} cartOpen={cartOpen} setCartOpen={setCartOpen}/>
      <RouterProvider router={router}/>
      <Footer isMobile={isMobile} />
    </>
  )
}

export default App
