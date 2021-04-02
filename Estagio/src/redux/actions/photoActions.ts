import axios from 'axios';
import {Config} from 'react-native-config';
import {GET_PHOTOS, SET_LOADING, PHOTOS_ERROR, SET_QUERY} from './types';

// pega as fotos do servidor unsplash
export const getPhotos = (query: string) => async (dispatch: any) => {
  try {
    setLoading();

    const res = await axios.get(
      `${Config.API_URL}search/photos?query=${query}&client_id=${Config.CLIENT_ID}`,
    );
    const data = await res.data.results;

    dispatch({
      type: GET_PHOTOS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PHOTOS_ERROR,
      payload: err.response.data,
    });
  }
};

// seta o estado query
export const setQuery = (query: string) => (dispatch: any) => {
  dispatch({
    type: SET_QUERY,
    payload: query,
  });
};

// define loading para true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
