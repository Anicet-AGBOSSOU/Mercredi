import React from 'react';
import './SiBar.css'

function SiBar() {
  return (
    <> 
    <div className='sibar'>
      <h2>Navigation</h2>
      <ul>
        <li> <a href="#Accueil"><strong>Accueil</strong></a> </li>
        <li> <a href="#Form"> <strong>Form</strong></a></li>
        <li> <a href="#Profil"> <strong>Profil</strong></a></li>
      </ul>

    </div>

    </>
  )
}

export default SiBar