import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import PostSingle from "../PostSingle/PostSingle";

const PostContainer = () => {

  const posts = useSelector(getAllPosts);

  return (
    <Container className="px-0 py-4">
      <Row>
        {posts.map( post => (
          <PostSingle key={post.id} {...post}/>
        ))}
      </Row>
    </Container>
  );
};

export default PostContainer;
