import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { getCharactes } from './charactersSlice';
import ItemCard from '../../components/UI/ItemCard';
import ModalWindow from '../../components/UI/ModalWindow';
import PaginationControlled from '../../components/UI/PaginationControlled';
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@material-ui/core';
import { useDebounce} from '../../hooks/useDebounce';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    container: {
        width: '90%'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      filters: {
          display: 'flex',
          alignItems: 'center',
          margin: 15
      }
  }));

const Characters = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const data = useSelector(state => state.characters);
    const countPages = data?.characters?.info?.pages;
    const characters = data?.characters?.results;
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [characterModal, setCharacterModal] = useState();
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');
    const [species, setSpecies] = useState('');
    const debouncedSpecies = useDebounce(species, 500);

    const handleStatus = (event) => {
      setStatus(event.target.value);
    };

    const handleGender = (event) => {
        setGender(event.target.value);
    };
    const handleSpecies = (event) => {
        setSpecies(event.target.value);
    };

    useEffect(() => {
        dispatch(getCharactes({page, status, gender, debouncedSpecies}));
    }, [dispatch, page, status, gender, debouncedSpecies])
    
    return(
        <div className={classes.root}>
            <div className={classes.filters}>                
                <TextField id="outlined-basic" label="Species" variant="outlined" value={species} onChange={handleSpecies}/>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={status}
                    onChange={handleStatus}
                    label="status"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="alive">Alive</MenuItem>
                    <MenuItem value="dead">Dead</MenuItem>
                    <MenuItem value="unknown">Unknown</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={gender}
                    onChange={handleGender}
                    label="gender"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="genderless">Genderless</MenuItem>
                    <MenuItem value="unknown">Unknown</MenuItem>
                    </Select>
                </FormControl>
            </div>

            {characters && characters.map((character)=>{
                return <div className={classes.container}
                            onClick={() => {
                                setCharacterModal(character)
                                setOpen(true)
                            }} 
                            key={character.id} 
                        >
                            <ItemCard 
                                key={character.id}
                                item={character}
                                type="short"
                            /> 
                        </div>
            })}
            <PaginationControlled countPages={countPages} page={page} setPage={setPage}/>
            <ModalWindow 
                open={open} 
                setOpen={setOpen}
                item={characterModal}
            />
        </div>
    )
};
export default Characters; 