import { Button } from '@material-ui/core';

export const FilteredItem = ( {item, updateFilter} ) => {
    return (
        <Button
            color="primary"
            onClick={(e) => {
              e.preventDefault();
              updateFilter(item.id)
            }}
          >
            {item.title}
        </Button>
    )
};