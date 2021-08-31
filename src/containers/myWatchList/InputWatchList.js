import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEpisode } from './myWatchListSlice';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  newItem: {
    width: '85%',
    margin: '30px 0'
  }
}));

export function InputWatchList() {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  return (

    <TextField
      label="Watch next?"
      className={classes.newItem}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => {
        if(e.key === "Enter") {
          if(e.target.value.trim()){
            dispatch(addEpisode({
              title: value,
            }))
          }
          setValue("");
        }
    }} 
    />
  );
}
