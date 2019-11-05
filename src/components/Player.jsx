import React, { useContext, useState } from "react";
import Context from "../context";
import Buttons from "./Buttons";
import PlayerList from "./PlayerList";
import axios from "axios";
import { transform } from "../util/stringToNumber";

const Player = ({ points }) => {
  const { state, dispatch } = useContext(Context);
  const handleHit = () => {
    dispatch({ type: "START_LOADING" });
    axios
      .get(`https://deckofcardsapi.com/api/deck/${state.deckId}/draw/?count=1`)
      .then(res => {
        dispatch({ type: "ADD_PLAYER_CARD", payload: res.data.cards[0] });
        dispatch({
          type: "ADD_PLAYER_POINTS",
          payload: transform(res.data.cards[0].value, state.playerTotal)
        });
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        dispatch({ type: "STOP_LOADING" });
      });
  };

  const handleStand = () => {
    dispatch({ type: "DEALER_TURN", payload: true });
  };
  const resetGame = () => {
    dispatch({ type: "RESET_GAME" });
  };
  return (
    <div>
      <h1>Your Score is: {points}</h1>
      <Buttons
        handleHit={handleHit}
        handleStand={handleStand}
        loading={state.loading}
        buttonDisable={state.disable}
        resetGame={resetGame}
      />
      <PlayerList />
    </div>
  );
};

export default Player;
