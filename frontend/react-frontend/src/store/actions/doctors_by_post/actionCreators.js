import * as actionTypes from './actionTypes';

export const setSearchUrl = (value) => {
  return {
    type: actionTypes.SEARCH_URL,
    searchUrl: value,
  }
};

export const setFilterUrl = (value) => {
  return {
    type: actionTypes.FILTER_URL,
    filterUrl: value,
  }
};
