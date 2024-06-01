import React from 'react';
import './Explanations.css';

const ExplanationsSection = ({explanations}) => {

  return (
    <section className="explanations-section">
      {explanations.map((explanation, index) => (
        <div key={index} className="explanation">
          <img src={process.env.PUBLIC_URL + explanation.image} alt={explanation.title} className="explanation-image" />
          <div className="explanation-text">
            <h2 className="explanation-title">{explanation.title}</h2>
            <p>{explanation.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExplanationsSection;