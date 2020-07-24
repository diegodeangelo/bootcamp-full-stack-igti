import React from "react";
import "./DateSelect.css";

const CURRENT_YEAR = (new Date).getFullYear();

const YEARS = [CURRENT_YEAR - 1, CURRENT_YEAR, CURRENT_YEAR + 1];
const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function DateSelect() {
  return (
    <div className="date_select">
      <div class="input-field col s12">
        <a class="aves-effect waves-light btn">
          <i class="material-icons">arrow_back</i>
        </a>

        <select class="browser-default">
          <option value="" selected></option>
          {YEARS.map(year => {
            return (<option value="" selected>{year}</option>)
          }}
        </select>

        <a class="aves-effect waves-light btn">
          <i class="material-icons">arrow_forward</i>
        </a>
      </div>
    </div>
  );
}
