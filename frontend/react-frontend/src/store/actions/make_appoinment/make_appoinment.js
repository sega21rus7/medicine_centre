import * as actionTypes from './actionTypes';

export const setTabActiveValue = (value) => {
  console.log('action creator');

  return {
    type: actionTypes.MAKE_APPOINTMENT_TAB_ACTIVE_VALUE,
    tabActiveValue: value,
  }
};
