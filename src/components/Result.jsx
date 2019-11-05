import React, { useContext, useEffect, useState } from "react";
import { Modal, Button } from "antd";
import Context from "../context";

const Result = () => {
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const { state, dispatch } = useContext(Context);
  const { playerTotal, dealerTotal, dealerTurn } = state;
  useEffect(() => {
    if (playerTotal > 21) {
      setModal(true);
      setModalMessage("Busted");
    }
    if (playerTotal === 21) {
      setModal(true);
      setModalMessage("BLACKJACK");
    }

    if (dealerTurn) {
      setTimeout(() => {
        console.log("Calculate The Result");
        console.log(dealerTotal);
        console.log(playerTotal);
        if (dealerTotal === 21) {
          setModal(true);
          setModalMessage("BLACKJACK - Dealer Won");
        }
        if (dealerTotal > 21) {
          setModal(true);
          setModalMessage("You Won - Dealer Busted");
        }
        if (dealerTotal < playerTotal && dealerTotal < 21) {
          setModal(true);
          setModalMessage("You Won ");
        }
        if (dealerTotal > playerTotal && dealerTotal < 21) {
          setModal(true);
          setModalMessage("Dealer Won ");
        }
      }, 1500);
    }
  }, [playerTotal, dealerTotal]);

  const handleOk = () => {
    setModal(false);
    dispatch({ type: "RESET_GAME" });
  };

  return (
    <Modal
      visible={modal}
      onOk={handleOk}
      okText="Reset Game"
      footer={[
        <Button key="submit" type="primary" onClick={handleOk}>
          Reset Game
        </Button>
      ]}
    >
      <h1>{modalMessage}</h1>
    </Modal>
  );
};

export default Result;
