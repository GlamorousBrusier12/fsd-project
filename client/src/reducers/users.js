import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "../actions";

const initialUserState = {
  userData: {},
  isLoggedIn: false,
};
export default function user(state = initialUserState, action) {
  //{ userData, isLoggedIn }
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return { userData: action.user, isLoggedIn: true };
    }
    case LOGIN_FAILURE: {
      return { userData: {}, isLoggedIn: false };
    }
    case LOGOUT: {
      return { userData: {}, isLoggedIn: false };
    }
    default:
      break;
  }
  return state;
}
