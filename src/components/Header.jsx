import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Root>
      <h1>Blackjack ** Code Challenge ** </h1>
      <a href="https://www.woopcode.com" target="_blank">
        build by www.woopcode.com
      </a>
    </Root>
  );
};

export default Header;

const Root = styled.div`
  width: 100%;
  height: 60px;
  background-color: darkred;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  h1 {
    color: white;
  }
  p {
    position: absolute;
    left: 0;
  }
`;
