import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [query, setQuery] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('brl');

  const toggleLanguage = () => {
    const { selectedLanguage } = this.state;
    const newLanguage = selectedLanguage === 'eua' ? 'brl' : 'eua';
    this.setState({ selectedLanguage: newLanguage });
  };

  const context = useMemo(() => ({
    setQuery,
    query,
    setSearchList,
    searchList,
    toggleLanguage,
  }), [
    query,
    searchList,
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