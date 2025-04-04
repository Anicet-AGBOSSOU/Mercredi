import React from 'react'
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './Accueil.css'

function Accueil() {
  return (
    <> 
    <div className='accueil-container'>
            <h1>Benvenu sur notre site !!!</h1>
            <p className='subtitle' > Votre destination pour un bon suivi sur les métiers du digital </p>

        <main className='accueil-main'>
            <section className='featured-content'>
                <h2>Découvrez nos fonctionnalités principales</h2>
                <ul>
                    <li>Fonctionnalité 1 : Explorer les métiers du digital</li>
                    <li>Fonctionnalité 2 : Formez vous à un métier au choix</li>
                    <li>Fonctionnalité 3 : Faire des tests pour la certification</li>
                </ul>
            </section>

            <section className='call-to-action'>
                <p> <strong>Prêt à commencer ???</strong></p>
                <button><strong>Se connecter</strong></button>
                <button><strong>S'inscrire</strong></button>
                <button><strong>En savoir plus</strong></button>
            </section>

            <section className='pourquoi-nous-choisir'>
                <h2>Pourquoi choisir DCLIC</h2>
                <ul>
                    <li>Avantage clé 1</li>
                    <li>Avantage clé 2</li>
                    <li>Avantage clé 3</li>
                </ul>
            </section>

            <section className='temoignages'>
                <h2>Ce que disent nos utilisateurs</h2>
                <div className='temoignage'>
                    <p>[DCLIC m'a aidé à développer des compétences en Dev Web. Je vous le recommande vivement]</p>
                    <cite>Jean</cite>
                </div>
            </section>

            <section className='appel-final'>
                <h2>Prêt à découvrir DCLIC ?</h2>
                <p>N'attendez plus et rejoingnez notre communauté</p>
                <button className='cta-primary'>S'inscrire</button>
            </section>
        </main>
    </div>
    </>
  )
}

export default Accueil