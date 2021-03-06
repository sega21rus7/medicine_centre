import {combineReducers} from 'redux';
import authReducer from './reducers/auth';
import reviewsReducer from './reducers/reviews';
import supportReducer from './reducers/support';
import makeAppointmentReducer from './reducers/make_appointment';
import doctorScheduleReducer from './reducers/doctor_schedule';
import filtersReducer from './reducers/filters';

export default combineReducers({
  auth: authReducer,
  reviews: reviewsReducer,
  support: supportReducer,
  makeAppointment: makeAppointmentReducer,
  doctorSchedule: doctorScheduleReducer,
  filters: filtersReducer,
});
