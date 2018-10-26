import {combineReducers} from 'redux';
import feedReducers from './feed'

const allReducers = combineReducers({
    feed: feedReducers
});

export default allReducers