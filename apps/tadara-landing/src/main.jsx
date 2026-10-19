import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AdminApp from './admin/AdminApp.jsx'
import PrivacyPage from './consent/PrivacyPage.jsx'

const pathname = window.location.pathname
const isAdminPath = pathname.startsWith('/admin')
const isPrivacyPath = pathname === '/confidentialite' || pathname === '/confidentialite/'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isAdminPath ? <AdminApp /> : isPrivacyPath ? <PrivacyPage /> : <App />}
  </StrictMode>,
)
