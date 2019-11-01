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

test("should display searches", async () => {
  const { getByText } = render(
    <PlayerList url={"http://localhost:5000/api/players"} />
  );
  await waitForElement(() => getByText(/searches:/i));
});
