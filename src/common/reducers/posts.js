const INITIAL_STATE = {
    posts:[]
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "UPDATE_POST" :
            return {
                ...state,
                posts:action.payload.posts
            }
        case "GET_POST" :
            return {
                ...state,
                posts:action.payload.posts
            }
        default:
            return INITIAL_STATE
    }
}