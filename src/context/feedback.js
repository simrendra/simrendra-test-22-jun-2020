import React, { useReducer, createContext } from "react";
import { getRecords, updateRecords } from "../db";
const tableName = "feedback";
const sortFn = (a, b) => a.timestamp - b.timestamp;

const initialState = (
  getRecords(tableName) || [
    { name: "Simrendra", email: "simrendra@gmail.com", rating: 5, comment: "Very good app!!", timestamp: Date.now() },
  ]
).sort(sortFn);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_FEEDBACK":
      const newState = [...state, action.feedback].sort(sortFn);

      updateRecords(tableName, newState);
      return newState;

    default:
      return state.sort(sortFn);
  }
};

export const FeedbackContext = createContext();

export const FeedbackContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <FeedbackContext.Provider value={[state, dispatch]}>{props.children}</FeedbackContext.Provider>;
};
