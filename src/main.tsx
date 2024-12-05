import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppKitProvider } from './WalletContext.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <AppKitProvider>
      <App /> 
   </AppKitProvider> 
  </StrictMode>,
)
