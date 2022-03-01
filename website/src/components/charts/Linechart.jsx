import React from "react";
import "./Linechart.css";
import * as d3 from "d3";
import { useSelector } from "react-redux";

export default function Linechart() {
  const linechart_red = useSelector((state) => state.linechart_red);

  var dataset = [];

  if (linechart_red.selectedwelldata !== undefined) {
    dataset = linechart_red.selectedwelldata;

    for (var i = 0; i < dataset.length; i++) {
      dataset[i].date = new Date(dataset[i].date).getTime();
    }
  }

  const width = 200;
  const xFormat = d3.timeFormat("%Y");

  const x = d3
    .scaleLinear()
    .domain(d3.extent(dataset, (d) => d.date))
    .range([0, width]);

  const y = d3
    .scaleLinear()
    .domain(d3.extent(dataset, (d) => d.prod))
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

  const line = d3
    .line()
    .x((d) => x(d.date))
    .y((d) => 200 - y(d.prod))
    .curve(d3.curveCatmullRom.alpha(0.5));

  return (
    <div className="wrapper">
      <svg width={width} height="240">
        <line className="axis" x1={0} x2={width} y1={200} y2={200} />
        <line className="axis" x1={0} x2={0} y1={0} y2={200} />
        <g className="axis-labels">{xTicks}</g>
        <g className="axis-labels">{yTicks}</g>
        <path d={line(dataset)} />
      </svg>
    </div>
  );
}
