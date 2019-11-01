import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import PlayerList from "./components/PlayerList";
import Player from "./components/Player";
import axiosMock from "axios";

test("App component renders without crashing", () => {
  render(<App />);
});

test("PlayerList component renders without crashing", () => {
  render(<PlayerList />);
});

test("should display player name", () => {
  const playerInfo = {
    name: "test"
  };
  const playerCard = render(<Player player={playerInfo} />);
  playerCard.getByText(/test/);
});

test("Should display number of searches", () => {
  const playerInfo = {
    searches: 100
  };
  const playerCard = render(<Player player={playerInfo} />);
  playerCard.getByText(/Searches: 100/);
});

test("Should display player's country", () => {
  const playerInfo = {
    country: "USA"
  };
  const playerCard = render(<Player player={playerInfo} />);
  playerCard.getByText(/Country: USA/);
});

test("Should display player's search rank", () => {
  const playerInfo = {
    rank: 1
  };
  const playerCard = render(<Player player={playerInfo} />);
  playerCard.getByText(/Search Rank:/);
});
