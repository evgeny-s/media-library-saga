import {connect} from 'react-redux';

import CategoryList from "../components/CategoryList";

const mapStateToProps = state => {
  return {
    items: state.library.categories,
    fetchCategoryError: state.library.fetchCategoryError,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch({
      type: 'LIBRARY/FETCH_CATEGORIES',
    }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryList);
