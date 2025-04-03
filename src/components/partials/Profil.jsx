import React from "react";
import "./Profil.css"
export default function Profil({ nom, description, avatar }) {
  return (
    <div className="profil-card">
      <img src={avatar} alt="Avatar" className="profil-avatar" />
      <h2>Nom de la société</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis dignissimos velit commodi consequatur neque iste eum fuga a esse vitae.</p>
    </div>
  );
}