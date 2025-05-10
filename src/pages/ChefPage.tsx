import React, { useState } from 'react';
import '../styles/ChefPage.css';
import TextMarquee from '../components/TextMarquee';


export interface Recipe {
  id: string;
  name: string;
  difficultyText: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  videoUrl?: string;
}

export interface ChefPageData {
  chefName: string;
  chefTitlePrefix: string;
  chefDescription: string;
  chefImage: string;
  mainColor: string;
  textColorOnMain: string;
  secondaryColor: string;
  textColorOnSecondary: string;
  pageBackgroundColor: string;
  recipes: Recipe[];
}

const ChefPage: React.FC<ChefPageData> = ({
  chefName,
  chefTitlePrefix,
  chefDescription,
  chefImage,
  mainColor,
  textColorOnMain,
  secondaryColor,
  textColorOnSecondary,
  pageBackgroundColor,
  recipes
}) => {
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);

  if (!recipes || recipes.length === 0) {
    return <div>Não há receitas disponíveis para este chef.</div>;
  }

  const currentRecipe = recipes[currentRecipeIndex];

  const handleNextRecipe = () => {
    setCurrentRecipeIndex((prevIndex) => (prevIndex + 1) % recipes.length);
  };

  const handlePrevRecipe = () => {
    setCurrentRecipeIndex((prevIndex) => (prevIndex - 1 + recipes.length) % recipes.length);
  };

  const handleSelectRecipe = (index: number) => {
    setCurrentRecipeIndex(index);
  };

  const cssVariables = {
    '--chef-main-color': mainColor,
    '--chef-text-on-main': textColorOnMain,
    '--chef-secondary-color': secondaryColor,
    '--chef-text-on-secondary': textColorOnSecondary,
    '--chef-page-bg-color': pageBackgroundColor,
    '--chef-text-color': '#333333', // Standard text color
    '--chef-star-color': '#FFD700', // Yellow for difficulty star
  } as React.CSSProperties;

  return (
    <div className="chef-page-container" style={cssVariables}>
      <section className="chef-intro-section">
        <div className="chef-intro-content">
          <div className="chef-intro-text">
            <h1 className="chef-intro-title">
              {chefTitlePrefix}{' '}
              <span className="chef-intro-name">{chefName.toUpperCase()}</span>
            </h1>
          </div>
          
          {/* Image container positioned in the middle and will overlap the banner */}
          <div className="chef-intro-image-container">
            <img src={chefImage} alt={chefName} className="chef-intro-image" />
          </div>
          
          <div className="chef-intro-description">
            <p>{chefDescription}</p>
          </div>
        </div>
      </section>

      <section className="chef-name-banner">
        <TextMarquee
          textItems={Array(15).fill(chefName.toUpperCase())}
          speed={25}
        />
      </section>

      <section className="recipe-display-section">
        <div className="recipe-content-area">
          <div className="recipe-details-left">
            <h2 className="recipe-name">{currentRecipe.name.toUpperCase()}</h2>
            <p className="recipe-difficulty">
              {currentRecipe.difficultyText}{' '}
              <span className="star">★</span>
            </p>
            <img src={currentRecipe.image} alt={currentRecipe.name} className="recipe-main-image" />
            <div className="recipe-ingredients-box">
              <h3>INGREDIENTES</h3>
              <ul>
                {currentRecipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
              </ul>
            </div>
          </div>
          <div className="recipe-details-right">
            <h3>MODO DE FAZER</h3>
            <ol>
              {currentRecipe.instructions.map((step, idx) => <li key={idx}><span>{idx + 1}.</span> {step}</li>)}
            </ol>
            {currentRecipe.videoUrl && (
              <div className="recipe-video-container">
                <iframe
                  src={currentRecipe.videoUrl.includes('embed') ? currentRecipe.videoUrl : currentRecipe.videoUrl.replace("watch?v=", "embed/")}
                  title={`${currentRecipe.name} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </section>

      <nav className="recipe-navigation-bar">
        <button onClick={handlePrevRecipe} className="nav-arrow prev-arrow" aria-label="Receita anterior">
          ←
        </button>
        <div className="nav-dots">
          {recipes.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentRecipeIndex ? 'active' : ''}`}
              onClick={() => handleSelectRecipe(index)}
              aria-label={`Ir para receita ${index + 1}`}
            ></button>
          ))}
        </div>
        <button onClick={handleNextRecipe} className="nav-arrow next-arrow" aria-label="Próxima receita">
          →
        </button>
      </nav>
    </div>
  );
};

export default ChefPage;