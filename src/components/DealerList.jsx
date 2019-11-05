import React, { useContext } from "react";
import styled from "styled-components";
import Card from "./common/Card";
import Context from "../context";

const DealerList = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <Root>
      {state.dealerCards.length > 0 &&
        state.dealerCards.map(card => <Card data={card} key={card.image} />)}
    </Root>
  );
};

export default DealerList;

const Root = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
`;
