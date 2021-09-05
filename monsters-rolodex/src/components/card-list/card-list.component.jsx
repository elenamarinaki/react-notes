import React from 'react';
import './card-list.styles.css';

export const CardList = (props) => {
  // return <div className='card-list'>{props.children}</div>;
  // now, it's not 'this.state' but 'props.'
  return (
    <div className='card-list'>
      {props.monsters.map((monster) => (
        <h1 key={monster.id}>{monster.name}</h1>
      ))}
    </div>
  );
};
