import {
  GETTING_DATA,
  DATA_SUCCESS,
  DATA_FAILED,
  POST_SUCCESS
} from "./Actions";

const initValue = {
  isLoading: false,
  Data: null,
  error: ""
};

export const Reducer = (state = initValue, action) => {
  switch (action.type) {
    case GETTING_DATA:
      return { ...state, isLoading: true };
    case DATA_SUCCESS:
      console.log(action.payload);
      return { ...state, isLoading: false, Data: action.payload };
    case DATA_FAILED:
      console.log(DATA_FAILED);
      return state;
    case POST_SUCCESS:
      console.log(POST_SUCCESS);
      return { ...state, Data: [...state.Data, action.papload] };

    default:
      return state;
  }
};
