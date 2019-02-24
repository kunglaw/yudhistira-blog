const INITIAL_STATE = {
    post:{ },
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "UPDATE_POST_DETAIL" :
            return {
                ...state,
                post:action.payload.post,
                // post:{}
            }
        case "GET_POST_DETAIL" :
            return {
                ...state,
                post:action.payload.post,
                // posts:[]
            }
        default:
            return state
    }
}