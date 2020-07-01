import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import blogReducer from './blog-list/blog.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart', 'blog']
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	blog: blogReducer
});

export default persistReducer(persistConfig, rootReducer);