import React from 'react'
import ReactDOM from 'react-dom/client'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'

// ** Route Layout
import Root from './layouts/layout.tsx'

// ** Style
import './styles/globals.css'

// ** Page
import CaptureTools from './pages/capture-tools/capture-tools.tsx'

// ** Store
import { Provider } from 'react-redux'
import store from './store/index.ts'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "capture-tools",
        element: <CaptureTools />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
)
