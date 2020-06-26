import * as actionTypes from './actionTypes';

export const setDoctorSearchUrl = (value) => {
  return {
    type: actionTypes.DOCTOR_SEARCH_URL,
    doctorSearchUrl: value,
  }
};

export const setNewsSearchUrl = (value) => {
  return {
    type: actionTypes.NEWS_SEARCH_URL,
    newsSearchUrl: value,
  }
};

export const setArticleSearchUrl = (value) => {
  return {
    type: actionTypes.ARTICLE_SEARCH_URL,
    articleSearchUrl: value,
  }
};

export const setDoctorFilterUrl = (value) => {
  return {
    type: actionTypes.DOCTOR_FILTER_URL,
    doctorFilterUrl: value,
  }
};
