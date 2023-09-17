import React, { Component } from 'react';
import eua from "../../images/eua.png";
import brazil from "../../images/brazil.png";
import './languageBtn.css';

class LanguageBtn extends Component {
  state = {
    selectedLanguage: 'brl',
  }
  flag = [
    'brl',
    'eua'
  ];

  toggleLanguage = () => {
    const { selectedLanguage } = this.state;
    const newLanguage = selectedLanguage === 'eua' ? 'brl' : 'eua';
    this.setState({ selectedLanguage: newLanguage });
  };

  // Button ENG/POR Example
  // https://codepen.io/alvarotrigo/pen/jOaXGyq
  render() {
    const { selectedLanguage } = this.state;
    return (
      <>
      <div className='languageBtn-container'>
        <div className='languageBtn'>
          <button
            className={`languageBtn-btn${selectedLanguage === 'eua' ? '-selected' : ''}`}
            onClick={() => {}}
          >
            <img
              className="language-img"
              src={eua}
              alt="eua"
            />
          </button>
          <button
            className={`languageBtn-btn${selectedLanguage === 'brl' ? '-selected' : ''}`}
            // onClick={this.toggleLanguage}
            onClick={() => {}}

          >
            <img
              className="language-img"
              src={brazil}
              alt="brl"
            />
          </button>
        </div>
      </div>
      {/* <label>
        <input type="checkbox" name="switch" id="switch"/>
      </label> */}
      </>
    );
  }
}

// LanguageBtn.propTypes = {
//   routeHeader: PropTypes.string
// };

export default LanguageBtn;