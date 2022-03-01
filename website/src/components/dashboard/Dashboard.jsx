import React from "react";
import "./Dashboard.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as api from "../../ip/ip";
import Producer from "../producer/Producer";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../actions";

export default function Dashboard() {
  const dashboard_red = useSelector((state) => state.dashboard_red);
  const dispatch = useDispatch();

  useEffect(() => {
    api.welldata().then((res) => {
      var welljson = [];
      for (var i = 0; i < res.data["lines"].length; i++) {
        const obj = {};
        obj.xcord = Number(res.data["lines"][i][0]);
        obj.ycord = Number(res.data["lines"][i][1]);
        var wellsandarr = res.data["lines"][i][4].split("_");
        obj.wellname = wellsandarr[0];
        obj.sand = wellsandarr[1];
        welljson.push(obj);
      }

      dispatch(allActions.DashboardActions.setHeader(welljson));
    });

    api.proddata().then((res) => {
      var prodjson = [];
      for (var i = 0; i < res.data["lines"].length; i++) {
        const obj = {};
        obj.date = new Date(res.data["lines"][i][0]);
        obj.prod = Number(res.data["lines"][i][4]);
        var wellsandarr = res.data["lines"][i][9].split("_");
        obj.wellname = wellsandarr[0];
        obj.sand = wellsandarr[1];
        prodjson.push(obj);
      }

      dispatch(allActions.DashboardActions.setProd(prodjson));
    });
  }, []);

  return (
    <div className="col">
      <Producer
        hdrdata={dashboard_red.hdrdata}
        prddata={dashboard_red.prddata}
      />
    </div>
  );
}
