import {
  GET_PHOTOS,
  SET_LOADING,
  PHOTOS_ERROR,
  SET_QUERY,
} from '../actions/types';

const initialState = {
  photos: null,
  loading: false,
  error: null,
  query: null,
};

export default (state = initialState, action: {type: any; payload: any}) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        type: GET_PHOTOS,
        photos: action.payload,
        loading: false,
      };
    case SET_QUERY:
      return {
        ...state,
        type: SET_QUERY,
        query: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case PHOTOS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
