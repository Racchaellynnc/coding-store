import BlogActionTypes from './blog.types';
import { addItemToBlog, removeItemFromBlog } from './blog.utils';

const INITIAL_STATE = {
	hidden: true,
	blogItems: []
};

const blogReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BlogActionTypes.TOGGLE_BLOG_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};
		case BlogActionTypes.ADD_ITEM:
			return {
				...state,
				blogItems: addItemToBlog(state.blogItems, action.payload)
			};
		case BlogActionTypes.REMOVE_ITEM:
			return {
				...state,
				blogItems: removeItemFromBlog(state.blogItems, action.payload)
			};
		case BlogActionTypes.CLEAR_ITEM_FROM_BLOG:
			return {
				...state,
				blogItems: state.blogItems.filter(
					blogItem => blogItem.id !== action.payload.id
				)
			};
		default:
			return state;
	}
};

export default blogReducer;