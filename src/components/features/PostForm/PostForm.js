import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const PostForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({ 
      title, 
      author, 
      publishedDate, 
      shortDescription, 
      content 
    });
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
        {actionText}
      </Button>
    </Form>

  );
};

export default PostForm;
