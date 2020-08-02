import * as actionType from './action';

const initializeState = {
  name: '',
  age: ''
};

const rootReducer = (state = initializeState, action) => {
  switch (action.type) {
    case actionType.ADD_NAME:
      return {
        ...state,
        name: action.value
      };
    case actionType.ADD_AGE:
      return {
        ...state,
        age: action.value
      };
    default:
      return state;
  }
};

export default rootReducer;
