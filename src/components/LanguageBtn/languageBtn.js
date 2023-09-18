import React, { useContext } from 'react';
import eua from '../../images/eua.png';
import brazil from '../../images/brazil.png';
import './languageBtn.css';
import Context from '../../Context/Context';

function LanguageBtn() {
  const { selectedLanguage, toggleLanguage } = useContext(Context);

  return (
    <>
      <div className="languageBtn-container">
        <div className="languageBtn">
          <button
            className={`languageBtn-btn${selectedLanguage === 'eua' ? '-selected' : ''}`}
            onClick={toggleLanguage}
          >
            <img className="language-img" src={eua} alt="eua" />
          </button>
          <button
            className={`languageBtn-btn${selectedLanguage === 'brl' ? '-selected' : ''}`}
            onClick={toggleLanguage}
          >
            <img className="language-img" src={brazil} alt="brl" />
          </button>
        </div>
      </div>
    </>
  );
}

export default LanguageBtn;
