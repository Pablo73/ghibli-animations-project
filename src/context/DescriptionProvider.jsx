import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DescriptionContext from './DescriptionContext';

function DescriptionProvider({ children }) {
  const [description, setDescription] = useState([]);

  return (
    <DescriptionContext.Provider value={ { description, setDescription } }>
      {children}
    </DescriptionContext.Provider>
  );
}

DescriptionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DescriptionProvider;