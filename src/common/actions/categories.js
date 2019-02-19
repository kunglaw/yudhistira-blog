import axios from "axios"

export const updateCategory = (categories = []) => {
    return {
        type:"UPDATE_CATEGORY",
        payload:{
            categories:categories
        }
    }
}

export const fetchCategory = (categories = []) => {

    return (dispatch) => {
        axios.get("https://api.backendless.com/11BFB750-A260-981E-FF14-A1EEBD735000/4B647189-4634-88F4-FF7A-45BE60E6B000/data/Categories")
        .then(res => {
    
            const categories = res.data.map((item) => {
                return {
                    category:item.name,
                    id:item.objectId,
                    created:item.created,
                    updated:item.updated
                }
            })

            //console.log("action Category ==> ",categories)

            dispatch(updateCategory(categories))
    
        })
        .catch(err => {
            console.log(err)
        })
    }   
}