export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED  = 'FRIENDS_FETCHED';
export const FETCH_ERROR  = 'FETCH_ERROR';

export function getDataArr(dispatch) {

	return () => {

	dispatch({ type: FETCHING_FRIENDS })
	
	return fetch("https://randomuser.me/api/?results=15")
	.then(res=>res.json())
	.then(res => dispatch({
		type	: FRIENDS_FETCHED,
		payload	: res }))

	.catch( err => dispatch({
		type	: FETCH_ERROR,
		payload	: err.message}))
	};
}