import StarActionTypes from './star.types';
import { getCharacters } from '../../services/charcter.service';

export const setStar = (starId) => ({
  type: StarActionTypes.SET_STAR,
  payload: starId,
});

export const fetchStarsStart = () => ({
  type: StarActionTypes.FETCH_STARS_START,
});

export const fetchStarsSuccess = (stars) => ({
  type: StarActionTypes.FETCH_STARS_SUCCESS,
  payload: stars,
});

export const fetchStarsFailure = (error) => ({
  type: StarActionTypes.FETCH_STARS_FAIL,
  payload: error,
});

export const fetchStarsStartAsync =  () => {
  console.log('called');
  return async (dispatch) => {
    console.log('called');
    dispatch(fetchStarsStart());

    try {
      const stars = await getCharacters();
      dispatch(fetchStarsSuccess(stars));
    } catch (error) {
      dispatch(fetchStarsSuccess(error));
    }
  };
};
