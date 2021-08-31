import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { getEpisodes } from './episodesSlice';
import ItemCard from '../../components/UI/ItemCard';
import ModalWindow from '../../components/UI/ModalWindow';
import PaginationControlled from '../../components/UI/PaginationControlled';
import { TextField, Grid } from '@material-ui/core';
import { useDebounce} from '../../hooks/useDebounce';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    episode: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: '100%'
      },
      filters: {
        display: 'flex',
        alignItems: 'center',
        margin: 15
    }
  }));

const Episodes = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const data = useSelector(state => state.episodes);
    const countPages = data?.episodes?.info?.pages;
    const episodes = data?.episodes?.results;

    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [episodeModal, setEpisodeModal] = useState();
    const [name, setName] = useState('');
   
    const handleName = (event) => {
        setName(event.target.value);
      };

    const debouncedName = useDebounce(name, 500);

    useEffect(() => {
        dispatch(getEpisodes({page, debouncedName}));
    }, [dispatch, page, debouncedName])
    
    return(
        <div className={classes.root}>
        
            <div className={classes.filters}>               
                <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={handleName}/>
            </div>

            <Grid container>
                {episodes && episodes.map((episode)=>{
                    return <Grid item xs={11} sm={6} className={classes.episode}
                                onClick={() => {
                                    setEpisodeModal(episode)
                                    setOpen(true)
                                }} 
                                key={episode.id} 
                            >
                                <ItemCard 
                                    key={episode.id}
                                    item={episode}
                                    type="short"
                                /> 
                            </Grid>
                })}
              </Grid>

            <PaginationControlled countPages={countPages} page={page} setPage={setPage}/>

            <ModalWindow 
                open={open} 
                setOpen={setOpen}
                item={episodeModal}
            />
        </div>
    )
};
export default Episodes; 