export const FETCHING_MYUSER_FRIENDS = 'FETCHING_MYUSER_FRIENDS';
export const MYUSER_FRIENDS_FETCHED  = 'MYUSER_FRIENDS_FETCHED';
export const FETCH_ERROR  = 'FETCH_ERROR';

export function fetchUserFriends(dispatch) {

	return () => {

	dispatch({ type: FETCHING_MYUSER_FRIENDS })
	
    return fetch('https://randomuser.me/api/?results=9')
	.then(res=>res.json())
	.then(res => dispatch({
		type	: MYUSER_FRIENDS_FETCHED,
		payload	: res }))

	.catch( err => dispatch({
		type	: FETCH_ERROR,
		payload	: err.message}))
	};
}