const INITIAL_STATE = {
    comments:[]
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "UPDATE_COMMENTS":
            return {
                ...state,
                comments:action.payload.comments
            }

        case "GET_COMMENTS":
            return {
                ...state,
                comments:action.payload.comments
            }

        default:
            return state;
    }
}

