import { createSelector } from 'reselect';

const selectBlog = state => state.blog;

export const selectBlogCollections = createSelector(
  [selectBlog],
  blog => blog.collections
);

export const selectBlogCollectionsForPreview = createSelector(
  [selectBlogCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectBlogCollections],
    collections => collections[collectionUrlParam]
  );
