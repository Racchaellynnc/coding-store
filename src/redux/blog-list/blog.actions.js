import BlogActionTypes from './blog.types';

export const toggleBlogHidden = () => ({
  type: BlogActionTypes.TOGGLE_BLOG_HIDDEN
});

export const addBlog = blog => ({
  type: BlogActionTypes.ADD_BLOG,
  payload: blog
});

export const removeBlog = blog => ({
  type: BlogActionTypes.REMOVE_BLOG,
  payload: blog
});

export const clearItemFromBlog = blog => ({
  type: BlogActionTypes.CLEAR_ITEM_FROM_BLOG,
  payload: blog
});