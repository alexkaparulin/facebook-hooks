export const OPEN_BOX = 'OPEN_BOX';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const COMMENT = 'COMMENT';

export const openClose_postBox = (boolean)=>({
    type: OPEN_BOX,
    payload: boolean
})

export const add_new_post = (post)=>({
    type: ADD_NEW_POST,
    payload: post,
})

export const add_comment = (new_comment)=>({
    type: COMMENT,
    comment: new_comment,
})
