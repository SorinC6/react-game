import { createContext } from "react";

const context = createContext({
  deckId: "new",
  totalScore: 0,
  playerCards: [],
  playerTotal: 0,
  dealerCards: [],
  dealerTotal: 0,
  loading: false,
  bust: false,
  win: false,
  dealerTurn: false,
  disable: false
});

export default context;
