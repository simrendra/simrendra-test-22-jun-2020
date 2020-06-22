import React, { useContext } from "react";
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
import { FeedbackContext } from "../context/feedback";
export default function () {
  const [state] = useContext(FeedbackContext);

  return (
    <LineChart width={600} height={300} data={state.reverse()}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line dataKey="rating" fill="#8884d8" />
    </LineChart>
  );
}
