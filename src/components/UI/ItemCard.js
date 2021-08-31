import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card, 
  CardActionArea, 
  CardContent, 
  CardMedia, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, Collapse
} from '@material-ui/core';

import { ExpandMore, ExpandLess } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
  },
  media: {
    height: 140,
    maxWidth: 345,
    margin: 'auto'
  },
}));

const  ItemCard = ({item, type}) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    type === "short" 
    ? <Card className={classes.root}>
 
      <CardActionArea>
        {item.image && <CardMedia
          className={classes.media} 
          image={item.image} 
          title={item.name}
        />}
        <CardContent>
          {item.name && <Typography gutterBottom variant="h5" component="h2"> {item.name} </Typography>}
          {item.gender && <Typography variant="body2" color="textSecondary" component="p"> Gender: {item.gender} </Typography>}
          {item.species && <Typography variant="body2" color="textSecondary" component="p"> Species: {item.species} </Typography>}
          {item.status &&<Typography variant="body2" color="textSecondary" component="p"> Status: {item.status} </Typography>}
          {item.air_date &&<Typography variant="body2" color="textSecondary" component="p"> Air date: {item.air_date} </Typography>}
        </CardContent>
      </CardActionArea>

    </Card>
  : <Card className={classes.root}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        {item.name && <ListItem> <ListItemText primary={`Name: ${item.name}`} /> </ListItem> }
        {item.type && <ListItem> <ListItemText primary={`Type: ${item.type}`} /> </ListItem> }
        {item.dimension && <ListItem> <ListItemText primary={`Dimension: ${item.dimension}`} /> </ListItem> }

        {item.residents.length > 0 && <ListItem button onClick={handleClick}> 
          <ListItemText primary="residents" /> 
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem> }
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.residents.length > 0 
              && item.residents.map((el, index) => 
              <ListItem key={index} button className={classes.nested}>
                <ListItemText primary={el} /> 
              </ListItem>
            )}
          </List>
        </Collapse>

        {item.created && <ListItem> <ListItemText primary={`Created: ${item.created}`} /> </ListItem> }       
      </List>    
    </Card>
  );
};

export default ItemCard;
