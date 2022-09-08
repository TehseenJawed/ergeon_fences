import  React, {useState} from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { CURRENTSNAKE } from '../redux/reducer/CalendarStore';
import { useSelector } from 'react-redux';
import { CurrentSnake } from '../typeCasting/expectedModels/CurrentSnake';
export interface State extends SnackbarOrigin {
  open: boolean;
}

export default function PositionedSnackbar() {
  // const state = useSelector(CURRENTSNAKE)
  // const { vertical, horizontal, open } = state<CurrentSnake>;
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;
  

  const handleClose = () => {
    // setState({ ...state, open: false });
  };


  return <Snackbar
  anchorOrigin={{ vertical, horizontal }}
  open={open}
  onClose={handleClose}
  message="I love snacks"
  key={vertical + horizontal}
/>
}
