import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import restaurantReducer from "./restaurant.reducer"
import userReducer from "./user.reducer"

const rootReducer = combineReducers({
    restaurant: restaurantReducer,
    owner: userReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    return store
}
