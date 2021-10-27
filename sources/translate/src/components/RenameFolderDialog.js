import React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';

import { StyledCancelButton, StyledMainButton } from './StyledButton';
import StyledDialogComponent from './StyledDialog';

import StudioAPI from '../api/studio';

export default function RenameFolderDialog({ open, onClose, path }) {
  const [folderName, setFolderName] = React.useState('');

  React.useEffect(() => {
    if (path) {
      setFolderName(path.split('/').pop());
    }
  }, [path]);

  const onSubmit = async () => {
    if (folderName && path) {
      const res = await StudioAPI.renameFolder(path, folderName);
      onClose(res);
    }
  };

  const closeWithoutSubmit = () => {
    onClose();
  };

  return (
    <div>
      <StyledDialogComponent
        open={open}
        onClose={closeWithoutSubmit}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">Rename Folder</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Current path: {path}<br />
            Please provide a new folder name.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Folder Name"
            type="text"
            fullWidth
            variant="standard"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value.trim())}
          />
        </DialogContent>
        <DialogActions>
          <StyledMainButton
            variant="contained"
            color="primary"
            onClick={onSubmit}
            disabled={!folderName}
          >
            Rename
          </StyledMainButton>
          <StyledCancelButton
            variant="outlined"
            color="primary"
            onClick={closeWithoutSubmit}
          >
            Cancel
          </StyledCancelButton>
        </DialogActions>
      </StyledDialogComponent>
    </div>
  );
}