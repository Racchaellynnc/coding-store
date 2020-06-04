import BLOG_DATA from './blog.data';

const INITIAL_STATE = {
  collections: BLOG_DATA
};

const blogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default blogReducer;