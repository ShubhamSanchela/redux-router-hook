import { createStore, applyMiddleware, compose } from "redux"
import logger from "redux-logger"
import { bookReducer } from "./Book/BookReducer"

const store = createStore(bookReducer,
compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store