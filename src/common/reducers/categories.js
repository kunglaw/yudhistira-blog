const INITIAL_STATE = {
    categories:[]
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "UPDATE_CATEGORY" :
          
            return {
                ...state,
                categories:action.payload.categories
            }

        case "GET_CATEGORY" :
            return {
                ...state,
                categories:action.payload.categories
            }
        
        default:
            return state    
    }
}