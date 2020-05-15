import {connect} from 'react-redux';

import Paginator from "../components/common/Paginator";
import listsConsts from "../consts/lists";

const mapStateToProps = state => {
  return {
    page: state.library.categoryPage,
    count: state.library.categoriesCount,
    limit: listsConsts.CATEGORIES_FETCH_LIMIT,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    fetchItems: (page) => dispatch({
      type: 'LIBRARY/FETCH_CATEGORIES',
      payload: {
        page,
      }
    }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Paginator);
