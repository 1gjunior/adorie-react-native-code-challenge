import axios from 'axios';
import {Config} from 'react-native-config';
import {GET_PHOTOS, SET_LOADING, PHOTOS_ERROR} from './types';

// pega as fotos do servidor unsplash
export const getPhotos = () => async (dispatch: any) => {
  try {
    setLoading();

    const res = await axios.get(
      `${Config.API_URL}search/photos?query=office&client_id=${Config.CLIENT_ID}`,
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

// define loading para true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
