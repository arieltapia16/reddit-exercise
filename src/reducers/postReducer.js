import {  SELECT_POST } from '../constants';

const initialState = {
  postSelected: '',
  viewedPosts: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_POST:
      return {
        ...state,
        postSelected: action.post,
        viewedPosts: [...state.viewedPosts, action.post.data.id]
      }
    default:
      return state
  }
}