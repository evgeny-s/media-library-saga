import update from 'immutability-helper';

const initialState = {
  categories: [],
  fetchCategoryError: '',
  categoryPage: 1,
  categoriesCount: 0,
};

function libraryReducer(state = initialState, action) {
  switch (action.type) {
    case 'LIBRARY/FETCH_CATEGORIES_SUCCESSFULLY':
      return update(state, {
        $merge: {
          categories: action.payload.items,
          categoriesCount: action.payload.count,
        }
      });
    case 'LIBRARY/FETCH_CATEGORIES_ERROR':
      return update(state, {
        $merge: {
          fetchCategoryError: action.payload.message,
        }
      });
    default:
      return state
  }
}

export default libraryReducer;
