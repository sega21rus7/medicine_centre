import * as actionTypes from './actionTypes';

export const setTabActiveValue = (value) => {
  return {
    type: actionTypes.SUPPORT_TAB_ACTIVE_VALUE,
    tabActiveValue: value,
  }
};
