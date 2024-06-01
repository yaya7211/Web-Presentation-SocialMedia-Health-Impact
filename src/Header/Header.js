import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Quels impacts de l'hyperconnection aux réseaux sociaux ?</h1>
        <p className="header-subtitle"><h4>Enquêtes, Recherches, Témoignages</h4>Tout ce que vous voulez savoir sur le sujet à porté de scroll</p>
      </div>
      <div className='header-image'>
        <img src={process.env.PUBLIC_URL + "/Img/DALLE_2024-05-30_11.23.57_-_A_sober_and_simple_monochrome_illustration_depicting_psychological_issues_due_to_social_media._The_image_features_a_person_surrounded_by_large_overwh.webp"} />
      </div>
    </header>
  );
};

export default Header;
