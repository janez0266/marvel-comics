import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import marvelReducer from "../APIS/MarvelReducer";
import comicsReducer from "../APIS/ComicsAPI";
import toolsReducer from "../APIS/ToolsReducer";

const rootReducer = combineReducers({
    personajes: marvelReducer,
    comics: comicsReducer,
    tools: toolsReducer
})

//configura la extension de chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store;
}