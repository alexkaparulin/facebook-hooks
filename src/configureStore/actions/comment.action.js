export const COMMENT = 'COMMENT';

export const add_comment = (new_comment)=>({
    type: COMMENT,
    comment: new_comment
})
