import React from 'react'
import './Footer.css'
import img from '../img/logo2.png'
export default function footer() {
    return (
        <>
        
        <footer className='footer'>
            <hr />
            <div className='info'>
                <img src={img} alt="" />
                <br />
                <br />
                <p>Un site de billetterie nouvelle génération vous offrant la possibilité d’acheter en ligne des tickets pour les événements de votre choix. Sa vocation est de vous proposer l’offre de concerts, sports, spectacles, cinéma, festivals, théâtre, humour, voyages et evasions la plus large du Maroc en collaboration avec les organisateurs d’événements.
                </p> 
            </div>
            <div className='uls'>
                <ul>
                <h2>Guichet</h2>
                    <li>Concerts & Festivals</li>
                    <li>Salons et congrès</li>
                    <li>Voyage</li>
                    <li>Cinéma</li>
                    <li>Sport</li>
                </ul>
                <ul>
                <h2>À PROPOS</h2>
                    <li>Qui sommes nous ?</li>
                    <li>Contactez-nous</li>
                    <li>Guichet Magazine</li>
                    <li>Mentions légales</li>
                    
                </ul>
                
            </div>
        </footer>
            <div className='footercolor'>
                
            </div>
        </>
        
  )
}