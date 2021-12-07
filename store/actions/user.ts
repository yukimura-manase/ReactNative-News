export const ADDCLIP = 'addClip';
export const DELETECLIP = 'deleteClip';

export const addClip = ( {clip}: any )=> {
    return {
        type: ADDCLIP,
        clip
    };
};

export const deleteClip = ({clip}: any )=> {
    return {
        type: DELETECLIP,
        clip
    };
};