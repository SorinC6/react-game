import React, { useContext } from "react";
import styled from "styled-components";
import Card from "./common/Card";
import Context from "../context";

const PlayerList = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <Root>
      {state.playerCards.length > 0 &&
        state.playerCards.map(card => <Card data={card} key={card.image} />)}
    </Root>
  );
};

export default PlayerList;

const Root = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
`;
