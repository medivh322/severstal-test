import { call, put, takeLatest } from 'redux-saga/effects'
import { AUTH_REQUEST, AUTH_USER, GET_NEWS, GET_NEWS_REQUEST, LOGOUT_REQUEST, LOGOUT_USER } from '../constants';

function fetchNews(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => data);
}

function* getNews(){
    const response = yield call(fetchNews);
    yield put({type: GET_NEWS, payload: response});
}

function* authUser(){
    yield localStorage.setItem('isAuth', true);
    yield put({type: AUTH_USER, payload: true});
}

function* logoutUser(){
    yield localStorage.setItem('isAuth', false);
    yield put({type: LOGOUT_USER, payload: false})
}

function* mainSagas(){
    yield takeLatest(GET_NEWS_REQUEST, getNews);
    yield takeLatest(AUTH_REQUEST, authUser);
    yield takeLatest(LOGOUT_REQUEST, logoutUser);
}

export default mainSagas;