import PostAddForm from "../../features/PostAddForm/PostAddForm";
import { Row, Col, Card } from "react-bootstrap";

const PostAdd = () => {
  return (
    <section>
      <Row className="justify-content-center">
        <Col xs='12' lg='7'>
          <Card className="border-0">
            <Card.Body>
              <Card.Title className="mb-4">
                <h2>Add post</h2>
              </Card.Title>
              <PostAddForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default PostAdd;
