export const FETCHING_DATA = 'FETCHING_DATA'
export const DATA_FETCHED  = 'DATA_FETCHED'
export const FETCH_ERROR  = 'FETCH_ERROR'

export function fetchUserPhotos(dispatch) {

	return () => {

	dispatch({ type: FETCHING_DATA })
	
    return fetch('https://picsum.photos/v2/list')
	.then(res=>res.json())
	.then(res => dispatch({
		type	: DATA_FETCHED,
		payload	: res }))

	.catch( err => dispatch({
		type	: FETCH_ERROR,
		payload	: err.message}))
	};
}