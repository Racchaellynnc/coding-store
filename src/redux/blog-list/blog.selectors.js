import { createSelector } from 'reselect';

const selectBlog = state => state.blog;

export const selectBlogItems = createSelector(
  [selectBlog],
  blog => blog.blogItems
);

export const selectBlogHidden = createSelector(
  [selectBlog],
  blog => blog.hidden
);

export const selectBlogItemsCount = createSelector(
  [selectBlogItems],
  blogItems =>
    blogItems.reduce(
      (accumalatedQuantity, blogItem) =>
        accumalatedQuantity + blogItem.quantity,
      0
    )
);

export const selectBlogTotal = createSelector(
  [selectBlogItems],
  blogItems =>
    blogItems.reduce(
      (accumalatedQuantity, blogItem) =>
        accumalatedQuantity + blogItem.quantity * blogItem.price,
      0
    )
);