import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsRedux";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

const PostAddForm = props => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const convertedDate = moment(publishedDate).format("DD-MM-YYYY");

  const dispatch = useDispatch();
  const postId = props.id
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost({
      title,
      author,
      publishedDate: convertedDate,
      shortDescription,
      content,
      postId,
    }));
    navigate('/')
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 col-lg-6" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          value={title}
          type="text" 
          placeholder="Enter title" 
          onChange={e => setTitle(e.target.value)} 
        />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="postAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control 
          value={author}
          type="text" 
          placeholder="Enter author" 
          onChange={e => setAuthor(e.target.value)} 
        />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="postPublishedDate">
        <Form.Label>Published</Form.Label>
        <Form.Control 
          value={publishedDate}
          type="date"
          placeholder="Enter date" 
          onChange={e => setPublishedDate(e.target.value)} 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="postShortDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control 
          value={shortDescription}
          as="textarea" 
          placeholder="Leave a comment here" 
          onChange={e => setShortDescription(e.target.value)} 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="postContent">
        <Form.Label>Main content</Form.Label>
        <Form.Control 
          value={content}
          as="textarea" 
          placeholder="Leave a comment here" 
          rows="6" 
          onChange={e => setContent(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add post
      </Button>
    </Form>
  );
};

export default PostAddForm;
