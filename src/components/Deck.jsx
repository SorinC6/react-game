import React, { useEffect, useContext } from "react";
import axios from "axios";
import Context from "../context";
import styled from "styled-components";
import { transform } from "../util/stringToNumber";
import Result from "./Result";
import Player from "./Player";
import Dealer from "./Dealer";
import Svg from "../util/svgBackground";

const Deck = () => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    initFirstCard();
  }, []);

  const initFirstCard = () => {
    dispatch({ type: "START_LOADING" });
    axios
      .get(`https://deckofcardsapi.com/api/deck/${state.deckId}/draw/`)
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

  return (
    <Root>
      <Svg />
      <Player points={state.playerTotal} />
      <Dealer />
      <Result />
    </Root>
  );
};

export default Deck;

const Root = styled.div`
  svg {
    position: absolute;
    opacity: 0.1;

    right: 20%;
  }
`;
