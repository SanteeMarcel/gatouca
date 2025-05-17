import React from 'react';
import japanCat from '../assets/countries/japan/cats/japan-cat.png'
import italyCat from '../assets/countries/italy/cats/italy-cat.png'
import russiaCat from '../assets/countries/russia/cats/russia-cat.png'
import egyptCat from '../assets/countries/egypt/cats/egypt-cat.png'
import catSilhouetteJapan from '../assets/countries/japan/cats/japan-silhouette.png'
import catSilhouetteItaly from '../assets/countries/italy/cats/italy-silhouette.png'
import catSilhouetteRussia from '../assets/countries/russia/cats/russia-silhouette.png'
import catSilhouetteEgypt from '../assets/countries/egypt/cats/egypt-silhouette.png'

import FlipCard from './FlipCard';
import TextMarquee from './TextMarquee';

const chefsData = [
  {
    id: 1,
    frontSvg: catSilhouetteJapan,
    backName: "Chef Miko",
    backDescription: `Ela é a nossa chef japonesa. 
Apaixonada pela natureza mística da culinária asiática. Suas receitas abordam uma temática <em>kawaii</em> com um toque de picância.`,
    bgColor: "var(--card-orange)",
    backImage: japanCat,
  },
  {
    id: 2,
    frontSvg: catSilhouetteRussia,
    backName: "Chef Ivan",
    backDescription: `Ele é o nosso chef russo.
Entusiasta de uma culinária simples e com ingredientes frescos. Suas receitas preferidas são agridoces e temperadas ao molho secreto russo.`,
    bgColor: "var(--card-teal)",
    backImage: russiaCat,
  },
  {
    id: 3,
    frontSvg: catSilhouetteItaly,
    backName: "Chef Carlos",
    backDescription: `Ele é o nosso chef italiano. 
O amor pela culinária tradicional floresce  a cada criação. Suas receitas revelam um <em>sapore</em> inigualável e acabamento sofisticado.`,
    bgColor: "var(--card-blue)",
    backImage: italyCat,
  },
  {
    id: 4,
    frontSvg: catSilhouetteEgypt,
    backName: "Chef Cléo",
    backDescription: `Ela é a nossa chef egípicia. 
A herança e riqueza cultural do Egito fazem dela uma cozinheira misteriosa e única. Suas receitas são fáceis e deliciosas, como uma dádiva!`,
    bgColor: "var(--card-magenta)",
    backImage: egyptCat,
  },
];

const ChefSection: React.FC = () => {
  return (
    <section className="chef-section main-content">
      <TextMarquee
          textItems={Array(25).fill("NOSSOS CHEFS")}
          speed={225}
          textElementClassName='rotating-text'
          className='chef-divider'
        />
      
      <div className="chef-cards-container">
        {chefsData.map(chef => (
          <FlipCard
            key={chef.id}
            backgroundColor={chef.bgColor}
            frontContent={
              <div className="silhouette-container">
                <img 
                  src={chef.frontSvg} 
                  alt={`${chef.backName} silhouette`} 
                  className="chef-silhouette" 
                />
              </div>
            }
            backContent={{
              name: chef.backName,
              description: chef.backDescription,
              image: chef.backImage,
            }}
          />
        ))}
      </div>
        <TextMarquee
          textItems={Array(25).fill("NOSSOS CHEFS")}
          speed={225}
          textElementClassName='rotating-text'
          className='chef-divider'
        />
    </section>
  );
};

export default ChefSection;
