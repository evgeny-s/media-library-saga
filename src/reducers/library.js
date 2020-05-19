import update from 'immutability-helper';
import {handleActions} from 'redux-actions';

import Actions from './../actions/library';

const initialState = {
  categories: [],
  fetchCategoryError: '',
  categoryPage: 1,
  categoriesCount: 0,

  categoryData: null,
  categoryTracks: [],
  fetchCategoryDataError: '',
};

const libraryReducer = handleActions({
  [Actions['LIBRARY/FETCH_CATEGORIES_SUCCESSFULLY']]: (state, action) => {
    return update(state, {
      $merge: {
        categories: action.payload.items,
        categoriesCount: action.payload.count,
      }
    });
  },
  [Actions['LIBRARY/FETCH_CATEGORY_DATA_SUCCESSFULLY']]: (state, action) => {
    const {categoryData, categoryTracks} = action.payload;
    return update(state, {
      $merge: {
        categoryData,
        categoryTracks,
      }
    });
  },
  [Actions['LIBRARY/FETCH_CATEGORIES_ERROR']]: (state, action) => {
    return update(state, {
      $merge: {
        fetchCategoryError: action.payload.message,
      }
    });
  },
  [Actions['LIBRARY/FETCH_CATEGORY_DATA_ERROR']]: (state, action) => {
    return update(state, {
      $merge: {
        fetchCategoryDataError: action.payload.message,
      }
    });
  },
  [Actions['LIBRARY/FETCH_CATEGORIES']]: (state, action) => {
    return update(state, {
      $merge: {
        categoryPage: action.payload.page
          ? action.payload.page
          : initialState.categoryPage,
      }
    });
  }
}, initialState);

export default libraryReducer;
