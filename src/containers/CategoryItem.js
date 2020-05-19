import {connect} from 'react-redux';

import Actions from "../actions/library";
import CategoryItem from "../components/CategoryItem";

const mapStateToProps = state => {
  return {
    categoryData: state.library.categoryData,
    categoryTracks: state.library.categoryTracks,
    fetchCategoryDataError: state.library.fetchCategoryDataError,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    fetchCategoryData: (id) => dispatch(Actions["LIBRARY/FETCH_CATEGORY_DATA"](id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryItem);
