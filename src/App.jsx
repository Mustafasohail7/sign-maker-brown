import './App.css'

import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState,useEffect } from 'react'

import Home from './pages/HomePage'
import Error from './pages/ErrorPage'

function App() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth)
      setIsMobile(window.innerWidth <= 780); // Adjust the breakpoint as needed
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
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
