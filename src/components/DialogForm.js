import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function DialogForm({isAddTrackFormVisible, closeDialog, saveTrack, currentCategoryId}) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [duration, setDuration] = useState('');

  function _change(name, e) {
    switch(name) {
      case 'Name': setName(e.target.value);break;
      case 'Url': setUrl(e.target.value);break;
      case 'Duration': setDuration(e.target.value);break;
    }
  }

  function save() {
    saveTrack({
      name,
      url,
      duration,
      categoryId: currentCategoryId,
    });
  }

  return (
    <div>
      <Dialog open={isAddTrackFormVisible} onClose={closeDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Track</DialogTitle>
        <DialogContent>
          <TextField
            onChange={_change.bind(this, 'Name')}
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            value={name}
          />
          <TextField
            onChange={_change.bind(this, 'Url')}
            autoFocus
            margin="dense"
            id="url"
            label="Url"
            type="text"
            fullWidth
            value={url}
          />
          <TextField
            onChange={_change.bind(this, 'Duration')}
            autoFocus
            margin="dense"
            id="duration"
            label="Duration"
            type="text"
            fullWidth
            value={duration}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={save} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DialogForm.propTypes = {
  isAddTrackFormVisible: PropTypes.bool,
  closeDialog: PropTypes.func,
  saveTrack: PropTypes.func,
  currentCategoryId: PropTypes.number,
};

export default DialogForm;
