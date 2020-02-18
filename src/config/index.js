import { combineReducers } from "redux";
import arenaReducer from '../features/arena/reducer';
import movementReducer from '../features/hero/reducer' 

const rootReducer = combineReducers({
    Arena: arenaReducer, 
    Hero:movementReducer

});
export default rootReducer;