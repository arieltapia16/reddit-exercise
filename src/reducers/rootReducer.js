import { combineReducers } from 'redux';
import initialDataReducer from './initialDataReducer';
import postReducer from './postReducer';

export default combineReducers({
  initialData: initialDataReducer,
  post: postReducer
});