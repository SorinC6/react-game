export default function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_POINTS":
      return {
        ...state,
        totalScore: state.totalScore + payload
      };
    case "ADD_PLAYER_CARD":
      return {
        ...state,
        playerCards: [...state.playerCards, payload]
      };
    case "ADD_PLAYER_POINTS":
      return {
        ...state,
        playerTotal: state.playerTotal + payload
      };
    case "ADD_DEALER_CARD":
      return {
        ...state,
        dealerCards: [...state.dealerCards, payload]
      };
    case "ADD_DEALER_POINTS":
      return {
        ...state,
        dealerTotal: state.dealerTotal + payload
      };
    case "BUST":
      return {
        ...state,
        bust: true
      };
    case "WIN":
      return {
        ...state,
        win: true
      };
    case "RESET_GAME":
      return {
        ...state,
        playerCards: [],
        playerTotal: 0,
        dealerCards: [],
        dealerTotal: 0,
        bust: false,
        win: false,
        dealerTurn: false,
        disable: false
      };
    case "STOP_LOADING":
      return {
        ...state,
        loading: false
      };
    case "START_LOADING":
      return {
        ...state,
        loading: true
      };
    case "DEALER_TURN":
      return {
        ...state,
        dealerTurn: true,
        disable: true
      };
    default:
      return state;
  }
}
