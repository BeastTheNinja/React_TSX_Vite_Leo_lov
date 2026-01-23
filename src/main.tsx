import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwindcss.css'
import { RoutesComponent } from './router/Routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesComponent />
  </StrictMode>,
)
