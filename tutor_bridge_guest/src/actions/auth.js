import axios from 'axios';
import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
	LOG_OUT,
} from '../contants/auth';

const ROOT_URL = '';

export const login = ({ email, password }) => {
	return async dispatch => {
		dispatch({ type: LOGIN_REQUEST });

		try {
			const { data } = await axios.post(`${ROOT_URL}/users/login`, {
				email,
				password
			});

			dispatch({ type: LOGIN_SUCCESS });

		} catch (e) {
			dispatch({ type: LOGIN_FAILURE, error: e.message });
		}
	};
}

export const signup = ({ username, email, phone, password }) => {
	return async dispatch => {
		dispatch({ type: SIGNUP_REQUEST });
		try {
			const { data } = await axios.post(`${ROOT_URL}/users/signup`, {
				username,
				email,
				phone,
				password
			});

			dispatch({ type: SIGNUP_SUCCESS });

		} catch (error) {
			dispatch({ type: SIGNUP_FAILURE, error: error.message });
		}
	};
};