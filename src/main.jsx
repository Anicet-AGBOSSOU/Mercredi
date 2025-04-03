import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Form from './components/Form'
//import Form from './components/partials/Form'
//import App from './App.jsx'
//import NavBar from './components/partials/NavBar.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
  </StrictMode>,
)
