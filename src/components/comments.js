import React, { useContext } from "react";
import { FeedbackContext } from "../context/feedback";
import UserComment from "./user-comment";

export default function () {
  const [state] = useContext(FeedbackContext);

  return state.map((feedback, i) => <UserComment key={i} comment={feedback}></UserComment>);
}
