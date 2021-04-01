import {GET_PHOTOS, SET_LOADING, PHOTOS_ERROR} from '../actions/types';

const initialState = {
  photos: null,
  loading: false,
  error: null,
};

export default (state = initialState, action: {type: any; payload: any}) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        type: GET_PHOTOS,
        photos: action.payload,
        loading: false,
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
