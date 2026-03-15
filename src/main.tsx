import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AccountsProvider } from './context/AccountsContext';
import './index.css'
import { registerSW } from 'virtual:pwa-register'

registerSW({ immediate: true })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AccountsProvider>
      <App />
    </AccountsProvider>
  </React.StrictMode>,
)
