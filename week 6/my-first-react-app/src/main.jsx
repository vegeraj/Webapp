import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProfileCard from './ProfileCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileCard />
    {/* App component is not rendered here, but you can add it if needed */}
  </StrictMode>,
)
