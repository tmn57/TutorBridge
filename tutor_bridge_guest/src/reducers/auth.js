import * as types from '../contants/auth';

const authReducer = (state = {}, action) => {
	switch (action.type) {
		case types.LOGIN_REQUEST:
			return {
				loggingIn: true
			};
		case types.LOGIN_SUCCESS:
			return {
				loggedIn: true
			};
		case types.LOGIN_FAILURE:
			return {
				error: action.error
			};
		case types.SIGNUP_REQUEST:
			return {
				signingUp: true
			};
		case types.SIGNUP_SUCCESS:
			return {
				signedUp: true
			};
		case types.SIGNUP_FAILURE:
			return {
				error: action.error
			};
		case types.LOG_OUT:
			return {};
		default:
			return state;
	}
};

export default authReducer;