import {combineReducers} from 'redux';
import authReducer from './reducers/auth'
import reviewsReducer from './reducers/reviews'

export default combineReducers({
  auth: authReducer,
  reviews: reviewsReducer,
});
