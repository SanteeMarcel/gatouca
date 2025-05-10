// src/components/TextMarquee.tsx
import React from 'react';
import '../styles/TextMarquee.css';

interface TextMarqueeProps {
  textItems: string[];
  speed?: number; // Animation duration in seconds for one full scroll of the original content
  className?: string; // Optional class for the main wrapper div
  textElementClassName?: string; // Optional class for each <p> text element
}

const TextMarquee: React.FC<TextMarqueeProps> = ({
  textItems,
  speed = 20, // Default speed: 20 seconds for one cycle
  className = '',
  textElementClassName = '',
}) => {
  if (!textItems || textItems.length === 0) {
    return null;
  }

  return (
    <div className={`marquee-wrapper ${className}`}>
      <div className="marquee-content-track" style={{ animationDuration: `${speed}s` }}>
        {/* Original items */}
        {textItems.map((text, index) => (
          <p key={`original-${index}`} className={textElementClassName}>
            {text}
          </p>
        ))}
        {/* Duplicated items for seamless scroll */}
        {textItems.map((text, index) => (
          <p key={`duplicate-${index}`} className={textElementClassName} aria-hidden="true">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TextMarquee;
