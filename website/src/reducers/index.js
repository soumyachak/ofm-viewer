import dashboard_red from "./dashboard_red";
import topbar_red from "./topbar_red";
import producer_red from "./producer_red";
import linechart_red from "./linechart_red";
import scatterchart_red from "./scatterchart_red";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  dashboard_red,
  topbar_red,
  producer_red,
  linechart_red,
  scatterchart_red,
});

export default rootReducer;
