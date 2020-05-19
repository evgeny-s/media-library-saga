import {connect} from 'react-redux';

import DialogForm from "../components/DialogForm";
import Actions from "../actions/library";

const mapStateToProps = (state, ownProps) => {
  return {
    isAddTrackFormVisible: state.library.isAddTrackFormVisible,
    ...ownProps,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    closeDialog: () => dispatch(Actions["LIBRARY/CLOSE_TRACK_FORM_DIALOG"]()),
    saveTrack: (params) => dispatch(Actions["LIBRARY/SAVE_TRACK"](params)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DialogForm);
