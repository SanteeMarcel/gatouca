import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import ChefSection from './components/ChefSection';
import Footer from './components/Footer';

import mikoImage from './assets/countries/japan/cats/profile.png'
import carlosImage from './assets/countries/italy/cats/profile.png'
import ivanImage from './assets/countries/russia/cats/profile.png'
import cleoImage from './assets/countries/egypt/cats/profile.png'


import dangoImage from './assets/countries/japan/foods/dango.png'
import gyudonImage from './assets/countries/japan/foods/gyudon.png'
import missoshiroImage from './assets/countries/japan/foods/missoshiro.png'

import tiramisuImage from './assets/countries/italy/foods/tiramisu.png'
import bruschettaImage from './assets/countries/italy/foods/bruschetta.png'
import margheritaImage from './assets/countries/italy/foods/margherita.png'

import bliniImage from './assets/countries/russia/foods/blini.png'
import pelmeniImage from './assets/countries/russia/foods/pelmeni.png'
import syrnikiImage from './assets/countries/russia/foods/syrniki.png'


import mahallabiaImage from './assets/countries/egypt/foods/mahallabia.png'
import rummanImage from './assets/countries/egypt/foods/rumman.png'
import ful_medamesImage from './assets/countries/egypt/foods/ful_medames.png'

import ChefPage, { type ChefPageData } from './pages/ChefPage';

const mikoChefData: ChefPageData = {
  chefName: "Miko",
  chefTitlePrefix: "A Chef",
  chefDescription: "Nascida em Kyoto, Miko cresceu observando os mestres de kaiseki (refeição tradicional multicursos) e desenvolveu um paladar refinado. Seu lema é \"Um prato bonito é metade da refeição!\". Ela domina desde clássicos como sushi e tempurá até wagashi (doces tradicionais), mas sempre com um twist adorável—como onigiris em formato de carinha de gato ou bentôs temáticos.",
  chefImage: mikoImage,
  mainColor: "#FF9500",
  textColorOnMain: "#FFFFFF",
  secondaryColor: "#D75A5A",
  textColorOnSecondary: "#FFFFFF",
  pageBackgroundColor: "#F0F0F0",
  recipes: [
    {
      id: "dango",
      name: "Dango",
      difficultyText: "NÍVEL DE DIFICULDADE:",
      image: dangoImage,
      ingredients: [
        "100 gramas de farinha de arroz glutinoso;",
        "100 gramas de tofu mole kinu;",
        "2 colheres de sopa de açúcar;",
        "2 colheres de sopa de shoyu;",
        "2 colheres de sopa de mirin;",
      ],
      instructions: [
        "Misture a farinha de arroz glutinoso com o tofu tipo kinu até formar uma massa lisa. Adicione um pouco de água, se necessário.",
        "Divida a massa em 27 porções iguais e modele bolinhas.",
        "Cozinhe as bolinhas em água fervente até subirem, conte 1 a 2 minutos e retire.",
        "Transfira para água com gelo e depois seque com papel toalha.",
        "Monte espetinhos com 3 ou 4 bolinhas cada.",
      ],
      videoUrl: "https://www.youtube.com/embed/90ddvTA6t3w",
    },
    {
      id: "gyudon",
      name: "Gyudon",
      difficultyText: "NÍVEL DE DIFICULDADE:",
      image: gyudonImage,
      ingredients: [
        "250 g de carne bovina fatiada bem fina",
        "1 cebola média cortada em fatias finas",
        "2 colheres (sopa) de shoyu",
        "1 colher (sopa) de açúcar",
        "100 ml de água",
        "2 porções de arroz japonês cozido (gohan)",
      ],
      instructions: [
        "Em uma panela, adicione o shoyu, açúcar e água. Misture e leve ao fogo médio.",
        "Acrescente a cebola e cozinhe até ela ficar macia.",
        "Adicione a carne fatiada e cozinhe por cerca de 5 a 8 minutos, até ficar bem cozida e macia.",
        "Sirva sobre uma tigela com arroz gohan bem quentinho."
      ],
      videoUrl: "https://www.youtube.com/embed/JWfPSslMvjg",
    },
    {
      id: "missoshiro",
      name: "Missoshiro",
      difficultyText: "NÍVEL DE DIFICULDADE:",
      image: missoshiroImage,
      ingredients: [
        "2 xícaras de água",
        "1 colher (sopa) de missô (pasta de soja)",
        "1 colher (chá) de alga wakame seca (opcional)",
        "2 colheres (sopa) de tofu em cubos pequenos",
        "1 colher (sopa) de cebolinha picada (opcional)",
      ],
      instructions: [
        "Em uma panela, aqueça a água até quase ferver.",
        "Enquanto isso, hidrate a alga wakame (se usar) em um copo com um pouco de água por 5 minutos.",
        "Em uma tigela à parte, dissolva o missô em um pouco da água quente da panela. Misture bem até formar um caldo.",
        "Adicione essa mistura de volta à panela e mexa.",
        "Acrescente o tofu em cubinhos e a alga hidratada. Aqueça mais um pouco, sem deixar ferver.",
        "Finalize com cebolinha picada por cima e sirva quentinho.",
      ],
      videoUrl: "https://www.youtube.com/embed/ajgXKUJoF_w",
    },
  ],
};


