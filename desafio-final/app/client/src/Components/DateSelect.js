import React from "react";
import "./DateSelect.css";
import PERIODS from "../helpers/periods";

export default function DateSelect() {
  return (
    <div className="date_select">
      <div class="input-field col s12">
        <a class="aves-effect waves-light btn">
          <i class="material-icons">arrow_back</i>
        </a>

        <select class="browser-default">
          <option value="" selected></option>
          {PERIODS.map((period) => {
            return <option value="">{period}</option>;
          })}
        </select>

        <a class="aves-effect waves-light btn">
          <i class="material-icons">arrow_forward</i>
        </a>
      </div>
    </div>
  );
}
