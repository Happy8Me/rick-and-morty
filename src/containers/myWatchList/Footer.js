import { useSelector, useDispatch } from 'react-redux';
import { clearAllCompletedEpisodes } from './myWatchListSlice';
import { FilteredItem } from './FilteredItem';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: "baseline",
  }
}));

const FilterConfig = [
  {
    title: "All", 
    id: "all"
  },
  {
    title: "Active",
    id: "active"
  },
  {
    title: "Completed",
    id: "completed"
  }
]
export function Footer ({updateFilter}) {
  const classes = useStyles();
  const activeEpisodesCount = useSelector((state) => {
    return state.myWatchList.filter(episode => episode.completed === false).length
  });

  const dispatch = useDispatch();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" display="block" gutterBottom>
        { activeEpisodesCount } items left
      </Typography>
      <div >
        {FilterConfig.map(filterItem => (
          <FilteredItem 
            key={filterItem.id}
            item={filterItem}
            updateFilter={updateFilter}
          />
        ))}
      </div>
      { 
        <Button 
          className="clear-completed"
          onClick={(e) => {
            e.preventDefault();
            dispatch(clearAllCompletedEpisodes())
          }}  
        >
        Clear completed</Button> }
    </footer>
  )
};
