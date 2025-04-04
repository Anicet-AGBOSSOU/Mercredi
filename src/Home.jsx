import React,{ useEffect, useState } from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom;
import './App.css';
//import Profil from './components/partials/Profil';


function Home() {
  return (
<> 


  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-auto bg-light sticky-top">
        <div className="d-flex flex-column align-items-center">
          <a href="/" className="d-block p-3 link-dark text-decoration-none" aria-label="Bootstrap icon">
            <i className="bi-bootstrap fs-1"></i>
          </a>
          <ul className="nav flex-column text-center">
            <li><a href="#" className="nav-link py-3 px-2"><i className="bi-house fs-1" aria-label="Accueil"></i>Accueil</a></li>
            <li><a href="#" className="nav-link py-3 px-2"><i className="bi-speedometer2 fs-1" aria-label="Dashboard"></i>Profil</a></li>
            <li><a href="#" className="nav-link py-3 px-2"><i className="bi-table fs-1" aria-label="Commandes"></i>Form</a></li>
          </ul>
        </div>
      </div>
    </div>  
  </div>

  <div className="container py-5 accueil-container">
  <h1 className="text-center">Bienvenu sur notre site !!!</h1>
  <p className="subtitle text-center">Votre destination pour un bon suivi sur les métiers du digital</p>

  <main className="accueil-main">
    <section className="featured-content mb-5">
      <h2 className="text-center">Découvrez nos fonctionnalités principales</h2>
      <ul className="list-group">
        <li className="list-group-item"><strong>Fonctionnalité 1 :</strong> Explorer les métiers du digital</li>
        <li className="list-group-item"><strong>Fonctionnalité 2 :</strong> Formez vous à un métier au choix</li>
        <li className="list-group-item"><strong>Fonctionnalité 3 :</strong> Faire des tests pour la certification</li>
      </ul>
    </section>

    <section className="call-to-action text-center mb-5">
      <p><strong>Prêt à commencer ???</strong></p>
      <button className="btn btn-primary mx-2"><strong>Se connecter</strong></button>
      <button className="btn btn-success mx-2"><strong>S'inscrire</strong></button>
      <button className="btn btn-info mx-2"><strong>En savoir plus</strong></button>
    </section>

    <section className="pourquoi-nous-choisir mb-5">
      <h2 className="text-center">Pourquoi choisir DCLIC</h2>
      <ul className="list-group">
        <li className="list-group-item">Avantage clé 1</li>
        <li className="list-group-item">Avantage clé 2</li>
        <li className="list-group-item">Avantage clé 3</li>
      </ul>
    </section>

    <section className="temoignages mb-5">
      <h2 className="text-center">Ce que disent nos utilisateurs</h2>
      <div className="temoignage text-center">
        <p>[DCLIC m'a aidé à développer des compétences en Dev Web. Je vous le recommande vivement]</p>
        <cite>Jean</cite>
      </div>
    </section>

    <section className="appel-final text-center mb-5">
      <h2>Prêt à découvrir DCLIC ?</h2>
      <p>N'attendez plus et rejoingnez notre communauté</p>
      <button className="cta-primary btn btn-warning">S'inscrire</button>
    </section>
  </main>
</div>

</>
  )
}

export default Home;