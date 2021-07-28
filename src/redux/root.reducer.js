import { combineReducers } from 'redux';
import { starReducer } from './star/star.reducer';

const rootReducer = combineReducers({
  stars: starReducer,
});

export default rootReducer;
