import movieReducer from './movieReducer';
import { combineReducers } from 'redux'
 
const rootReducers = combineReducers({
    movieReducer,
})

export default rootReducers;
