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

  return (
    <Container className="px-0">
      <div>
        <h2>Category: {category}</h2>
      </div>
      <Row  className="py-4">
        {postByCategory.map(post => (
          <PostSingle  key={post.id} {...post} />
        ))}
      </Row>
    </Container>
  );
};

export default Category;
