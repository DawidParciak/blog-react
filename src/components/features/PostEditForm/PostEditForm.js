import { useDispatch } from "react-redux";
import { editPost, getPostById } from "../../../redux/postsRedux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import PostForm from "../PostForm/PostForm";
import { useSelector } from "react-redux";

const PostEditForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const post = useSelector(state => getPostById(state, id));

  const handleSubmit = post => {
    dispatch(editPost({ ...post, id }));
    navigate('/')
  };

  if (!post) return <Navigate to={'/'} />
  else return (
    <PostForm 
      action={handleSubmit} 
      actionText="Edit post"
      title={post.title}
      author={post.author}
      publishedDate={post.publishedDate}
      shortDescription={post.shortDescription}
      content={post.content}
    />
  );
};

export default PostEditForm;
