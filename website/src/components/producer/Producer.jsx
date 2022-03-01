import React from "react";
import "./Producer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Linechart from "../charts/Linechart";
import Scatterchart from "../charts/Scatterchart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../actions";

export default function Producer(props) {
  const topbar_red = useSelector((state) => state.topbar_red);
  const dispatch = useDispatch();

  const producer_red = useSelector((state) => state.producer_red);
  var dropdownitems = [];

  if (
    producer_red.selectedsanddata !== undefined &&
    props.prddata !== undefined
  ) {
    var selectedSandWellnameData = Array.from(
      new Set(
        JSON.parse(
          JSON.stringify(
            JSON.parse(JSON.stringify(props.prddata)).filter(
              ({ sand }) => sand === producer_red.selectedsanddata
            )
          )
        ).map(({ wellname }) => wellname)
      )
    );

    const dataset = selectedSandWellnameData;

    dropdownitems = dataset.map((item, index) => {
      return (
        <div
          className="dropdown-item"
          key={index}
          onClick={() => {
            var selectedWellAllData = [];
            var seletedWellProdData = JSON.parse(
              JSON.stringify(props.prddata)
            ).filter(({ sand }) => sand === producer_red.selectedsanddata);
            selectedWellAllData = JSON.parse(
              JSON.stringify(seletedWellProdData)
            ).filter(({ wellname }) => wellname === item);
            dispatch(
              allActions.LinechartActions.setSelectedWellData(
                selectedWellAllData
              )
            );
          }}
        >
          {item}
        </div>
      );
    });
  }

  useEffect(() => {
    if (
      props.hdrdata !== undefined &&
      topbar_red.topbarsanddata === undefined
    ) {
      var allsands = Array.from(
        new Set(
          JSON.parse(JSON.stringify(props.hdrdata)).map(({ sand }) => sand)
        )
      );
      dispatch(allActions.TopbarActions.setTopbarSandDropdown(allsands));
    }
  }, [props]);

  return (
    <div className="row">
      <div className="col-8">
        <div className="row">
          <div className="d-flex justify-content-end">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Select well
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                {dropdownitems}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Linechart />
        </div>
      </div>
      <div className="col">
        <Scatterchart />
      </div>
    </div>
  );
}
