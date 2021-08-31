import { useDispatch } from 'react-redux';
import { toggleEpisode, deleteEpisode } from './myWatchListSlice';
import { ListItem, Button, Checkbox, Typography } from '@material-ui/core';

export function WatchItem({ title, id, completed }) {
  const dispatch = useDispatch();

  const handleToggleEpisode = () => {
    dispatch( toggleEpisode( {id: id, completed: !completed} ) );
  }

  const handleDeleteEpisode = () => {
    dispatch( deleteEpisode( {id} ) )
  }

  return (
    <ListItem>
      <Checkbox
        onChange={handleToggleEpisode}
        checked={completed}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
        <Typography>{title}</Typography>
        <Button 
          color="secondary"
          type="button" 
          onClick={handleDeleteEpisode}>
            X
        </Button>
    </ListItem>
  );
}
