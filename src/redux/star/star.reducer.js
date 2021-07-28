import StarActionTypes from './star.types';

const INITIAL_STATE = {
  loading: false,
  stars: null,
  selectedStar: null,
  error: null,
};

export const starReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StarActionTypes.FETCH_STARS_START:
      return {
        ...state,
        loading: true,
      };

    case StarActionTypes.FETCH_STARS_SUCCESS:
      return {
        ...state,
        loading: false,
        stars: action.payload,
      };

    case StarActionTypes.FETCH_STARS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case StarActionTypes.SET_STAR:
      return {
        ...state,
        selectedStar: action.payload,
      };
      
    default:
      return state;
  }
};
