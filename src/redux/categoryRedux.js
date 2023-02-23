//selectors
export const getAllCategories = state => state.categories;
export const getPostByCategory = ({ posts }, category) =>
  posts.filter(post => post.category === category);

// action creators
const categoryReducer = (statePart = [], action) => {
  switch(action.type) {
    default:
    return statePart;
  };
};

export default categoryReducer;
