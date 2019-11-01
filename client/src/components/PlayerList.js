import React, { Component } from "react";
import axios from "axios";
import Player from "./Player";

class PlayerList extends Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({ players: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="player-list">
        {this.state.players.map(player => {
          return <Player player={player} key={player.id} />;
        })}
      </div>
    );
  }
}

export default PlayerList;
