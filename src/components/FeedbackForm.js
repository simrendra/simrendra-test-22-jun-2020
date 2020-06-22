import React, { useContext } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { saveFeedbackForm } from "../actions";
import { FeedbackContext } from "../context/feedback";
import { useFormInput } from "../hooks";
import ReactStars from "react-rating-stars-component";

export default function () {
  const name = useFormInput("");
  const email = useFormInput("");
  const rating = useFormInput("");
  const comment = useFormInput("");

  const [state, dispatch] = useContext(FeedbackContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!rating.value) {
      rating.setError(true);
      return;
    }

    dispatch(saveFeedbackForm(buildFeedbackPayload()));
    // Reset Form
    name.onReset();
    email.onReset();
    rating.onReset();
    comment.onReset();
  };

  const buildFeedbackPayload = () => {
    return {
      name: name.value,
      email: email.value,
      rating: rating.value,
      comment: comment.value,
      timestamp: Date.now(),
    };
  };

  return (
    <Form className="my-3" onSubmit={onSubmit}>
      <Form.Group controlId="name">
        <Form.Control type="text" placeholder="Enter name" {...name} seterror="" required />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Control type="email" placeholder="Enter email" {...email} seterror="" required />
      </Form.Group>

      <Form.Group controlId="rating">
        <ReactStars count={5} value={Number(rating.value)} onChange={rating.onChange} size={24} color2={"#ffd700"} />
        {rating.error && <Alert variant={"danger"}>Please select rating</Alert>}
      </Form.Group>

      <Form.Group controlId="comments">
        <Form.Control as="textarea" placeholder="Enter comments" rows="5" {...comment} seterror="" />
      </Form.Group>

      <div className="text-right">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}
