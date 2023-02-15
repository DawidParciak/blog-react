import moment from "moment";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostSingle = props => {

  const date = moment(props.publishedDate).format("DD-MM-YYYY");

  return (
    <Col lg='4' md='6' xs='12' className="pb-4">
      <Card>
        <Card.Body>

          <Card.Title>
            {props.title}
          </Card.Title>

          <Card.Subtitle className="py-1 fw-bold">
            Author: <span className="fw-normal">{props.author}</span>
          </Card.Subtitle>

          <Card.Subtitle className="py-1 fw-bold">
            Published: <span className="fw-normal">{date}</span>
          </Card.Subtitle>

          <Card.Text className="pt-3">
            {props.shortDescription}
          </Card.Text>

          <Link key={props.id} to={'post/' + props.id}>
            <Button variant="primary">
              Read more
            </Button>
          </Link>
          
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PostSingle;
