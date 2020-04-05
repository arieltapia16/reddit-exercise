import { FETCH_DATA, SELECT_POST} from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        result: action.payload
      }
    case SELECT_POST:
      return {
        ...state,
        postSelected: action.post
      }
    default:
      return state
  }
}