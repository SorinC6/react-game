import React, { useEffect } from "react";
import styled from "styled-components";
import Flip from "react-reveal/Flip";
const Card = ({ data }) => {
  //console.log(data.value);
  //setTotalPoints(Number(data.value));
  useEffect(() => {}, []);
  return (
    <Root>
      <Flip left>
        <img src={data.image} alt="cardimage" />
      </Flip>
    </Root>
  );
};

export default Card;

const Root = styled.div`
  margin-top: 20px;
  /* border: 1px solid black; */

  img {
    width: 160px;
  }
`;
