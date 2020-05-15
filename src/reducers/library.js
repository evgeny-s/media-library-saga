import update from 'immutability-helper';

const initialState = {
  categories: [],
  fetchCategoryError: '',
};

function articleReducer(state = initialState, action) {
  switch (action.type) {
    case 'LIBRARY/FETCH_CATEGORIES_SUCCESSFULLY':
      return update(state, {
        $merge: {
          categories: action.payload.items,
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

export default articleReducer;
