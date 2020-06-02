import * as actionTypes from '../actions/make_appoinment/actionTypes';
import {updateObject} from '../utility';

const initialState = {
  tabActiveValue: 'my',
};

const setTabActiveValue = (state, action) => {
  console.log('reducer');

  return updateObject(state, {
    tabActiveValue: action.tabActiveValue,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MAKE_APPOINTMENT_TAB_ACTIVE_VALUE:
      return setTabActiveValue(state, action);
    default:
      return state;
  }
};

export default reducer;
