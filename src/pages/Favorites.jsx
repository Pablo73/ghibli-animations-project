import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../context/FavoritesContext';
import FilmsContext from '../context/FilmsContext';
import Vector from '../image/Vector.png';
import images3 from '../image/images3.png';
import VetorRed from '../image/VetorRed.png';

export default function Favorites() {
  const { favorit, setStateFavorit } = useContext(FavoritesContext);
  const { gitData } = useContext(FilmsContext);

  const removeAnime = ({ target }) => {
    const removeFavorit = favorit.filter((element) => element !== target.value);
    setStateFavorit(removeFavorit);
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
            favorit.map((element) => (
              <div key={ element } className="button">
                <img
                  id={"imageAnime"}
                  src={ gitData[element].image }
                  alt={ gitData[element].original_title_romanised }
                />
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
