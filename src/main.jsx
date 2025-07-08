import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router/root'
import TestContextWrapper from './store/testContext'

createRoot(document.getElementById('root')).render(
  <TestContextWrapper>
    <RouterProvider router = {router} />
  </TestContextWrapper>
)
