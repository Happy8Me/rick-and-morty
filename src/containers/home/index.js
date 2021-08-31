import { makeStyles, Typography, Paper } from '@material-ui/core';
import img from '../../assets/rick-morty.jpg';

const useStyles = makeStyles((theme) => ({
    img: {
      width: '100%',
    },    
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: '#ebdeb4'
    },
    paper: {
        width: '80%',
        margin: '50px',
        padding: '20px',
        color: '#72346f',
        backgroundColor: '#faf8da'
    }
  }));

const Home = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <img src={img} alt="cover img" className={classes.img}/>
            <Paper  elevation={5} className={classes.paper}>
            <Typography variant="h6" className={classes.title}>
                “Nobody exists on purpose. Nobody belongs anywhere. We’re all going to die. Come watch TV.” — Morty
            </Typography>
            </Paper>
        </div>
    )
}

export default Home;