import { combineReducers } from 'redux';
import translate from './translate';
// import nomeReducer2 from './nomeReducer2';

const rootReducer = combineReducers({
  translate,
  // nomeReducer2,
});

export default rootReducer;