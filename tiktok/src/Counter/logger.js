function logger(reducer) {
  return (prevState, action) => {
    console.group(
      typeof action === "object" && action !== null && action.type
        ? action.type
        : action
    );
    console.log("Prev state:", prevState);
    console.log("Action:", action);

    const nextState = reducer(prevState, action);

    console.log("Next state:", nextState);
    console.groupEnd();

    return nextState;
  };
}

export default logger;
