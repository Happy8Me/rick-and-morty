import { useDispatch } from 'react-redux';
import { toggleAllEpisodes } from './myWatchListSlice';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox } from '@material-ui/core';

const useStyles = makeStyles({
  toggleAll: {
    width: '100%',
    textAlign: 'left',
    fontStyle: 'italic'
  }
});

export function ToggleWatched({ isAllCompleted }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.toggleAll}>
      <Checkbox
        onChange={(e) => dispatch(toggleAllEpisodes())}
        checked={isAllCompleted}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <label htmlFor="toggle-all">Mark all as complete</label> 
    </div>
  );
}
