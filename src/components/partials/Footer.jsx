import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    //<div>Footer</div>
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Accueil</a></li>
            <li><a href="#" className="hover:underline">À propos</a></li>
            <li><a href="#" className="hover:underline">Form</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer