import {call, put, takeLatest, all, select} from 'redux-saga/effects';

import libraryService from './../services/libraryService';

function* fetchCategories() {
  try {
    let items = yield call(libraryService.fetchCategories);

    yield put({type: 'LIBRARY/FETCH_CATEGORIES_SUCCESSFULLY', payload: {items}});
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
