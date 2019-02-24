import { createStore, combineReducers, applyMiddleware } from "redux"
import app from "./../common/reducers/app";
import posts from "./../common/reducers/posts"
import post from "./../common/reducers/post"
import categories from "./../common/reducers/categories"
import helpers from "./../helpers/helpers"
import thunk from "redux-thunk"

const reducers = combineReducers({
    app,
    posts,
    post,
    categories,
    helpers
})

const store = createStore(
    reducers,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)

export default store