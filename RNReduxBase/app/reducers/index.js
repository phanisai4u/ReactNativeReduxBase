import { combineReducers } from "redux";
import { NavReducer } from "./nav.reducer";

import  {AuthReducer} from './auth.reducer';
const reducers = combineReducers({
  nav: NavReducer,
  auth:AuthReducer

});

export default reducers;
