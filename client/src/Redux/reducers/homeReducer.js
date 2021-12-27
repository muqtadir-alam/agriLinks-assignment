/* eslint-disable import/no-anonymous-default-export */
import { GET_REPORTS } from '../actionType/ActionType';

var initialState = {};

const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_REPORTS:
			return {
				...state,
				reportsList: action.payload,
			};

		default:
			return state;
	}
};

export default homeReducer;
