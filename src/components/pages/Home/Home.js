import PostContainer from "../../features/PostContainer/PostContainer";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <section>
      <div className="d-sm-flex justify-content-sm-between">
        <h2>All posts</h2>
        <Link to='post/add'>
          <Button variant="outline-info">
            Add post
          </Button>
        </Link>
      </div>
      <PostContainer />
    </section>
  );
};

export default Home;
