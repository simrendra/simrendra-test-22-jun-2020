import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

export default function UserComment({ comment }) {
  return (
    <Card className="text-left m-2">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title className="font-weight-bold">{comment.name}</Card.Title>
          </Col>
          <Col>
            <Card.Subtitle className="mb-2 text-muted text-right">
              <ReactStars count={5} edit={false} value={comment.rating} size={24} color2={"#ffd700"} />
            </Card.Subtitle>
          </Col>
        </Row>

        <Card.Text className="font-italic">{comment.comment}</Card.Text>
      </Card.Body>
    </Card>
  );
}
