import axios from "axios"

export const updatePost = (posts = []) => {
    return {
        type:"UPDATE_POST",
        payload:{
            posts:posts
        }
    }
}

export const fetchPost = (posts = []) => {
    return (dispatch) => {
        axios.get("https://api.backendless.com/11BFB750-A260-981E-FF14-A1EEBD735000/4B647189-4634-88F4-FF7A-45BE60E6B000/data/Posts")
        .then(res => {

            const posts = res.data.map((item) => {
                return {
                    id:item.objectId,
                    title:item.title,
                    description:item.description,
                    created:item.created,
                    updated:item.updated,
                    UserId:item.ownerId
                }
            })

            dispatch(updatePost(posts))

        }).catch(err => {
            console.log(err)
        })
    }
}