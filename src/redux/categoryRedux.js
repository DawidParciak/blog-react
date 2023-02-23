export const getAllCategories = state => state.categories;

const categoryReducer = (statePart = [], action) => {
  switch(action.type) {
    default:
    return statePart;
  };
};

export default categoryReducer;
