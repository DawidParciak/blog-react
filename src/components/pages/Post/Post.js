import moment from "moment";
import { useState } from "react";
import { Col, Row, Card, Button, Stack, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { getPostById, removePost } from "../../../redux/postsRedux";

const Post = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const postData = useSelector((state) => getPostById(state, id));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleRemove = e => {
    e.preventDefault();
    dispatch(removePost(id));
    handleClose();
  };

  if(!postData) return <Navigate to='/' />
  else return (
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
                <Button variant="outline-danger" onClick={handleShow}>
                  Delete
                </Button>
              </Stack>
            </Card.Body>
            <Card.Body>
              <Card.Subtitle className="fw-bold">
                Author: <span className="fw-normal">{postData.author}</span>
              </Card.Subtitle>
              <Card.Subtitle className="pt-2 fw-bold">
                Published: <span className="fw-normal">{ moment(postData.publishedDate).format("DD-MM-YYYY") }</span>
              </Card.Subtitle>
              <Card.Text className="pt-4">
                {postData.content}
              </Card.Text>
            </Card.Body>
          </Card>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              This operation will completely remove this post from the app.<br/>
              Are you sure you want to do that?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="danger" onClick={handleRemove}>
                Remove
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </section>
  );
};
  
export default Post;
