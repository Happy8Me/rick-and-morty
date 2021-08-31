import { useState } from 'react';
import { useSelector } from 'react-redux';
import { InputWatchList } from './InputWatchList';
import { WatchList } from './WatchList';
import { Footer } from './Footer';
import { ToggleWatched } from './ToggleWatched';
import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {marginTop: '50px',}
});
 
const MyWatchList = () => {
  const classes = useStyles();
  const [filter, setFilter] = useState("all");
  const episodes = useSelector(state => state.myWatchList)
  const isAllCompleted = (episodes.filter(episode => episode.completed).length === episodes.length)

  const updateFilter = (filterValue) => {
    setFilter(filterValue)
  }

  const filteredEpisodes = episodes.filter(episode => {
    switch(filter) {
      case "active":
        return !episode.completed;
      case "completed":
        return episode.completed === true;
      case "all":
        return episode;
      default: 
        return episode;
    }
  })

  return (
    <Container component='div' maxWidth="sm" className={classes.root}>
      <Typography gutterBottom variant="h3" component="h2"> My Watch List </Typography>
      <InputWatchList />
      <WatchList episodes={filteredEpisodes}/>
      {episodes.length > 0 && (<ToggleWatched isAllCompleted={isAllCompleted}/>)}  
      {episodes.length > 0 && (<Footer updateFilter={updateFilter} />)} 
    </Container >
  );
};

export default MyWatchList; 
