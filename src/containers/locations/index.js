import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { getLocations } from './locationsSlice';
import ItemCard from '../../components/UI/ItemCard';
import PaginationControlled from '../../components/UI/PaginationControlled';
import { TextField, Grid } from '@material-ui/core';
import { useDebounce} from '../../hooks/useDebounce';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    location: {
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
 
const Locations = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const data = useSelector(state => state.locations);
    const countPages = data?.locations?.info?.pages;
    const locations = data?.locations?.results;
    const [page, setPage] = useState(1);
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [dimension, setDimension] = useState('');
    
 
    const handleName = (event) => {
      setName(event.target.value);
    };
    const handleType = (event) => {
      setType(event.target.value);
    };
    const handleDimension = (event) => {
      setDimension(event.target.value);
    };

    const debouncedName = useDebounce(name, 500);
    const debouncedType = useDebounce(type, 500);
    const debouncedDimention = useDebounce(dimension, 500);

    useEffect(() => {
      dispatch(getLocations({page, debouncedName, debouncedType, debouncedDimention}));
    }, [dispatch, page, debouncedName, debouncedType, debouncedDimention])
  
    return(
        <div className={classes.root}>
          <div className={classes.filters}>
              <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={handleName}/>
              <TextField id="outlined-basic" label="Type" variant="outlined" value={type} onChange={handleType}/>
              <TextField id="outlined-basic" label="Dimension" variant="outlined" value={dimension} onChange={handleDimension}/>
          </div>
          <Grid container>
            {locations && locations.map((location)=>{
              return  <Grid item xs={11} sm={6} 
                          className={classes.location}
                          key={location.id} 
                      >
                        <ItemCard 
                            key={location.id}
                            item={location}
                        /> 
                      </Grid>
            })}
          </Grid>
          <PaginationControlled countPages={countPages} page={page} setPage={setPage}/>
      </div>
    )
};
export default Locations; 