import axios from "axios"

export const updateComments = (comments = []) => {
   return {
       type:"UPDATE_COMMENTS",
       payload:{
           comments:comments
       }
   }
}

export const fetchComments = (postId = "",comments = []) => {
    return (dispatch) => {

        //console.log(" terkirim tak ==> ",postId)
        postId = "ECDCEB85-46ED-6FEA-FF21-844AC053B100" // sementara

        const trueURL = "https://api.backendless.com/11BFB750-A260-981E-FF14-A1EEBD735000/4B647189-4634-88F4-FF7A-45BE60E6B000/data/Comments?where=postId%3D'"+postId+"'&sortBy=created%20desc&loadRelations=postId"
        const tempURL = "https://api.backendless.com/11BFB750-A260-981E-FF14-A1EEBD735000/4B647189-4634-88F4-FF7A-45BE60E6B000/data/Comments?loadRelations=postId&sortBy=created%20desc"

        axios.get(tempURL)
        .then(res => {

            const comments = res.data.map((item) => {
                return {
                    id:item.objectId,
                    comment:item.comment,
                    created:item.created,
                    updated:item.updated
                }
            })

            dispatch(updateComments(comments))
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const addComment = (data) => {
    return (dispatch) => {
        
        console.log(" data masuk pak ==> ",data)

        axios.post(
            "https://api.backendless.com/11BFB750-A260-981E-FF14-A1EEBD735000/4B647189-4634-88F4-FF7A-45BE60E6B000/data/Comments",
            data
        )
        .then(res => {
            console.log("liat respon => ",res.data)
            // do something in here 
            const postId = "" // dari response 
            dispatch(fetchComments())
        })
        .catch(err => {
            console.log( err )
        })
    }
}