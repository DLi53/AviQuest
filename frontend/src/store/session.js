import jwtFetch from "./jwt";

const RECEIVE_CURRENT_USER = 'session/RECEIVE_CURRENT_USER';
const RECEIVE_SESSION_ERRORS = 'session/RECEIVE_SESSION_ERRORS';
const CLEAR_SESSION_ERRORS = 'session/CLEAR_SESSION_ERRORS';
export const RECEIVE_USER_LOGOUT = 'session/RECEIVE_USER_LOGOUT'

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const receiveErrors = errors => ({
    type: RECEIVE_CURRENT_USER,
    errors
})

const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
})

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})



export const signup = user => startSession(user, 'api/users/register');
export const login = user => startSession(user, 'api/users/login');

export const getCurrentUser = () => async dispatch => {
    const res = await jwtFetch('/api/users/current');
    const user = await res.json();
    return dispatch(receiveCurrentUser(user));
};

const startSession = (userInfo, route) => async dispatch => {
    try {  
        const res = await jwtFetch(route, {
            method: "POST",
            body: JSON.stringify(userInfo)
        });
        const { user, token } = await res.json();
        localStorage.setItem('jwtToken', token);
        return dispatch(receiveCurrentUser(user));
    } catch(err) {
        const res = await err.json();
        if (res.statusCode === 400) {
        return dispatch(receiveErrors(res.errors));
        }
    }
};

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    dispatch(logoutUser());
}

const initialState = {
    user: undefined
}
