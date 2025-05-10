import React, { useState } from "react";

interface FlipCardProps {
  frontContent: React.ReactNode; // SVG for silhouette
  backContent: {
    // Placeholder for actual cat info
    name: string;
    image?: string; // URL to actual cat image
    description: string;
  };
  backgroundColor: string; // For the front card color
}

const FlipCard: React.FC<FlipCardProps> = ({
  frontContent,
  backContent,
  backgroundColor,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="flip-card-inner">
        <div
          className="flip-card-front"
          style={{ backgroundColor: backgroundColor }}
        >
          {frontContent}
        </div>
        <div
          className="flip-card-back"
          style={{ backgroundColor: backgroundColor }}
        >
          <img
            className="card-character-image"
            src={backContent.image}
            alt={backContent.name}
          />
          <div className="text-content-area">
            <h3>{backContent.name}</h3>
            <p
            dangerouslySetInnerHTML={{ __html: backContent.description }}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
