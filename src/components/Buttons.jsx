import React from "react";
import styled from "styled-components";

const Buttons = ({
  handleHit,
  handleStand,
  loading,
  buttonDisable,
  resetGame
}) => {
  return (
    <Root>
      <button onClick={handleHit} disabled={buttonDisable}>
        Hit
      </button>
      <button onClick={handleStand}>Stand</button>
      <button onClick={resetGame}>Reset Game</button>
      {loading && <p>Loading Card</p>}
    </Root>
  );
};

export default Buttons;

const Root = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  align-items: baseline;

  button {
    padding: 10px;
    background: black;
    color: white;
    margin: 0 10px;

    &:disabled {
      background: red;
      color: black;
    }
  }

  p {
    margin: 0;
  }
`;
