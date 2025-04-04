import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/css/bootstrap.min.js'

import Home from './Home.jsx';
import Profil from './components/Profil.jsx';
import Form from './components/Form.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Profil />
    <Form />
    
  </StrictMode>,
)










