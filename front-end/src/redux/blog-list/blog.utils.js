export const addItemToBlog = (blogItems, blogItemToAdd) => {
	const existingBlogItem = blogItems.find(
			blogItem => blogItem.id === blogItemToAdd.id
		);
		if (existingBlogItem) {
			return blogItems.map(blogItem =>
				blogItem.id === blogItemToAdd.id
					? { ...blogItem, quantity: blogItem.quantity + 1 }
					: blogItem
			);
		}
		return [...blogItems, { ...blogItemToAdd, quantity: 1 }];
	};

	export const removeItemFromBlog = (blogItems, blogItemToRemove) => {
		const existingBlogItem = blogItems.find(
			blogItem => blogItem.id === blogItemToRemove.id
		);
		if (existingBlogItem.quantity === 1) {
			return blogItems.filter(blogItem => blogItem.id !== blogItemToRemove.id);
		}
		return blogItems.map(blogItem =>
			blogItem.id === blogItemToRemove.id
				? { ...blogItem, quantity: blogItem.quantity - 1 }
				: blogItem
		);
	};