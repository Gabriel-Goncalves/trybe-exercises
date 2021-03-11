import {combineReducers} from 'redux';
import logginReducer from './logginReducer'
import registerReducer from './registerReducer'

const rootReducer = combineReducers({logginReducer, registerReducer});

export default rootReducer;
