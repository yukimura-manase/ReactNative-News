import { ADDCLIP, DELETECLIP } from "../actions/user";

const initialState = {
    clips: []
};

const reducer = (state = initialState, action: any)=> {

    switch(action.type){

        case ADDCLIP :
            console.log(action.clip);
            return { ...state, clips: [ ...state.clips, action.clip ] };

        case DELETECLIP :
            console.log(action.clip);
            return { ...state, clips: state.clips.filter( (clip: any) => clip.url !== action.clip.url) }; // 一致したものを除外した配列生成！

        default : return state;
    };
};

export default reducer;