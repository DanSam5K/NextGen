import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import Index from "./tutorial/useReducer/index";

import ErrorExample from "./tutorial/useState/errorExample";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? (
        <h3>Valuable Information available becuase you are authorized</h3>
      ) : (
        "Sorry, you're not logged in."
      )}

      {/* <Index /> */}
      <ErrorExample />
    </div>
  );
}

export default App;
