import React, { useEffect, useState } from 'react'
import './Form.css'
import './NavBar.css'
function Form() {
 function submit (e){
    e.preventDefault();
    const [message, setMessage] = useState("");
    const [error, setError] = useState ("");
    

 }
    return (
    <>

        <header>

        <div className="logo">
          <a href=""><img src="logo.png" alt="Logo" /></a>
        </div>

        <nav>
            <ul>
                <li><a href="#Accueil"></a>Accueil</li>
                <li><a href="#Profil"></a>Profil</li>
                <li><a href="#Form"></a>Form</li>
            </ul>
        </nav>

        </header>

            <form onSubmit={submit} >

                <label htmlFor="name">Nom</label>
                <input type="text" id="name" placeholder='Votre nom' />
                <br />
                <br />

                <label htmlFor="prenom">Prenom</label>
                <input type="text" id="prenom" placeholder='Votre prenom' />
                <br />
                <br />

                <label htmlFor="email">Email</label>
                <input type="mail" id="email" placeholder='Votre email' />
                <br />
                <br />

                <label htmlFor="password">Mot de passe</label>
                <input type="password" id="password" placeholder='Votre mot de passe' />
            </form>
        </>
)
    
}

export default Form
