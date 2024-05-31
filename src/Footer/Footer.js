import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact</h3>
          <table class="styled-table">
            <thead>
            <tr>
                <th>Membre</th>
                <th>Rôle</th>
                <th>Contact</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>BENAMAR Yassine</td>
                <td>Développement Web</td>
                <td>e-ybenamar@etu.cyu.fr</td>
            </tr>
            <tr className='active-row'>
                <td>ANTOGNELLI Pauline</td>
                <td>Data Analyste</td>
                <td>e-pantognelli@etu.cyu.fr</td>
            </tr>
            <tr>
                <td>LE POUL Axelle</td>
                <td>Recherches</td>
                <td>e-alepoul@cyu.etu.fr</td>
            </tr>
            <tr className='active-row'>
                <td>BIETTE Antonin</td>
                <td>Responsable interviews</td>
                <td>e-abiette@cyu.etu.fr</td>
            </tr>
            <tr>
                <td>BECK Naïma</td>
                <td>Recherches</td>
                <td>e-abiette@cyu.etu.fr</td>
            </tr>
            </tbody>
        </table>
          <p>Projet Interdisciplinaire 2e année Double Diplôme Data Humanités Digitales <br /> IEP de Saint-Germain-En-Laye - CY-Tech Université de Cergy</p>
        </div>
        <div className="rgpd">
          <h3>Mentions RGPD</h3>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), nous nous engageons à protéger vos données personnelles collectées durant l'enquête et les interviews. Pour plus d'informations ou toutes reclamations, veuillez nous contacter aux adresses ci-dessus.<br />
            Ce site web ne fait usage d'aucun cookie ni ne garde aucune donnée relative à votre visite.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
