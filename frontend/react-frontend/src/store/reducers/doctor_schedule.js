import * as actionTypes from '../actions/doctor_schedule/actionTypes';
import {updateObject} from '../utility';

const initialState = {
  tabActiveValue: 'my',
};

const setTabActiveValue = (state, action) => {
  return updateObject(state, {
    tabActiveValue: action.tabActiveValue,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DOCTOR_SCHEDULE_TAB_ACTIVE_VALUE:
      return setTabActiveValue(state, action);
    default:
      return state;
  }
};

export default reducer;
