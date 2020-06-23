import * as actionTypes from './actionTypes';

export const setTabActiveValue = (value) => {
  return {
    type: actionTypes.DOCTOR_SCHEDULE_TAB_ACTIVE_VALUE,
    tabActiveValue: value,
  }
};
