import React from 'react';
import { WatchItem } from "./WatchItem";
import { List } from '@material-ui/core';

export function WatchList({episodes}) {
  return (
    <List className="todo-list">
      {episodes.map(episode => {
        return <WatchItem 
        key={episode.id} 
        id={episode.id}
        title={episode.title}
        completed={episode.completed}
        />
      })}
    </List>
  );
}
