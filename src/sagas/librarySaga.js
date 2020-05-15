import {call, put, takeLatest, all, select} from 'redux-saga/effects';

import libraryService from './../services/libraryService';

function* fetchCategories(action) {
  try {
    let {items, count} = yield call(libraryService.fetchCategories, action.payload.page);

    yield put({type: 'LIBRARY/FETCH_CATEGORIES_SUCCESSFULLY', payload: {items, count}});
  } catch ({message}) {
    yield put({type: 'LIBRARY/FETCH_CATEGORIES_ERROR', payload: {message}});
  }
}

function* fetchCategoriesSaga() {
  yield takeLatest('LIBRARY/FETCH_CATEGORIES', fetchCategories);
}



export default function* librarySaga() {
  yield all([
    fetchCategoriesSaga(),
  ]);
};
