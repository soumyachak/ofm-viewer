import React from "react";
import "./Topbar.css";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../actions";

export default function Topbar() {
  const topbar_red = useSelector((state) => state.topbar_red);
  const dashboard_red = useSelector((state) => state.dashboard_red);
  var dropdownitems = [];
  const dispatch = useDispatch();

  if (topbar_red.topbarsanddata !== undefined) {
    const dataset = topbar_red.topbarsanddata;
    dropdownitems = dataset.map((item, index) => {
      return (
        <div
          className="dropdown-item"
          key={index}
          onClick={() => {
            dispatch(allActions.ProducerActions.setSelectedSand(item));

            var selectedSandData = JSON.parse(
              JSON.stringify(dashboard_red.hdrdata)
            ).filter(({ sand }) => sand === item);
            dispatch(
              allActions.ScatterchartActions.setSelectedSandData(
                selectedSandData
              )
            );
          }}
        >
          {item}
        </div>
      );
    });
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand w-25">OFM visualization</div>
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <div
            className="nav-link dropdown-toggle"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select Sand
          </div>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            {dropdownitems}
          </div>
        </li>
      </ul>
    </nav>
  );
}
