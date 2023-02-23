import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FilmsContext from '../context/FilmsContext';
import DescriptionContext from '../context/DescriptionContext';
import FavoritesContext from '../context/FavoritesContext';
import images3 from '../image/images3.png';
import Vector from '../image/Vector.png';
import VetorCinza from '../image/VetorCinza.png';
import VetorRed from '../image/VetorRed.png';

function Home() {
  const { isLoading, gitData } = useContext(FilmsContext);
  const { favorit, setStateFavorit } = useContext(FavoritesContext);
  const { description, setDescription } = useContext(DescriptionContext);

  const btnHome = ({ target }) => {
    const uniqueFavorites = Array
      .from(new Set([...favorit, target.value]));
    setStateFavorit(uniqueFavorites);
  };

  const btnDescription = ({ target }) => {
    const uniqueFavorites =([target.value]);
    setDescription(uniqueFavorites);
  };

  return (
    <div>
      <header className="header">
        <div className="imagemGibli">
          <img
            id="imgaemGibli"
            src={ images3 }
            alt="gibliImagen"
          />
        </div>
        <div className="favorit">
          <Link to="/Favorites">
            <img
              id="heartImagenBlack"
              src={ Vector }
              alt="heartImagen"
            />
          </Link>
          <h2 id="favorit">Favorites</h2>
        </div>
      </header>
      <div className="title">
        <h1 className="filme">Films</h1>
        <div className="anime">
          { isLoading && <h2>Carregando...</h2> }
          {
            gitData.map((element, index) => (
              <div key={ element.id } className="button">
                <input
                  type="image"
                  value={ `img-${index}` }
                  onClick={ btnDescription }
                  id={"imageAnime"}
                  src={ element.image }
                  alt={ element.original_title_romanised }
                />
                 { description.some((ele) => ((ele === `img-${index}`))) 
                   && 
                   <div className="descrition">
                   <br/>
                   <br/>
                    <h1 id="title-description">{element.title}</h1>
                    <br/>
                    <h2 id="id-description">{element.description}</h2> 
                   </div>
                 }
                <input
                  type="image"
                  value={ index }
                  onClick={ btnHome }
                  id={"heartImagen"}
                  src={ favorit.some((ele) => ((+ele === +index))) ? VetorRed
                    : VetorCinza }
                  alt="heartImagen"
                />
              </div>))
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
