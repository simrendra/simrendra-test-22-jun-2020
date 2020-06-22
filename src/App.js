import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FeedbackForm from "./components/FeedbackForm";
import { Container, Row, Col } from "react-bootstrap";
import { FeedbackContextProvider } from "./context/feedback";
import Graph from "./components/Graph";
import Comments from "./components/comments";

function App() {
  return (
    <div className="App">
      <header className="App-header">Checkout.com Customer Feedback</header>
      <FeedbackContextProvider>
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <FeedbackForm />
            </Col>
            <Col>
              <Graph></Graph>
            </Col>
          </Row>
          <Row>
            <Col>
              <Comments></Comments>
            </Col>
            <Col>&nbsp;</Col>
          </Row>
        </Container>
      </FeedbackContextProvider>
    </div>
  );
}

export default App;
