import { combineReducers } from "redux";

import counter from "./counter";
import pokemon from "./pokemon";
import pokebola from "./pokebola";

export default combineReducers({
  counter,
  pokemon,
  pokebola,
});
