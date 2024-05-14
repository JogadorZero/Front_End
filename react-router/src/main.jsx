import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Product from './assets/routes/Products.jsx'
import ErrorPage from './assets/routes/ErrorPage.jsx'
import Home from './assets/routes/Home.jsx'
import Messi from './assets/routes/Messi.jsx'
import EditForm from './assets/routes/EditForm.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Product />
      },
      {
        path: '/products/:id', //Rota dinâmica
        element: <EditForm />
      },
      {
        path: '/products/:id/editform', //Rota dinâmica
        element: <EditForm />
      },
      {
        path: '/messi',
        element: <Messi />
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
