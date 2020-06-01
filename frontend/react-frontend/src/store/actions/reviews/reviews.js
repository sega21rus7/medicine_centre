import * as actionTypes from './actionTypes';

export const setTabActiveValue = (value) => {
  return {
    type: actionTypes.TAB_ACTIVE_VALUE,
    tabActiveValue: value,
  }
};
