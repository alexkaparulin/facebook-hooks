export const OPEN_BOX = 'OPEN_BOX';
export const CLOSE_BOX = 'CLOSE_BOX';

export const openClose_postBox = (boolean)=>({
    type: OPEN_BOX,
    payload: boolean
})
