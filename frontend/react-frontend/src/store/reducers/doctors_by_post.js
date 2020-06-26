import * as actionTypes from '../actions/doctors_by_post/actionTypes';
import {updateObject} from '../utility';

const initialState = {
  searchUrl: null,
  filterUrl: null,
};

const setSearchUrl = (state, action) => {
  return updateObject(state, {
    searchUrl: action.searchUrl,
  });
};

const setFilterUrl = (state, action) => {
  return updateObject(state, {
    filterUrl: action.filterUrl,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_URL:
      return setSearchUrl(state, action);
    case actionTypes.FILTER_URL:
      return setFilterUrl(state, action);
    default:
      return state;
  }
};

export default reducer;