const carlosChefData: ChefPageData = {
  chefName: "Carlos",
  chefTitlePrefix: "O Chef",
  chefDescription: "Napoletano de bigode nobre e olhos cheios de dolce vita, Carlo é um mestre em transformar ingredientes simples em obras-primas da nonna! Especialista em carboidratos com alma - seus spaghetti saem al dente como seus bigodes, suas pizzas têm crocância perfeita e até o tiramisù ganha camadas extra de amore felino!",
  chefImage: carlosImage,
  mainColor: "#5856D6",
  textColorOnMain: "#FFFFFF",
  secondaryColor: "#D75A5A",
  textColorOnSecondary: "#FFFFFF",
  pageBackgroundColor: "#F0F0F0",
  recipes: [
    {
      id: "tiramisu",
      name: "Tiramisù",
      difficultyText: "NÍVEL DE DIFICULDADE:",
      image: tiramisuImage,
      ingredients: [
        "200 g de biscoito tipo champagne (savoiardi)",
        "3 gemas",
        "3 colheres (sopa) de açúcar",
        "250 g de queijo mascarpone",
        "200 ml de café forte frio",
        "1 colher (chá) de essência de baunilha (opcional)",
        "Cacau em pó para polvilhar",
        "Raspas de chocolate meio amargo (opcional)",
      ],
      instructions: [
        "Bata as gemas com o açúcar até formar um creme claro e fofo.",
        "Adicione o mascarpone e misture delicadamente até incorporar. Acrescente a baunilha, se desejar.",
        "Mergulhe rapidamente os biscoitos no café (sem encharcar).",
        "Em uma travessa ou taças individuais, monte camadas alternadas de biscoitos umedecidos e creme de mascarpone.",
        "Finalize com uma camada de creme. Leve à geladeira por pelo menos 4 horas.",
        "Antes de servir, polvilhe com cacau em pó e, se quiser, raspas de chocolate.",
      ],
      videoUrl: "https://www.youtube.com/embed/gZfLLLb4K5c",
    },
    {
      id: "bruschetta",
      name: "Bruschetta",
      difficultyText: "NÍVEL DE DIFICULDADE:",
      image: bruschettaImage,
      ingredients: [
        "4 fatias de pão italiano ou baguete",
        "2 tomates maduros",
        "1 dente de alho",
        "Folhas de manjericão fresco",
        "Azeite de oliva extravirgem",
        "Sal e pimenta a gosto",
      ],
      instructions: [
        "Corte os tomates em cubinhos e misture com folhas de manjericão rasgadas, azeite, sal e pimenta. Reserve.",
        "Torre as fatias de pão (na frigideira, torradeira ou forno).",
        "Esfregue o dente de alho nas fatias ainda quentes.",
        "Coloque a mistura de tomate por cima do pão. Finalize com mais azeite.",
        "Sirva em uma tigela de sua preferência.",
      ],
      videoUrl: "https://www.youtube.com/embed/Wv0eEcvNspA",
    },
    {
      id: "margherita",
      name: "Margherita",
      difficultyText: "NÍVEL DE DIFICULDADE:",
      image: margheritaImage,
      ingredients: [
        "250 g de massa para pizza pronta ou caseira",
        "3 colheres (sopa) de molho de tomate",
        "150 g de muçarela fresca fatiada",
        "Folhas de manjericão fresco",
        "1 colher (sopa) de azeite de oliva",
        "Sal a gosto",
      ],
      instructions: [
        "Pré-aqueça o forno a 250 °C.",
        "Abra a massa numa forma. Espalhe o molho de tomate.",
        "Distribua a muçarela, o manjericão e regue com azeite.",
        "Asse por 10 a 15 min, até a borda dourar e o queijo derreter.",
      ],
      videoUrl: "https://www.youtube.com/embed/tVS0d-wZoPY",
    },
  ],
};


