import React, { useContext } from 'react';
import './home.css';
import HomePt from './HomePt';
import LanguageBtn from '../../components/LanguageBtn/languageBtn';
import Context from '../../Context/Context';
import HomeEn from './HomeEn';

function Home() {
  const { selectedLanguage } = useContext(Context);

  return (
    <div className='home'>
      {
        selectedLanguage === "eua"
        ? <HomeEn />
        : <HomePt />
      }
      {/* <button type='button' className='btnTranslate' onClick={toggleLanguage}>
        {english ? 'Traduzir' : 'Translate'}
      </button>
      {english ? <HomeEn /> : <HomePt />} */}
      <section className='home-sectionImg'></section>
      <LanguageBtn />
    </div>
  );
}

export default Home;
