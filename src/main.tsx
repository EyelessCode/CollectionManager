import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@src/index.css';
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from '@src/index'

const router=createRouter({routeTree:routeTree})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
