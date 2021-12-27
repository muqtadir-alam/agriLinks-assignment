import { combineReducers } from 'redux';

import homeReducer from './homeReducer';
const rootRuducer = combineReducers({
	home: homeReducer,
});

export default rootRuducer;
