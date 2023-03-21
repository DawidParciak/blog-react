import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoryRedux";

const PostForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [category, setCategory] = useState(props.category || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const categories = useSelector(getAllCategories);

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    setCategoryError(!category)
    if(content && publishedDate && category){
      action({ 
        title, 
        author, 
        publishedDate, 
        category,
        shortDescription, 
        content 
      });
    };
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className="mb-3 col-lg-6" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          {...register("title", { required: true, minLength: 3 })}
          value={title}
          type="text" 
          placeholder="Enter title" 
          onChange={e => setTitle(e.target.value)} 
        />
        {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}      
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="postAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control 
          {...register("author", { required: true, minLength: 3 })}
          value={author}
          type="text" 
          placeholder="Enter author" 
          onChange={e => setAuthor(e.target.value)} 
        />
        {errors.author && <small className="d-block form-text text-danger mt-2">Author is too short (min is 3)</small>}      
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="postPublishedDate">
        <Form.Label>Published</Form.Label>
        <DatePicker
          className="form-control"
          selected={publishedDate}
          placeholderText="Enter date"
          onChange={(date) => setPublishedDate(date)} 
        />
        {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Select 
          {...register('category', {})}
          value={category} 
          onChange={e => setCategory(e.target.value)}>
            <option value="" disabled selected hidden className="text-primary">Select category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
        </Form.Select>
        {categoryError && <small className="d-block form-text text-danger mt-2">Select correct category</small>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="postShortDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control 
          {...register("shortDescription", { required: true, minLength: 20 })}
          value={shortDescription}
          as="textarea" 
          placeholder="Leave a comment here" 
          onChange={e => setShortDescription(e.target.value)} 
        />
        {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Description is too short (min is 20)</small>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="postContent">
        <Form.Label>Main content</Form.Label>
        <ReactQuill
          value={content}
          placeholder="Leave a comment here" 
          onChange={setContent}
        />
        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
      </Form.Group>
      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;
