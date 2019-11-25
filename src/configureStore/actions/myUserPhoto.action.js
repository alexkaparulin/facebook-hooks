export const FETCHING_PHOTOS = 'FETCHING_PHOTOS';
export const PHOTOS_FETCHED  = 'PHOTOS_FETCHED';
export const FETCH_ERROR  = 'FETCH_ERROR';

export function fetchUserPhotos(dispatch) {

	return () => {

	dispatch({ type: FETCHING_PHOTOS })
	
    return fetch('https://picsum.photos/v2/list')
	.then(res=>res.json())
	.then(res => dispatch({
		type	: PHOTOS_FETCHED,
		payload	: res }))

	.catch( err => dispatch({
		type	: FETCH_ERROR,
		payload	: err.message}))
	};
}