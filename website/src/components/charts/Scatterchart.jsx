import React from "react";
import "./Scatterchart.css";
import * as d3 from "d3";
import { useSelector } from "react-redux";

export default function Scatterchart() {
  const scatterchart_red = useSelector((state) => state.scatterchart_red);

  var dataset = [];

  if (scatterchart_red.selectedsanddata !== undefined) {
    dataset = scatterchart_red.selectedsanddata;
  }

  const width = 100;
  const xFormat = d3.format(",d");

  const x = d3
    .scaleLinear()
    .domain(d3.extent(dataset, (d) => d.xcord))
    .range([0, width]);

  const y = d3
    .scaleLinear()
    .domain(d3.extent(dataset, (d) => d.ycord))
    .range([0, 200]);

  const xTicks = x.ticks(6).map((d) =>
    x(d) > 0 && x(d) < width ? (
      <g transform={`translate(${x(d)},${220})`} key={d}>
        <text>{xFormat(d)}</text>
        <line x1="0" x2="0" y1="0" y2="5" transform="translate(0,-20)" />
      </g>
    ) : null
  );

  const yTicks = y.ticks(6).map((d) =>
    y(d) > 0 && y(d) < 200 ? (
      <g transform={`translate(${0},${200 - y(d)})`} key={d}>
        <text x="5" y="5">
          {xFormat(d)}
        </text>
        <line x1="0" x2="10" y1="0" y2="0" transform="translate(-5,0)" />
      </g>
    ) : null
  );

  const circles = dataset.map((item, index) => {
    return (
      <circle cx={x(item.xcord)} cy={200 - y(item.ycord)} r={2} key={index} />
    );
  });

  return (
    <div className="wrapper">
      <svg width={width} height="240">
        <line className="axis" x1={0} x2={width} y1={200} y2={200} />
        <line className="axis" x1={0} x2={0} y1={0} y2={200} />
        <g className="axis-labels">{xTicks}</g>
        <g className="axis-labels">{yTicks}</g>
        <g className="scatter-circles">{circles}</g>
      </svg>
    </div>
  );
}
