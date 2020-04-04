import { combineReducers } from 'redux';
import initialDataReducer from './initialDataReducer'

export default combineReducers({
  initialData: initialDataReducer
});