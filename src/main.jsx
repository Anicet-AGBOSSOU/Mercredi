import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx';
import SiBar from './components/partials/SiBar.jsx';
import NavBar from './components/partials/NavBar.jsx';
import Footer from './components/partials/Footer.jsx';
import Accueil from './components/Accueil.jsx';
import Form from './components/Form.jsx';
import Profil from  './components/Profil.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SiBar />
    <NavBar />
    <Footer />
    <Accueil />
    <Form />
    <Profil />
  </StrictMode>,
)

//<App />