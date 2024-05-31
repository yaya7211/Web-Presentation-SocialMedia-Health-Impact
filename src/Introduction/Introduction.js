import React from 'react';
import './Introduction.css';

const Introduction = ({introductions}) => {

  return (
    <section className="introductions-section">
      <h1 id="introduction-title">De quoi parlons-nous ?</h1>
      {introductions.map((introduction, index) => (
        <div key={index} className="introduction">
          <img src={introduction.image} alt={introduction.title} className="introduction-image" />
          <div className="introduction-text">
            <h2 className="introduction-title">{introduction.title}</h2>
            <p>
              {introduction.text}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Introduction;
