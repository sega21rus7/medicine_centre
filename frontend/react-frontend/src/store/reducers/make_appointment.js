import * as actionTypes from '../actions/reviews/actionTypes';
import {updateObject} from '../utility';

const initialState = {
  tabActiveValue: 'my',
};

const setTabActiveValueSuccess = (state, action) => {
  return updateObject(state, {
    tabActiveValue: action.tabActiveValue,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TAB_ACTIVE_VALUE:
      return setTabActiveValueSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
