import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
//import App from './App.jsx';
import SiBar from './components/partials/SiBar.jsx';
import NavBar from './components/partials/NavBar.jsx';
import Footer from './components/partials/Footer.jsx';
//import Form from './components/Form.jsx';
//import Footer from './components/Form.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <SiBar />
    
    <Footer />
  </StrictMode>,
)

//<App />
