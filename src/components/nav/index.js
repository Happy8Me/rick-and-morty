import React from 'react';
import { withRouter } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { 
    useMediaQuery, 
    Menu, 
    MenuItem, 
    IconButton, 
    Typography, 
    Toolbar, 
    AppBar, 
    Tab,
    makeStyles, 
    useTheme }from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
      [theme.breakpoints.down("sm")] : {flexGrow: 1}
  },
  flex: {
    display: "flex",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mobile: {
    flex: 1
  }
}));

const Nav = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (page) => {
    history.push(page);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.flex}>          
            <div className={classes.mobile}>
              
              {isMobile 
              ? (
              <div className={classes.flex}>
                <Typography variant="h6" className={classes.title}>
                    RICK AND MORTY
                </Typography>
                <IconButton 
                    edge="start" 
                    className={classes.menuButton} 
                    color="inherit" 
                    aria-label="menu"
                    onClick={handleMenu}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                >
                    <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/characters')}>Characters</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/episodes')}>Episodes</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/locations')}>Locations</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/my-watch-list')}>My Watch List</MenuItem>
                </Menu>
              </div>
            ) : (
            <div>
                <Tab label="Home" onClick={() => handleMenuClick('/')}/>
                <Tab label="Characters" onClick={() => handleMenuClick('/characters')}/>
                <Tab label="Episodes" onClick={() => handleMenuClick('/episodes')}/>
                <Tab label="Locations" onClick={() => handleMenuClick('/locations')}/>
                <Tab label="My Watch List" onClick={() => handleMenuClick('/my-watch-list')}/> 
            </div>
              )
              }
            </div>
        
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Nav);
