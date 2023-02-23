import {  useParams } from "react-router-dom";

const Category = () => {

  const { category } = useParams();

  return (
    <div>
      <h2>Category: {category}</h2>
    </div>
  );
};

export default Category;
