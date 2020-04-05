import { FETCH_DATA, SELECT_POST} from '../constants';

import data from './data.json'

export const FetchData = () => dispatch => {
  dispatch({
    type: FETCH_DATA,
    payload: data,
  })
}

export const SelectPost = post => dispatch => {
  dispatch({
    type: SELECT_POST,
    post,
  })
}