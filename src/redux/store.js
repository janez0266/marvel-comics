import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import marvelReducer from "../reducers/CharacterReducer";
import comicsReducer from "../reducers/ComicsReducer";
import toolsReducer from "../reducers/ToolsReducer";
import favoriteReducer from "../reducers/FavoriteReducer";

const rootReducer = combineReducers({
    personajes: marvelReducer,
    comics: comicsReducer,
    tools: toolsReducer,
    favorite: favoriteReducer
})

//configura la extension de chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store;
}