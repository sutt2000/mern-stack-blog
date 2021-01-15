import {
  CLEAR_ERROR_FAILURE,
  CLEAR_ERROR_SUCCES,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCES,
} from "../types";
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: "",
  userId: "",
  userName: "",
  userRole: "",
  errorMsg: "",
  successMsg: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        errorMsg: "",
        isLoading: true,
      };

    case LOGIN_SUCCES:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.paload,
        isAuthenticated: true,
        isLoading: false,
        userId: action.payload.user.id,
        userRole: action.payload.user.role,
        errorMsg: "",
      };

    case LOGIN_FAILURE:
      localStorage.removeItem("token");
      return {
        ...state,
        ...action.payload,
        token: null,
        user: null,
        userId: null,
        isAuthenticated: false,
        isLoading: false,
        userRole: null,
        errorMsg: action.payload.data.msg,
      };

      
    default:
      return state;
  }
};

export default authReducer;
