import { createStore, combineReducers, applyMiddleware } from "redux"
import app from "./../common/reducers/app";
import posts from "./../common/reducers/posts"
import categories from "./../common/reducers/categories"
import helpers from "./../helpers/helpers"
import thunk from "redux-thunk"

const reducers = combineReducers({
    app,
    posts,
    categories,
    helpers
})

const middlewares = applyMiddleware(
    thunk
)

export default createStore(reducers,middlewares)