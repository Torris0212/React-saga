import { Types } from '../actions/userAction';

const INITIAL_STATE = {
    items: [],
    error: ''
};

export default function usersReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
      }

    case Types.USERS_ERROR:
      return {
        ...state,
        error: action.payload.error,
      }

    default: {
      return state;
    }
  }
}