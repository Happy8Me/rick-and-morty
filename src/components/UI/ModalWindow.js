import React from 'react';
import { useState, useEffect } from 'react';
import { 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent,  
  Avatar, 
  DialogTitle,
  List,
  ListItem,
  ListItemText
}  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: 'auto'
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const ModalWindow = ({open, setOpen, item }) => {
  const classes = useStyles();
  const [show, setShow] = useState([]);

  const getToShow = () => {
    if (!item) return; 
    let tempShow=[];

    for (const [key, value] of Object.entries(item)) {

      if (Array.isArray(value)) {
        tempShow.push(`${key}`)
        value.map((val)=>{
          if (typeof val !== 'object' && val !== null) {
            tempShow.push(val)
          }
          return tempShow
        }) 
      } else if (typeof value === 'object') {
        tempShow.push(`${key}`)
        for (let key in value) {        
          tempShow.push(`${key}: ${value[key]}`)
        }
      } else {
        tempShow.push(`${key}: ${value}`)
      }
    }
    return tempShow
  }

  useEffect(()=> {
    let resultToShow = getToShow();
    setShow(resultToShow)
  },[item])

  const toShow = item 
  ? (
    <div>
      <Dialog
        open={open}
        onClose={() =>  setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Close
          </Button>
        </DialogActions>
        {item.image && <Avatar alt="Remy Sharp" src={item.image} className={classes.large} />}
        <DialogTitle id="alert-dialog-title">{item.name}</DialogTitle>
        <DialogContent>

          <List component="nav" className={classes.list}>
            {show && (show.map((el, index) => {
              return (
                <ListItem key={index}>
                  <ListItemText secondary={el} />
                </ListItem>
              )
            }))}
          </List>

        </DialogContent>
      </Dialog>
    </div>
  ) 
  : '';

  return toShow
};

export default ModalWindow;



