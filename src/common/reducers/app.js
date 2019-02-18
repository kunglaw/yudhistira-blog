const INITIAL_STATE = {
    title:"Yudhistira Blog",
    api:"", // backendless
    posts:[],
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        default:
            return INITIAL_STATE
    }
}