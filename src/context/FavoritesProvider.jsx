import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FavoritesContext from './FavoritesContext';

function FavoritesProvider({ children }) {
  const [favorit, setStateFavorit] = useState([]);

  return (
    <FavoritesContext.Provider value={ { favorit, setStateFavorit } }>
      {children}
    </FavoritesContext.Provider>
  );
}

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FavoritesProvider;