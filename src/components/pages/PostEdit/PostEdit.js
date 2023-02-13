import { Row, Col, Card } from "react-bootstrap";
import PostEditForm from "../../features/PostEditForm/PostEditForm";

const PostEdit = () => {
  return (
    <section>
      <Row className="justify-content-center">
        <Col xs='12' lg='7'>
          <Card className="border-0">
            <Card.Body>
              <Card.Title className="mb-4">
                <h2>Edit post</h2>
              </Card.Title>
              <PostEditForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default PostEdit;
