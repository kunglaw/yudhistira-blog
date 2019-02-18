const INITIAL_STATE = {
    helpers:{}
}

export default function(state = INITIAL_STATE, action ) {
    switch( action.type ) {
        case "WORD_LIMITER" :
            // console.log("word_limiter")
            return function(str, limit) {
                var strArr = str.split("-")
                var strLimit = strArr.slice(0,limit+1)
                var result = strLimit.join(" ")
                return result
            }
    
        default :
            return INITIAL_STATE

    }
}

