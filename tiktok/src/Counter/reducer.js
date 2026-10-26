import { UP_ACTION, DOWN_ACTION, RESET_ACTION } from "./constants";

// 1. Init state
export const initState = 0;

// 2. Reducer function
const reducer = (state, action) => {
  // Hỗ trợ cả action dạng string ("up") hoặc object ({ type: "up" })
  const actionType =
    typeof action === "object" && action !== null ? action.type : action;

  switch (actionType) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    case RESET_ACTION:
      return initState;
    default:
      throw new Error("Invalid action");
  }
};

export default reducer;
