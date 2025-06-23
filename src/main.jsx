import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Body from './Body.jsx';
import Animation from './Components/Animation.jsx'; 

import 'flowbite';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
           { path: '/animation', element: <Animation /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* ✅ Pass the router here */}
  </StrictMode>,
)
