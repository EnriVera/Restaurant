import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import {createWrapper} from 'next-redux-wrapper';
import thunk from 'redux-thunk'

import restaurantReducer from "./restaurant.reducer"
import userReducer from "./user.reducer"
import tablesReducer from "./tables.reducer"

const rootReducer = combineReducers({
    restaurant: restaurantReducer,
    owner: userReducer,
    table: tablesReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = () => createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
export const wrapper = createWrapper(store, {debug: true})
