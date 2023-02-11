import { Col, Row, Card, Button, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { getPostById } from "../../../redux/postsRedux";

const Post = () => {

  const { id } = useParams();

  const postData = useSelector((state) => getPostById(state, id));

  if(!postData) return <Navigate to="/" />

  return (
    <section>
      <Row className="justify-content-center">
        <Col xs='12' lg='7'>
          <Card className="border-0">
            <Card.Body className="pb-0">
              <Stack direction="horizontal" gap={3}>
                <Card.Title>
                  <h2>{postData.title}</h2>
                </Card.Title>

                <Link to={`/post/edit/${postData.id}`} className="ms-auto">
                  <Button variant="outline-info">
                    Edit
                  </Button>
                </Link>

                <Button variant="outline-danger">
                  Delete
                </Button>
              </Stack>
            </Card.Body>

            <Card.Body>
              <Card.Subtitle className="fw-bold">
                Author: <span className="fw-normal">{postData.author}</span>
              </Card.Subtitle>

              <Card.Subtitle className="pt-2 fw-bold">
                Published: <span className="fw-normal">{postData.publishedDate}</span>
              </Card.Subtitle>

              <Card.Text className="pt-4">
                {postData.content}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};
  
export default Post;
