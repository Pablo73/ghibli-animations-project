import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DescriptionContext from '../context/DescriptionContext';
import FavoritesContext from '../context/FavoritesContext';
import FilmsContext from '../context/FilmsContext';
import Vector from '../image/Vector.png';
import images3 from '../image/images3.png';
import VetorRed from '../image/VetorRed.png';

export default function Favorites() {
  const { favorit, setStateFavorit } = useContext(FavoritesContext);
  const { gitData } = useContext(FilmsContext);
  const { description, setDescription } = useContext(DescriptionContext);

  const removeAnime = ({ target }) => {
    const removeFavorit = favorit.filter((element) => element !== target.value);
    setStateFavorit(removeFavorit);
    setDescription([]);
  };

  const btnDescription = ({ target }) => {
    const uniqueFavorites =([target.value]);
    setDescription(uniqueFavorites);
  };

  return (
    <div>
      <header className="header">
        <div className="imagemGibli">
          <Link to="/">
            <img
              id="imgaemGibli"
              src={ images3 }
              alt="gibliImagen"
            />
          </Link>
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
        <h1 className="filme">Favorites</h1>
        <div className="anime">
          {
            favorit.map((element, index) => (
              <div key={ element } className="button">
                   <input
                  type="image"
                  value={ `img-${index}` }
                  id={"imageAnime"}
                  onClick={ btnDescription }
                  src={ gitData[element].image }
                  alt={ gitData[element].original_title_romanised }
                />
                { description.some((ele) => ((ele === `img-${index}`))) 
                   && 
                   <div className="descrition">
                   <br/>
                    <h1 id="title-description">{gitData[element].title}</h1>
                    <br/>
                    <h2 id="id-description">{gitData[element].description}</h2> 
                   </div>
                 }
                <input
                  type="image"
                  value={ element }
                  onClick={ removeAnime }
                  id="heartImagen"
                  src={ VetorRed }
                  alt="heartImagen"
                />
              </div>))
          }
        </div>
      </div>
    </div>
  );
}
