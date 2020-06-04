import BlogActionTypes from './blog.types';

export const updateBlogCollections = blogcollectionsMap => ({
    type: BlogActionTypes.UPDATE_BLOG_COLLECTIONS,
    payload: blogcollectionsMap
});