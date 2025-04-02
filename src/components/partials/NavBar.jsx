import React from 'react'
import './NavBar.css'
function NavBar() {
    
  return (
    <>
    <header>
    <div className="logo">
          <a href="/"><img src="logo.png" alt="mon logo" /></a>
    </div>
        <nav>
            <ul>
                <li><a href="#Accueil"></a>Accueil</li>
                <li><a href="#Profil"></a>Profil</li>
                <li><a href="#Form"></a>Form</li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default NavBar