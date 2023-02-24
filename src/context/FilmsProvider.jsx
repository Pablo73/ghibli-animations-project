import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import FilmsContext from './FilmsContext';

function FilmsProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [gitData, setGitData] = useState([]);

  useEffect(() => {
    const FetchAnime = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations');
        const data = await response.json();
        setGitData(data);
        setIsLoading(false);
      } catch (erro) {
        console.log('erro API')
      }
    };
    FetchAnime();
  }, []);

  const value = useMemo(() =>({
    gitData,
    isLoading,
    setGitData,
  }), [gitData, isLoading]);

  return (
    <FilmsContext.Provider value={ value }>
      {children}
    </FilmsContext.Provider>
  );
}

FilmsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilmsProvider;