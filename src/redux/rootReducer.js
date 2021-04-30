
import { combineReducers } from 'redux';

import shopReducer from './reducers/shoppingReducer.js';

const rootReducer = combineReducers({
    shop: shopReducer,

})

export default rootReducer;