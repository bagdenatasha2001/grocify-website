import react from 'react'
import './index.css'
import Home from './components/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits.jsx'
import Dairy from './components/Dairy/Dairy.jsx'

import Seafood from './components/Seafood/Seafood.jsx'
import Allproducts from './components/Allproducts/Allproducts.jsx'
import Layout from './components/Layout/Layout.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import ProcessPage from './pages/ProcessPage.jsx'
import Products from './components/Products/Products.jsx'
import Faq from './pages/Faq.jsx'



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/fruits',
          element: <Fruits />,
        },
        {
          path: '/dairy',
          element: <Dairy />,
        },
        {
          path: '/seafood',
          element: <Seafood />,
        },
        {
          path: '/allproducts',
          element: <Allproducts />,
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/process',
          element: <ProcessPage/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/product',
          element: <Products/>
        },
         {
          path: '/faq',
          element: <Faq/>
        },
      ]
    },


  ])


  return <RouterProvider router={router} />

}

export default App
