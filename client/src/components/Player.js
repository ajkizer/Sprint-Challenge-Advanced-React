import React from "react";

const Player = props => {
  return (
    <div className="card">
      <h3 data-testid="player-name">{props.player.name}</h3>
      <p data-testid="player-country">Country: {props.player.country}</p>
      <p data-testid="player-searches">Searches: {props.player.searches}</p>
      <p data-testid="player-rank">Search Rank: {props.player.id + 1}</p>
    </div>
  );
};

export default Player;
