import React from 'react';
import purpleCat from '../assets/about/purple-cat.svg';

const About: React.FC = () => {
  return (
    <>
      <section className="about-section main-content">
        <div className="about-content">
          <div className="about-title-container">
            <span className="about-title-sobre">Sobre o</span>
            <span className="about-title-gatouca">
              GATOUCA
              <span className="star">★</span>
            </span>
          </div>
          <p className="about-text">
            Somos um site de receitas especialmente escolhidas com amor e muito ronron!
            Aqui você aprende como cozinhar pode ser divertido e fofo com nossos gatos
            chefs de diferentes países!
          </p>
        </div>
        <div className="purple-cat-wrapper">
          <img src={purpleCat} alt="Purple Cat" className="purple-cat" />
        </div>
      </section>
      <div className="peeking-cat-container" />
    </>
  );
};

export default About;