const ivanChefData: ChefPageData = {
  chefName: "Ivan",
  chefTitlePrefix: "O Chef",
  chefDescription: "Siberiano de bigodes curvados e olhos penetrantes, Ivan é um mestre em transformar o rigoroso inverno russo em pratos que aquecem a alma (e o estômago). Especialista em comfort food eslava com um toque wild - seus pelmeni são tão redondinhos quanto seus olhos, seu borscht tem um tempero secreto (vodka? só ele sabe!) e até os blinis ganham formato de orelhas felinas!",
  chefImage: ivanImage,
  mainColor: "#30B0C7",
  textColorOnMain: "#FFFFFF",
  secondaryColor: "#D75A5A",
  textColorOnSecondary: "#FFFFFF",
  pageBackgroundColor: "#F0F0F0",
  recipes: [
    {
      id: "blini",
      name: "Blini",
      difficultyText: "NÍVEL DE DIFICULDADE:",
      image: bliniImage,
      ingredients: [
        "1 xícara de leite morno",
        "1 ovo",
        "3/4 de xícara de farinha de trigo",
        "1 colher (sopa) de açúcar",
        "1 colher (sopa) de óleo vegetal (mais para untar)",
        "1 pitada de sal",
      ],
      instructions: [
        "Em uma tigela, bata o ovo com o leite morno, o açúcar, o sal e o óleo.",
        "Adicione a farinha aos poucos, misturando até obter uma massa líquida e lisa.",
        "Aqueça uma frigideira antiaderente e unte levemente com óleo.",
        "Despeje uma pequena porção da massa (como uma concha rasa) e gire a frigideira para espalhar bem.",
        "Cozinhe por cerca de 1 minuto ou até dourar levemente. Vire e doure o outro lado.",
        "Repita até acabar a massa.",
      ],
      videoUrl: "https://www.youtube.com/embed/1g2z1-jbwkk",
    },
    {
      id: "pelmeni",
      name: "Pelmeni",
      difficultyText: "NÍVEL DE DIFICULDADE:",
      image: pelmeniImage,
      ingredients: [
        "2 xícaras de farinha de trigo",
        "1/2 xícara de água",
        "1 ovo",
        "1/2 colher (chá) de sal",
        "250 g de carne moída (bovina, suína ou mista)",
        "1/2 cebola ralada ou bem picada",
        "1 dente de alho picado (opcional)",
        "Sal e pimenta a gosto",
      ],
      instructions: [
        "Prepare a massa: em uma tigela, misture a farinha, o sal, o ovo e a água. Sove até formar uma massa lisa e homogênea. Deixe descansar por 30 minutos coberta.",
        "Prepare o recheio: misture a carne moída com a cebola, alho (se usar), sal e pimenta. Reserve.",
        "Abra a massa fina com um rolo e corte círculos de 6 a 8 cm de diâmetro.",
        "Coloque uma pequena porção do recheio no centro de cada círculo. Dobre ao meio, pressionando bem as bordas, e depois una as pontas formando uma meia-lua fechada.",
        "Cozinhe os pelmeni em água salgada fervente por cerca de 5–7 minutos, ou até subirem à superfície e estarem cozidos.",
      ],
      videoUrl: "https://www.youtube.com/embed/4JTWKj0kzG4",
    },
    {
      id: "syrniki",
      name: "Syrniki",
      difficultyText: "NÍVEL DE DIFICULDADE:",
      image: syrnikiImage,
      ingredients: [
        "1 xícara de queijo cottage ou ricota bem seca",
        "1 ovo",
        "2 colheres (sopa) de açúcar",
        "4 colheres (sopa) de farinha de trigo",
        "1 pitada de sal",
        "Óleo para fritar",
      ],
      instructions: [
        "Em uma tigela, misture o queijo, o ovo, o açúcar, o sal e 2 colheres de farinha até formar uma massa modelável.",
        "Divida em porções e molde bolinhos achatados. Passe-os na farinha restante para empanar levemente.",
        "Aqueça uma frigideira com um pouco de óleo e frite os syrniki até dourarem dos dois lados.",
        "Sirva ainda quentes.",
      ],
      videoUrl: "https://www.youtube.com/embed/LMH5S_ee8aU",
    },
  ],
};


