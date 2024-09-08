import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Heading from './components/Heading/Heading.jsx'
import App from './components/App/App.jsx'
import Footer from './components/Footer/Footer.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Heading />
    <App />
    <Footer />
  </StrictMode>,
)
