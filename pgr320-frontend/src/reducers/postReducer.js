import { ADD_GROCERY, DELETE_GROCERY, FETCH_GROCERY } from '../actions/types';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case ADD_GROCERY:
      return [...state, action.payload];
    case DELETE_GROCERY:
      return state.filter(post => post.id !== action.payload.id);
      case FETCH_GROCERY:
      return action.posts;
    default:
      return state;
  }
}