import {connect} from 'react-redux';

import Paginator from "../components/common/Paginator";
import listsConsts from "../consts/lists";
import Actions from './../actions/library';

const mapStateToProps = state => {
  return {
    page: state.library.categoryPage,
    count: state.library.categoriesCount,
    limit: listsConsts.CATEGORIES_FETCH_LIMIT,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    fetchItems: (page) => dispatch(Actions["LIBRARY/FETCH_CATEGORIES"]({page})),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Paginator);
