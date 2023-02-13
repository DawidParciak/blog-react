import shortid from "shortid";

//selectors
export const getAllPosts = state  => state.posts;
export const getPostById = ({ posts }, postId) => 
  posts.find(post => post.id === postId);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST');
const ADD_POST = createActionName('ADD_POST')

// action creators
export const removePost = payload => ({ type: REMOVE_POST, payload });
export const addPost = payload => ({ type: ADD_POST, payload });
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter(post => post.id !== action.payload);
    case ADD_POST:
      return [...statePart, {...action.payload, id: shortid() }];
    default:
      return statePart;
  };
};

export default postsReducer;
