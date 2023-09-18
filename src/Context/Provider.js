import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [selectedLanguage, setSelectedLanguage] = useState('brl');

  const toggleLanguage = () => {
    const newLanguage = selectedLanguage === 'eua' ? 'brl' : 'eua';
    setSelectedLanguage(newLanguage);
  };

  const context = useMemo(() => ({
    toggleLanguage,
    selectedLanguage,
  }), [
    toggleLanguage,
    selectedLanguage,
  ]);

  return <Context.Provider value={ context }>{children}</Context.Provider>;
}
export default Provider;

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}.isRequired;