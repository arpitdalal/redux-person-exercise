import * as actionType from './action';

const initializeState = {
  persons: []
};

const rootReducer = (state = initializeState, action) => {
  switch (action.type) {
    case actionType.ADD_PERSON:
      const newPerson = {
        id: Math.random(),
        name: action.value.name,
        age: action.value.age
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      };
    case actionType.REM_PERSON:
      const newPersonList = state.persons.filter((person) => person.id !== action.value);
      return {
        ...state,
        persons: newPersonList
      };
    default:
      return state;
  }
};

export default rootReducer;
