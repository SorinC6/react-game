import React, { useEffect, useContext } from "react";
import Context from "./../context";
import axios from "axios";
import { transform } from "../util/stringToNumber";
import DealerList from "./DealerList";

const Dealer = () => {
  const { state, dispatch } = useContext(Context);
  const { dealerTurn, playerCards } = state;

  useEffect(() => {
    console.log(playerCards.length);
    //it will fetch as many card as the player - not ideal
    for (let i = 0; i < playerCards.length; i++) {
      initFirstCard();
    }
  }, [dealerTurn]);

  useEffect(() => {}, [state.playerCards.length]);

  const initFirstCard = () => {
    dispatch({ type: "START_LOADING" });
    axios
      .get(`https://deckofcardsapi.com/api/deck/${state.deckId}/draw/?count=1`)
      .then(res => {
        dispatch({ type: "ADD_DEALER_CARD", payload: res.data.cards[0] });
        dispatch({
          type: "ADD_DEALER_POINTS",
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

  return (
    <div>
      {state.dealerTurn && (
        <div>
          <h1>Dealer Score is: {state.dealerTotal}</h1>
          <DealerList />
        </div>
      )}
    </div>
  );
};

export default Dealer;
