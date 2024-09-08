import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Heading from './src/components/Heading/Heading.jsx'
import App from './src/components/App/App.jsx'
import Footer from './src/components/Footer/Footer.jsx'

import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Heading />
    <App />
    <Footer />
  </StrictMode>,
)
