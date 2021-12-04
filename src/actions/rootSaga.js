import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import {takeEvery ,put, call} from 'redux-saga/effects'

import * as api from '../api/index.js';
// function* fetchPost() {
//     try {
//         const { data } = yield call( api.fetchPosts)
// const posts =yield select(selector.posts)
// console.log(posts, 'posts')
//        yield put({type: FETCH_ALL, payload:data });
   
//     } catch (e) {
//        yield put( {message: e.message});
//     }
//  }
 function* createPost(post) {
    try {
        const { data } = yield call( api.createPost, post)

       yield put({type: CREATE,payload: data });
     
    } catch (e) {
       yield put( {message: e.message});
    }
 }
 function* updatePost(id ,post,e) {
    console.log(e)
    try {
        const { data } = yield call( api.updatePost,id,post)

       yield put({type: UPDATE,payload: data });
     
    } catch (e) {
       yield put( {message: e.message});
    }
 }
 function* likePost(id) {
    try {
        const { data } = yield call( api.likePost,id)

       yield put({type: LIKE, payload:data });
     
    } catch (e) {
       yield put( {message: e.message});
    }
 }
 function* deletePost(id) {
    try {
         yield call( api.deletePost,id)

       yield put({type:DELETE, payload:id });
     
    } catch (e) {
       yield put( {message: e.message});
    }
 }



 export function* mySaga() {

    yield [
      //   takeLatest(FETCH_ALL, fetchPost),
        takeEvery(CREATE, createPost),
        takeEvery(UPDATE, updatePost),
        takeEvery(LIKE, likePost),
        takeEvery(DELETE, deletePost)
    ];
  }

  export const getPosts =()=>({
      type:FETCH_ALL
  })