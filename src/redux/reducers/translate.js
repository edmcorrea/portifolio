import { TRANSLATE } from "../actions";

const INITIAL_STATE = {
  english: true,
};

const translate = (state = INITIAL_STATE, action) => {
 switch(action.type) {
  case TRANSLATE:
    return {
      ...state,
      english: action.english,
      // key2: action.value2,
    };
   default: 
    return state;
 }
}

export default translate;