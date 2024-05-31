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
        <img src="https://media.discordapp.net/attachments/1245373185738932245/1246078074420858993/DALLE_2024-05-30_11.23.57_-_A_sober_and_simple_monochrome_illustration_depicting_psychological_issues_due_to_social_media._The_image_features_a_person_surrounded_by_large_overwh.webp?ex=665b1423&is=6659c2a3&hm=c7a5d03aa6e07b24c98d40d03679aede151f27be14ed4c125bb8b8cbf3f95710&=&format=webp&width=468&height=468" />
      </div>
    </header>
  );
};

export default Header;
