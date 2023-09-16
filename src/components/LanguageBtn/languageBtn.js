import React, { Component } from 'react';
import eua from "../../images/eua.png";
import brazil from "../../images/brazil.png";
import './languageBtn.css';

class LanguageBtn extends Component {
  state = {
    selected: true
  }
  flag = [
    'brl',
    'eua'
  ];
  // Button ENG/POR Example
  // https://codepen.io/alvarotrigo/pen/jOaXGyq
  render() {
    // const { routeHeader } = this.props;
    const { selected } = this.state;
    return (
      <div className='languageBtn-container'>
        <div className='languageBtn'>
          <button
            className={`languageBtn-btn${selected ? '-selected' : ''}`}
          >
            <img
              className="language-img"
              src={eua}
              alt="eua"
            />
          </button>
          <button>
            <img
              className="language-img"
              src={brazil}
              alt="eua"
            />
          </button>
        </div>
      </div>
    );
  }
}

// LanguageBtn.propTypes = {
//   routeHeader: PropTypes.string
// };

export default LanguageBtn;