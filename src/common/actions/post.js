// actions 
import axios from "axios"

export const updatePostDetail = (post = {}) => {
    return {
        type:"UPDATE_POST_DETAIL",
        payload:{
            post:{
                ...post
            }
        }
    }
}

export const fetchPostDetail = (id) => {
    return (dispatch) => {
        axios.get("https://api.backendless.com/11BFB750-A260-981E-FF14-A1EEBD735000/4B647189-4634-88F4-FF7A-45BE60E6B000/data/Posts/"+id)
        .then(res => {
            const post = res.data

            dispatch(updatePostDetail(post))
        })
        .catch(err => {
            console.log(" err => ",err)
        })
    }
}

