import {call, put, takeLatest, all, select} from 'redux-saga/effects';

import libraryService from './../services/libraryService';

import Actions from './../actions/library';

function* fetchCategories(action) {
  try {
    let {items, count} = yield call(libraryService.fetchCategories, action.payload.page);

    yield put(Actions['LIBRARY/FETCH_CATEGORIES_SUCCESSFULLY']({items, count}));
  } catch ({message}) {
    yield put(Actions['LIBRARY/FETCH_CATEGORIES_ERROR']({message}));
  }
}

function* fetchCategoryData(action) {
  try {
    let categoryData = yield call(libraryService.fetchCategoryData, action.payload);
    let categoryTracks = yield call(libraryService.fetchCategoryTracks, action.payload);

    yield put(Actions['LIBRARY/FETCH_CATEGORY_DATA_SUCCESSFULLY']({categoryData, categoryTracks}));
  } catch ({message}) {
    yield put(Actions['LIBRARY/FETCH_CATEGORY_DATA_ERROR']({message}));
  }
}

function* fetchCategoriesSaga() {
  yield takeLatest('LIBRARY/FETCH_CATEGORIES', fetchCategories);
}

function* fetchCategoryDataSaga() {
  yield takeLatest('LIBRARY/FETCH_CATEGORY_DATA', fetchCategoryData);
}

export default function* librarySaga() {
  yield all([
    fetchCategoriesSaga(),
    fetchCategoryDataSaga(),
  ]);
};
