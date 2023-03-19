import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import { getPostByCategory } from "../../../redux/categoryRedux";
import PostSingle from "../../features/PostSingle/PostSingle";

const Category = () => {

  const { category } = useParams();
  const postByCategory = useSelector(state =>
    getPostByCategory(state, category)
  );
  const emptyPosts = postByCategory.length === 0;
  

  return (
    <Container className="px-0">
      <div>
        <h2>Category: {category}</h2>
      </div>
      {!emptyPosts &&
        <Row  className="py-4">
          {postByCategory.map(post => (
            <PostSingle  key={post.id} {...post} />
          ))}
        </Row>
      }
      {emptyPosts &&
        <div className="py-4">
          <h5>No posts in this category</h5>
        </div>
      }
    </Container>
  );
};

export default Category;
