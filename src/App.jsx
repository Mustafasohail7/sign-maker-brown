import './App.css'

import {createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/HomePage'
import Error from './pages/ErrorPage'

function App() {

  const router = createBrowserRouter([
    {
      name: 'Home', path: '/', exact: true, 
      element: <Home/>,
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
