import React from 'react';
import '../styles/home.css';
import { connect } from 'react-redux';

import HomeEn from '../subpage/HomeEn';
import HomePt from '../subpage/HomePt';
import { translateAction } from '../redux/actions';

class Home extends React.Component {
  state = {
    english: true
  }

  translate = () => {
    const { english } = this.state;
    this.setState({ english: !english })
  }

  render() {
    const { english } = this.state;
    return (
      <div className='home'>
        <button type='button' className='btnTranslate' onClick={this.translate}>{english ? 'Traduzir' : 'Translate'}</button>
        {english 
        ? <HomeEn />
        : <HomePt />
        }
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  english: store.translate.english,
});
const mapDispatchToProps = (dispatch) => ({
  translate: (english) => dispatch(translateAction(english)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);