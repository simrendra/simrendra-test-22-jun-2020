import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders application", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Checkout.com/i);
  expect(linkElement).toBeInTheDocument();
});
