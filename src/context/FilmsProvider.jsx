import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FilmsContext from './FilmsContext';

function FilmsProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [gitData, setGitData] = useState([]);

  useEffect(() => {
    const FetchAnime = async () => {
      setIsLoading(true);
      const response = await fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations');
      const data = await response.json();
      setGitData(data);
      setIsLoading(false);
    };
    FetchAnime();
  }, []);

  return (
    <FilmsContext.Provider value={ { isLoading, gitData } }>
      {children}
    </FilmsContext.Provider>
  );
}

FilmsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilmsProvider;