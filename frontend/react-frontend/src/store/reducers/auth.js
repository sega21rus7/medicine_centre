import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
  token: null,
  error: null,
  isAuthenticated: false,
  isRegistered: false,
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    isAuthenticated: false,
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    isAuthenticated: true,
  });
};

const regSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    isAuthenticated: false,
    isRegistered: true,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    isAuthenticated: false,
    isRegistered: false,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
    isAuthenticated: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.REG_SUCCESS:
      return regSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
