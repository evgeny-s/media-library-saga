import {connect} from 'react-redux';

import CategoryList from "../components/CategoryList";
import Actions from "../actions/library";

const mapStateToProps = state => {
  return {
    items: state.library.categories,
    fetchCategoryError: state.library.fetchCategoryError,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: (page) => dispatch(Actions["LIBRARY/FETCH_CATEGORIES"]({page})),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryList);
