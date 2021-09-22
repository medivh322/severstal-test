import createSagaMiddleware from "@redux-saga/core"
import { applyMiddleware, createStore } from "redux"
import { AUTH_USER, GET_NEWS, LOGOUT_USER } from "../constants"
import mainSagas from "../sagas"

const initialState = {
    news: [],
    isAuth: (localStorage.getItem("isAuth") === "true") ? true : false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_NEWS:
            return {
                ...state, 
                news: action.payload
            }
        case AUTH_USER:
            return {
                ...state,
                isAuth: action.payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                isAuth: action.payload
            }
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mainSagas);

export default store;