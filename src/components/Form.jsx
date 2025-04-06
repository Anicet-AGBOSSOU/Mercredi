import React, { useEffect, useState } from 'react';

function Form() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("form");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",  
    address: "",
    address2: "",
    city: "",
    rememberMe: false
  });

  // Gestion des changements dans les champs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Validation et soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Veuillez remplir tous les champs obligatoires !");
      setMessage("");
      return;
    }

    setMessage("Formulaire envoyé avec succès !");
    setError(""); 
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">CAEB</a>
        <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm">
          <li className="nav-item">
            <button className={`nav-link rounded-5 ${activeTab === "home" ? "active" : ""}`} onClick={() => setActiveTab("home")}>Accueil</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link rounded-5 ${activeTab === "profile" ? "active" : ""}`} onClick={() => setActiveTab("profile")}>Profil</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link rounded-5 ${activeTab === "form" ? "active" : ""}`} onClick={() => setActiveTab("form")}>Form</button>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-auto bg-light sticky-top">
            <div className="d-flex flex-column align-items-center">
              <a href="/" className="d-block p-3 link-dark text-decoration-none" aria-label="Bootstrap icon">
                <i className="bi-bootstrap fs-1"></i>
              </a>
              <ul className="nav flex-column text-center">
                <li><a href="#" className="nav-link py-3 px-2"><i className="bi-house fs-1" aria-label="Accueil"></i>Accueil</a></li>
                <li><a href="#" className="nav-link py-3 px-2"><i className="bi-speedometer2 fs-1" aria-label="Dashboard"></i>Profile</a></li>
                <li><a href="#" className="nav-link py-3 px-2"><i className="bi-table fs-1" aria-label="Commandes"></i>Form</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm p-3 min-vh-100">
            {activeTab === "form" && (
              <form onSubmit={handleSubmit} className="p-4">
                {error && <div className="alert alert-danger">{error}</div>}
                {message && <div className="alert alert-success">{message}</div>}

                <div className="row mb-3">
                  <div className="col">
                  <label htmlFor="inputPrenom">Prenom</label>
                    <input type="text" name="firstName" className="form-control" placeholder="First name" value={formData.firstName} onChange={handleChange} />
                  </div>
                  <div className="col">
                  <label htmlFor="inputName">Nom</label>
                    <input type="text" name="lastName" className="form-control" placeholder="Last name" value={formData.lastName} onChange={handleChange} />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="email" name="email" className="form-control" id="inputEmail" placeholder="Email" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPassword">Mot de passe</label>
                    <input type="password" name="password" className="form-control" id="inputPassword" placeholder="Password" value={formData.password} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="inputAddress">Adresse</label>
                  <input type="text" name="address" className="form-control" id="inputAddress" placeholder="Banikanni 2" value={formData.address} onChange={handleChange} />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="inputAddress2">Complément d’adresse</label>
                  <input type="text" name="address2" className="form-control" id="inputAddress2" placeholder="Appartement, studio, étage..." value={formData.address2} onChange={handleChange} />
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="inputCity">Ville</label>
                    <input type="text" name="city" className="form-control" id="inputCity" value={formData.city} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="gridCheck" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Se rappeler de moi
                  </label>
                </div>

                <button type="submit" className="btn btn-primary">Envoyer</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
