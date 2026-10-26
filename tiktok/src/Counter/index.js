import { useReducer } from "react";
import reducer, { initState } from "./reducer";
import { setUp, setDown, setReset } from "./actions";
import logger from "./logger";

function Counter() {
  // Bạn có thể dùng logger(reducer) để theo dõi state trong console
  const [count, dispatch] = useReducer(logger(reducer), initState);

  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(setUp())}>UP</button>
      <button onClick={() => dispatch(setDown())}>DOWN</button>
      <button onClick={() => dispatch(setReset())}>RESET</button>
    </div>
  );
}

export default Counter;
