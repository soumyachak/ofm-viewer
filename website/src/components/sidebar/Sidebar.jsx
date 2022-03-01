import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="col-3 mainclass">
      <ul className="item">
        <li className="listitems">Producers</li>
        <li className="listitems">Injectors</li>
        <li className="listitems">Clusters</li>
      </ul>
    </div>
  );
}