const cleoChefData: ChefPageData = {
  chefName: "Cleo",
  chefTitlePrefix: "A Chef",
  chefDescription: "Egípcia de olhos delineados e postura real, Cléo domina os sabores ancestrais do Vale do Nilo com um toque regal! Herdeira dos segredos culinários dos faraós, ela transforma especiarias em poções mágicas - seu falafel tem formato de esfinge, seu koshari é servido em ânforas miniatura e até o baklava ganha camadas douradas como seu colar de gata deusa!",
  chefImage: cleoImage,
  mainColor: "#AF52DE",
  textColorOnMain: "#FFFFFF",
  secondaryColor: "#D75A5A",
  textColorOnSecondary: "#FFFFFF",
  pageBackgroundColor: "#F0F0F0",
  recipes: [
    {
      id: "mahallabia",
      name: "Mahallabia",
      difficultyText: "NÍVEL DE DIFICULDADE:",
      image: mahallabiaImage,
      ingredients: [
        "2 xícaras de leite integral",
"2 colheres (sopa) de açúcar",
"2 colheres (sopa) de amido de milho",
"1 colher (chá) de essência de água de rosas ou água de flor de laranja (opcional)",
      ],
      instructions: [

        "Em uma panela, misture o leite e o açúcar.",
        "Dissolva o amido de milho em um pouco de leite frio e adicione à panela.",
        "Retire do fogo e adicione a essência de água de rosas ou flor de laranja, se desejar.",
        "Retire do fogo e adicione a essência de água de rosas ou flor de laranja, se desejar.",
        "Despeje em taças ou em uma travessa e deixe esfriar.",
        "Sirva gelado, podendo decorar com um pouco de canela ou pistache picado, se quiser.",
      ],
      videoUrl: "https://www.youtube.com/embed/dPfisnQeiSM",
    },
    {
      id: "rumman",
      name: "Rumman",
      difficultyText: "NÍVEL DE DIFICULDADE:",
      image: rummanImage,
      ingredients: [
        "2 romãs maduras",
"1 colher (sopa) de açúcar", 
"(opcional, dependendo da doçura da romã)",
"Água gelada (se necessário para ajustar a consistência)",
      ],
      instructions: [
        "Prepare a romã: Corte as romãs ao meio e retire as sementes. Você pode fazer isso com as mãos ou utilizando uma colher de madeira para bater levemente na parte de trás da casca.",
        "Extraia o suco: Coloque as sementes de romã em um liquidificador e bata até que elas se transformem em um suco. Se o liquidificador não conseguir extrair o suco facilmente, adicione um pouco de água gelada para ajudar.",
        "Coar (opcional): Se preferir um suco sem polpa, coe o suco em uma peneira fina.",
        "Adoçar (opcional): Adicione açúcar a gosto e misture bem até dissolver.",
        "Sirva em copos com gelo, se desejar.",
      ],
      videoUrl: "https://www.youtube.com/embed/ob68Q_Mp8MY",
    },
    {
      id: "fulmedames",
      name: "Ful Medames",
      difficultyText: "NÍVEL DE DIFICULDADE:",
      image: ful_medamesImage,
      ingredients: [
        "1 lata de favas cozidas (ou 1 xícara de favas secas, cozidas)",
"2 colheres (sopa) de azeite de oliva",
"1 dente de alho picado",
"1 colher (chá) de cominho em pó",
"Suco de limão (a gosto)",
"Sal e pimenta a gosto",
"Ovos cozidos (opcional, para decorar)",
      ],
      instructions: [
        "Se estiver usando favas secas, cozinhe-as em água por cerca de 1 hora até ficarem macias. Se estiver usando favas enlatadas, basta drená-las e enxaguá-las.",
        "Em uma panela, aqueça o azeite de oliva e refogue o alho até que esteja dourado.",
        "Adicione as favas na panela com o alho e cozinhe por alguns minutos, mexendo bem. Se necessário, adicione um pouco de água para ajudar a amolecer as favas.",
        "Tempere com o cominho, sal, pimenta e o suco de limão. Misture bem.",
        "Sirva com ovos cozidos por cima (opcional), ou simplesmente como está, acompanhando pão pita.",
      ],
      videoUrl: "https://www.youtube.com/embed/J32Sh5LfrwA",
    },
  ],
};

const HomePage = () => (
  <>
    <About />
    <ChefSection />
  </>
);

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <HomePage />
            <Footer />
          </>
        } />
        <Route path="/chef-miko" element={
          <>
            <Header backgroundColor={mikoChefData.mainColor} />
            <ChefPage {...mikoChefData} />
          </>
        } />
        <Route path="/chef-carlos" element={
          <>
            <Header backgroundColor={carlosChefData.mainColor} />
            <ChefPage {...carlosChefData} />
          </>
        } />
        <Route path="/chef-ivan" element={
          <>
            <Header backgroundColor={ivanChefData.mainColor} />
            <ChefPage {...ivanChefData} />
          </>
        } />
         <Route path="/chef-cleo" element={
          <>
            <Header backgroundColor={cleoChefData.mainColor} />
            <ChefPage {...cleoChefData} />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
