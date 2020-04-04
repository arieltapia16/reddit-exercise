import {FETCH_DATA} from '../constants';

import data from './data.json'

export const FetchData = () => dispatch => {
  dispatch({
    type: FETCH_DATA,
    payload: data,
  })
}