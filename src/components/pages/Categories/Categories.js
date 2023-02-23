import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../../redux/categoryRedux";

const Categories = props => {

  const allCategories = useSelector(getAllCategories);

  return (
    <Container>
      <Row xs={1} className="">
        {allCategories.map( category => (
          <Col className="px-0 pb-1">
            <Card>
              <Link to={`/categories/${category}`} className="text-decoration-none">
                <Card.Body className="text-center text-uppercase fs-2 text-muted" key={props.id}>
                  {category}
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
