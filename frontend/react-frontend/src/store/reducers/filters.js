import * as actionTypes from '../actions/filters/actionTypes';
import {updateObject} from '../utility';

const initialState = {
  doctorSearchUrl: null,
  newsSearchUrl: null,
  articleSearchUrl: null,
  doctorFilterUrl: null,
};

const setDoctorSearchUrl = (state, action) => {
  return updateObject(state, {
    doctorSearchUrl: action.doctorSearchUrl,
  });
};

const setNewsSearchUrl = (state, action) => {
  return updateObject(state, {
    newsSearchUrl: action.newsSearchUrl,
  });
};

const setArticleSearchUrl = (state, action) => {
  return updateObject(state, {
    articleSearchUrl: action.articleSearchUrl,
  });
};

const setDoctorFilterUrl = (state, action) => {
  return updateObject(state, {
    doctorFilterUrl: action.doctorFilterUrl,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DOCTOR_SEARCH_URL:
      return setDoctorSearchUrl(state, action);
    case actionTypes.NEWS_SEARCH_URL:
      return setNewsSearchUrl(state, action);
    case actionTypes.ARTICLE_SEARCH_URL:
      return setArticleSearchUrl(state, action);
    case actionTypes.DOCTOR_FILTER_URL:
      return setDoctorFilterUrl(state, action);
    default:
      return state;
  }
};

export default reducer;
