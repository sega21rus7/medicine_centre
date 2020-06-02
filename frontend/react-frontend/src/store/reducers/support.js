import * as actionTypes from '../actions/support/actionTypes';
import {updateObject} from '../utility';

const initialState = {
  tabActiveValue: 'view',
};

const setTabActiveValue = (state, action) => {
  return updateObject(state, {
    tabActiveValue: action.tabActiveValue,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUPPORT_TAB_ACTIVE_VALUE:
      return setTabActiveValue(state, action);
    default:
      return state;
  }
};

export default reducer;
