import './App.css'

import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState,useEffect } from 'react'

import Home from './pages/HomePage'
import Error from './pages/ErrorPage'
import Letters from './pages/LettersPage'
import AcrylicLetters from './pages/AcrylicLettersPage'
import LightBox from './pages/LightBoxPage'

function App() {

  const [isMobile, setIsMobile] = useState(false);

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
      element: <Home isMobile={isMobile} />,
      errorElement: <Error/>,
    },
    {
      name: '3D Letters', path: '/3d-letters', exact: true,
      element: <Letters isMobile={isMobile} />,
    },
    {
      name: 'Acrylic Letters', path: '/acrylic-letters', exact: true,
      element: <AcrylicLetters isMobile={isMobile} />,
    },
    {
      name: 'LED Lightbox', path: '/led-lightbox', exact: true,
      element: <LightBox isMobile={isMobile} />,
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
